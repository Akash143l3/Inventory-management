"use client";

import { useState, useEffect } from "react";
import { Search, Plus, Eye, Trash2 } from "lucide-react";
import Image from "next/image";
import OrderModal from "../../components/OrderModal";
import OrderDetailsModal from "../../components/OrderDetailsModal";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button"; // Import ShadCN Button component

interface Order {
  OrderID: number;
  OrderDate: string;
  CustomerID: number;
  ProductID: number;
  ProductName: string;
  ProductImage: string;
  Quantity: number;
  Price: number;
  TotalPrice: number;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState<Order | null>(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  async function fetchOrders() {
    try {
      setLoading(true);
      const res = await fetch("/api/orders");
      const data = await res.json();
      setOrders(data || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDeleteOrder() {
    if (!orderToDelete) return;

    try {
      const res = await fetch("/api/orders", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ OrderID: orderToDelete.OrderID }),
      });

      if (res.ok) {
        fetchOrders();
      } else {
        alert("Failed to delete the order");
      }
    } catch (error) {
      console.error("Error deleting order:", error);
    } finally {
      setIsDialogOpen(false);
      setOrderToDelete(null);
    }
  }

  function handleViewOrderDetails(order: Order) {
    setSelectedOrder(order);
    setIsDetailsModalOpen(true);
  }

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }

  const filteredOrders = orders.filter(
    (order) =>
      order.OrderID.toString().includes(searchTerm) ||
      order.ProductName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 px-6 py-8 bg-gradient-to-r  min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-extrabold text-gray-900">Orders</h1>
        <Button
          onClick={() => setIsCreateModalOpen(true)}
          className="flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          New Order
        </Button>
      </div>

      <div className="flex items-center bg-white rounded-lg shadow-lg px-4 py-2 w-full max-w-lg mx-auto mb-6">
        <Search className="h-5 w-5 text-gray-400 mr-3" />
        <input
          type="text"
          placeholder="Search orders by ID or product..."
          className="form-input border-none focus:ring-0 w-full text-gray-800"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
        </div>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-6 text-left text-gray-600">Order ID</th>
                <th className="py-3 px-6 text-left text-gray-600">Date</th>
                <th className="py-3 px-6 text-left text-gray-600">Product</th>
                <th className="py-3 px-6 text-left text-gray-600">Quantity</th>
                <th className="py-3 px-6 text-left text-gray-600">Total</th>
                <th className="py-3 px-6 text-left text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredOrders.map((order) => (
                <tr key={order.OrderID} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-6 font-medium">#{order.OrderID}</td>
                  <td className="py-3 px-6">{formatDate(order.OrderDate)}</td>
                  <td className="py-3 px-6 flex items-center">
                    {order.ProductImage &&
                    typeof order.ProductImage === "string" &&
                    order.ProductImage.trim() !== "" ? (
                      <div className="h-10 w-10 relative mr-3 bg-gray-200 rounded-md overflow-hidden">
                        <Image
                          src={order.ProductImage}
                          alt={order.ProductName}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : null}
                    <span>{order.ProductName}</span>
                  </td>

                  <td className="py-3 px-6">{order.Quantity}</td>
                  <td className="py-3 px-6 font-medium">
                    ${order.TotalPrice.toFixed(2)}
                  </td>
                  <td className="py-3 px-6">
                    <div className="flex space-x-3">
                      <Button
                        onClick={() => handleViewOrderDetails(order)}
                        variant="link" // Use ShadCN link variant for viewing details
                        className="text-blue-600 hover:text-blue-700"
                        title="View Details"
                      >
                        <Eye className="h-5 w-5" />
                      </Button>
                      <Button
                        onClick={() => {
                          setOrderToDelete(order);
                          setIsDialogOpen(true);
                        }}
                        variant="link" // Use ShadCN link variant for deleting order
                        className="text-red-600 hover:text-red-700"
                        title="Delete Order"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredOrders.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-gray-400">
                    <Search className="h-8 w-8 mx-auto mb-2" />
                    <p>No orders found</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {isCreateModalOpen && (
        <OrderModal
          onClose={() => setIsCreateModalOpen(false)}
          onSave={() => {
            setIsCreateModalOpen(false);
            fetchOrders();
          }}
        />
      )}

      {isDetailsModalOpen && selectedOrder && (
        <OrderDetailsModal
          order={selectedOrder}
          onClose={() => setIsDetailsModalOpen(false)}
        />
      )}

      {/* Confirmation Dialog for Deletion */}
      {isDialogOpen && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this order? This action cannot
                be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                onClick={() => setIsDialogOpen(false)}
                variant="secondary" // Use ShadCN secondary variant
              >
                Cancel
              </Button>
              <Button
                onClick={handleDeleteOrder}
                variant="destructive" // Use ShadCN destructive variant
              >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
