"use client";
import Link from "next/link";

import { useEffect, useState } from "react";

type Product = {
  ProductID: number;
  ProductName: string;
  UnitPrice: number;
  stock?: {
    QuantityInStock: number;
  } | null;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Products</h1>
      <Link href="/products/add" className="text-blue-500 underline">
        Add Product
      </Link>
      <table className="w-full mt-4 border">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.ProductID}>
              <td>{p.ProductID}</td>
              <td>{p.ProductName}</td>
              <td>{p.UnitPrice}</td>
              <td>{p.stock?.QuantityInStock ?? 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
