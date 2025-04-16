"use client";

import { useState, useEffect } from "react";
import { Search, Edit, AlertCircle } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import StockModal from "../../components/StockModal";

interface StockItem {
  ProductID: number;
  ProductName: string;
  ProductImage: string;
  QuantityInStock: number;
}

export default function InventoryPage() {
  const [stock, setStock] = useState<StockItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStock, setCurrentStock] = useState<StockItem | null>(null);

  useEffect(() => {
    fetchStock();
  }, []);

  async function fetchStock() {
    try {
      setLoading(true);
      const res = await fetch("/api/stock");
      const data = await res.json();
      setStock(data || []);
    } catch (error) {
      console.error("Error fetching stock:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleEditStock(stockItem: StockItem) {
    setCurrentStock(stockItem);
    setIsModalOpen(true);
  }

  const filteredStock = stock.filter((item) =>
    item.ProductName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 px-6 py-8 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-900">Inventory</h1>
      </div>

      <div className="flex items-center bg-white rounded-lg shadow-md px-4 py-2 w-full max-w-xl mx-auto">
        <Search className="h-5 w-5 text-gray-400 mr-2" />
        <Input
          placeholder="Search inventory..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStock.length === 0 ? (
            <div className="text-center text-gray-500 col-span-full">
              <Search className="h-8 w-8 text-gray-400 mb-2" />
              <p>No stock items found</p>
            </div>
          ) : (
            filteredStock.map((item) => (
              <Card
                key={item.ProductID}
                className="p-4 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex items-center">
                    <div className="h-24 w-24 relative mr-4 bg-gray-100 rounded-md overflow-hidden">
                      <Image
                        src={
                          typeof item.ProductImage === "string" &&
                          item.ProductImage.trim() !== ""
                            ? item.ProductImage // Use product image if it's a non-empty string
                            : "https://intuendi.com/wp-content/uploads/2023/06/InventoryControl2.png" // Fallback image
                        }
                        alt={item.ProductName}
                        layout="fill"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="font-semibold text-lg text-gray-900">
                        {item.ProductName}
                      </CardTitle>
                      <p className="text-sm text-gray-500">
                        ID: {item.ProductID}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-medium">
                      {item.QuantityInStock}
                    </span>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full inline-flex items-center ${
                        item.QuantityInStock <= 5
                          ? "bg-red-100 text-red-800"
                          : item.QuantityInStock <= 20
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {item.QuantityInStock <= 5 ? (
                        <AlertCircle className="h-3 w-3 mr-1" />
                      ) : item.QuantityInStock <= 20 ? (
                        <AlertCircle className="h-3 w-3 mr-1" />
                      ) : null}
                      {item.QuantityInStock <= 5
                        ? "Low Stock"
                        : item.QuantityInStock <= 20
                        ? "Medium Stock"
                        : "In Stock"}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={`link`}
                    onClick={() => handleEditStock(item)}
                    className="p-2 rounded-full text-blue-600 hover:bg-blue-50 transition-all"
                  >
                    <Edit className="h-5 w-5" />
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      )}

      {isModalOpen && (
        <StockModal
          stockItem={currentStock}
          onClose={() => setIsModalOpen(false)}
          onSave={() => {
            setIsModalOpen(false);
            fetchStock();
          }}
        />
      )}
    </div>
  );
}
