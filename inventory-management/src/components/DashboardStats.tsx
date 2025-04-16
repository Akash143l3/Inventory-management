"use client";

import { useEffect, useState } from "react";
import { CreditCard, Package, ShoppingCart, TrendingUp } from "lucide-react";
import { Card, CardHeader, CardContent } from "../components/ui/card";

export default function DashboardStats() {
  const [stats, setStats] = useState({
    totalSales: 0,
    totalOrders: 0,
    totalProducts: 0,
    lowStock: 0,
  });

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        // Fetch orders for total orders count
        const ordersRes = await fetch("/api/orders");
        const ordersData = await ordersRes.json();

        // Fetch products
        const productsRes = await fetch("/api/products");
        const productsData = await productsRes.json();

        // Fetch stock info
        const stockRes = await fetch("/api/stock");
        const stockData = await stockRes.json();

        // Calculate totals
        const totalSales = ordersData.reduce(
          (sum: number, order: any) => sum + (order.TotalPrice || 0),
          0
        );

        const lowStockItems = stockData.filter(
          (item: any) => item.QuantityInStock < 10
        ).length;

        setStats({
          totalSales,
          totalOrders: ordersData.length,
          totalProducts: productsData.products?.length || 0,
          lowStock: lowStockItems,
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    }

    fetchDashboardData();
  }, []);

  const statItems = [
    {
      name: "Total Sales",
      value: `$${stats.totalSales.toLocaleString()}`,
      icon: CreditCard,
      color: "bg-green-100 text-green-600",
    },
    {
      name: "Total Orders",
      value: stats.totalOrders,
      icon: ShoppingCart,
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Total Products",
      value: stats.totalProducts,
      icon: Package,
      color: "bg-purple-100 text-purple-600",
    },
    {
      name: "Low Stock Items",
      value: stats.lowStock,
      icon: TrendingUp,
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statItems.map((item) => (
        <Card key={item.name} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div
              className={`flex items-center justify-center w-16 h-16 rounded-full ${item.color}`}
            >
              <item.icon className="h-8 w-8" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium text-gray-500">{item.name}</p>
            <p className="text-2xl font-semibold">{item.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
