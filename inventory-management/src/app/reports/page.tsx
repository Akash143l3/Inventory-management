"use client";

import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BarChart3, PackageSearch, Loader2 } from "lucide-react";

export default function ReportsPage() {
  const [salesData, setSalesData] = useState([]);
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const ordersRes = await fetch("/api/orders");
        const ordersData = await ordersRes.json();

        const stockRes = await fetch("/api/stock");
        const stockData = await stockRes.json();

        const productSales = ordersData.reduce((acc: any, order: any) => {
          const existing = acc.find(
            (item: any) => item.name === order.ProductName
          );
          if (existing) {
            existing.sales += order.TotalPrice;
            existing.quantity += order.Quantity;
          } else {
            acc.push({
              name: order.ProductName,
              sales: order.TotalPrice,
              quantity: order.Quantity,
            });
          }
          return acc;
        }, []);

        productSales.sort((a: any, b: any) => b.sales - a.sales);
        setSalesData(productSales.slice(0, 5));

        const stockLevels = stockData.map((item: any) => ({
          name: item.ProductName,
          stock: item.QuantityInStock,
        }));

        setStockData(stockLevels);
      } catch (error) {
        console.error("Error fetching report data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <BarChart3 className="w-7 h-7 text-blue-600" />
        Reports
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card p-4 shadow rounded bg-white dark:bg-gray-900">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-purple-500" />
              Top 5 Products by Sales
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={salesData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" fill="#8884d8" name="Sales" />
                  <Bar dataKey="quantity" fill="#82ca9d" name="Quantity Sold" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card p-4 shadow rounded bg-white dark:bg-gray-900">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <PackageSearch className="w-5 h-5 text-yellow-500" />
              Current Stock Levels
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={stockData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="stock" fill="#ffc658" name="Stock" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
