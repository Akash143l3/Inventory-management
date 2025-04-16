"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface Product {
  ProductID: number;
  ProductName: string;
  UnitPrice: number;
}

interface Customer {
  CustomerID: number;
  CustomerName: string;
}

interface OrderFormData {
  OrderDate: string;
  CustomerID: number;
  ProductID: number;
  Quantity: number;
  Price: number;
}

interface OrderModalProps {
  onClose: () => void;
  onSave: () => void;
}

export default function OrderModal({ onClose, onSave }: OrderModalProps) {
  const [formData, setFormData] = useState<OrderFormData>({
    OrderDate: new Date().toISOString().split("T")[0],
    CustomerID: 1,
    ProductID: 1,
    Quantity: 1,
    Price: 0,
  });

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const productsRes = await fetch("/api/products");
        const productsData = await productsRes.json();
        setProducts(productsData.products || []);

        setCustomers([
          { CustomerID: 1, CustomerName: "John Doe" },
          { CustomerID: 2, CustomerName: "Jane Smith" },
          { CustomerID: 3, CustomerName: "Bob Johnson" },
        ]);

        if (productsData.products && productsData.products.length > 0) {
          setFormData((prev) => ({
            ...prev,
            ProductID: productsData.products[0].ProductID,
            Price: productsData.products[0].UnitPrice,
          }));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "ProductID") {
      const selectedProduct = products.find(
        (p) => p.ProductID === Number(value)
      );
      setFormData((prev) => ({
        ...prev,
        [name]: Number(value),
        Price: selectedProduct ? selectedProduct.UnitPrice : 0,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]:
          name === "CustomerID" || name === "Quantity" || name === "Price"
            ? Number(value)
            : value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        onSave();
      } else {
        const errorData = await res.json();
        alert(`Error: ${errorData.error || "Failed to create order"}`);
      }
    } catch (error) {
      console.error("Error creating order:", error);
      alert("An error occurred while creating the order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 space-y-6">
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-2xl font-semibold">Create New Order</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="OrderDate" className="text-gray-600 font-medium">
              Order Date
            </label>
            <input
              type="date"
              id="OrderDate"
              name="OrderDate"
              value={formData.OrderDate}
              onChange={handleChange}
              className="mt-2 p-2 border rounded-lg w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="CustomerID" className="text-gray-600 font-medium">
              Customer
            </label>
            <select
              id="CustomerID"
              name="CustomerID"
              value={formData.CustomerID}
              onChange={handleChange}
              className="mt-2 p-2 border rounded-lg w-full"
              required
            >
              {customers.map((customer) => (
                <option key={customer.CustomerID} value={customer.CustomerID}>
                  {customer.CustomerName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="ProductID" className="text-gray-600 font-medium">
              Product
            </label>
            <select
              id="ProductID"
              name="ProductID"
              value={formData.ProductID}
              onChange={handleChange}
              className="mt-2 p-2 border rounded-lg w-full"
              required
            >
              {products.map((product) => (
                <option key={product.ProductID} value={product.ProductID}>
                  {product.ProductName} - ${product.UnitPrice.toFixed(2)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="Quantity" className="text-gray-600 font-medium">
              Quantity
            </label>
            <input
              type="number"
              id="Quantity"
              name="Quantity"
              value={formData.Quantity}
              onChange={handleChange}
              min="1"
              className="mt-2 p-2 border rounded-lg w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="Price" className="text-gray-600 font-medium">
              Unit Price
            </label>
            <input
              type="number"
              id="Price"
              name="Price"
              value={formData.Price}
              onChange={handleChange}
              min="0.01"
              step="0.01"
              className="mt-2 p-2 border rounded-lg w-full"
              required
            />
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total:</span>
              <span>${(formData.Price * formData.Quantity).toFixed(2)}</span>
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-2 rounded-lg"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Order"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
