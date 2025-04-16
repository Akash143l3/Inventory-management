"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";

interface StockItem {
  ProductID: number;
  ProductName: string;
  QuantityInStock: number;
}

interface StockModalProps {
  stockItem: StockItem | null;
  onClose: () => void;
  onSave: () => void;
}

export default function StockModal({
  stockItem,
  onClose,
  onSave,
}: StockModalProps) {
  const [quantity, setQuantity] = useState(stockItem?.QuantityInStock || 0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stockItem) return;

    setLoading(true);

    try {
      const res = await fetch("/api/stock", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ProductID: stockItem.ProductID,
          QuantityInStock: quantity,
        }),
      });

      if (res.ok) {
        onSave();
      } else {
        const errorData = await res.json();
        alert(`Error: ${errorData.error || "Failed to update stock"}`);
      }
    } catch (error) {
      console.error("Error updating stock:", error);
      alert("An error occurred while updating the stock");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full transition-transform transform scale-95 hover:scale-100">
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <h2 className="text-xl font-semibold text-gray-900">Update Stock</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Product
            </label>
            <input
              type="text"
              value={stockItem?.ProductName || ""}
              className="form-input w-full px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              disabled
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity in Stock
            </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="0"
              className="form-input w-full px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="flex justify-end space-x-4 pt-6">
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              color="gray"
              disabled={loading}
              className="w-24"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              color="primary"
              disabled={loading}
              className="w-24"
            >
              {loading ? "Saving..." : "Update Stock"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
