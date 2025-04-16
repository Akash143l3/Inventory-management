"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

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

interface OrderDetailsModalProps {
  order: Order;
  onClose: () => void;
}

export default function OrderDetailsModal({
  order,
  onClose,
}: OrderDetailsModalProps) {
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-semibold text-gray-900">
            Order #{order.OrderID}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-6 bg-gray-50">
          <div className="flex justify-between pb-4 border-b">
            <span className="text-gray-600">Date:</span>
            <span className="font-medium text-gray-800">
              {formatDate(order.OrderDate)}
            </span>
          </div>

          <div className="pb-4 border-b">
            <h3 className="text-gray-700 font-medium mb-3">Product</h3>
            <div className="flex items-center">
              <div className="h-20 w-20 relative mr-4 bg-gray-100 rounded-md overflow-hidden">
                {order.ProductImage ? (
                  <Image
                    src={order.ProductImage}
                    alt={order.ProductName}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
              </div>
              <div>
                <p className="font-medium text-gray-900">{order.ProductName}</p>
                <p className="text-sm text-gray-600">
                  Product ID: {order.ProductID}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between pb-4 border-b">
            <span className="text-gray-600">Customer ID:</span>
            <span className="font-medium text-gray-800">
              {order.CustomerID}
            </span>
          </div>

          <div className="flex justify-between pb-4 border-b">
            <span className="text-gray-600">Unit Price:</span>
            <span className="font-medium text-gray-800">
              ${order.Price.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between pb-4 border-b">
            <span className="text-gray-600">Quantity:</span>
            <span className="font-medium text-gray-800">{order.Quantity}</span>
          </div>

          <div className="flex justify-between text-lg font-bold text-gray-900">
            <span>Total:</span>
            <span>${order.TotalPrice.toFixed(2)}</span>
          </div>

          <div className="pt-6">
            <Button onClick={onClose} variant="secondary" className="w-full">
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
