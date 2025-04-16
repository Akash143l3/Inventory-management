"use client";

import { useState, useEffect } from "react";
import { Plus, Search, Edit, Trash2, ImageIcon } from "lucide-react";
import Image from "next/image";
import ProductModal from "../../components/ProductModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"; // ScadCN Dialog import

interface Product {
  ProductID: number;
  ProductName: string;
  ProductImage: any;
  UnitPrice: number;
  CategoryID: number;
  SupplierID: number;
  CategoryName?: string;
  SupplierName?: string;
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1616094634293-3f3c6b3d5a2e?auto=format&fit=crop&w=800&q=80";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [deleteProductId, setDeleteProductId] = useState<number | null>(null); // State for holding the product ID to be deleted

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDeleteProduct() {
    if (deleteProductId === null) return;

    try {
      const res = await fetch("/api/products", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ProductID: deleteProductId }),
      });

      if (res.ok) {
        fetchProducts();
        setDeleteProductId(null); // Clear the ID after deletion
      } else {
        alert("Failed to delete the product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

  function handleEditProduct(product: Product) {
    setCurrentProduct(product);
    setIsModalOpen(true);
  }

  function handleAddProduct() {
    setCurrentProduct(null);
    setIsModalOpen(true);
  }

  const getImageSrc = (product: Product) => {
    const imageData = product.ProductImage;

    if (!imageData) return FALLBACK_IMAGE;

    if (typeof imageData === "string") {
      if (imageData.startsWith("data:image")) return imageData;
      if (imageData.startsWith("blob:")) return imageData;
      if (
        imageData.length > 100 &&
        /^[A-Za-z0-9+/=]+$/.test(imageData.substring(0, 100))
      ) {
        return `data:image/jpeg;base64,${imageData}`;
      }
      return imageData;
    }

    if (typeof imageData === "object") {
      try {
        if (imageData.type === "Buffer" && Array.isArray(imageData.data)) {
          const base64 = btoa(String.fromCharCode(...imageData.data));
          return `data:image/jpeg;base64,${base64}`;
        }
      } catch (error) {
        console.error("Error processing image data:", error);
      }
    }

    return FALLBACK_IMAGE;
  };

  const filteredProducts = products.filter((product) =>
    product.ProductName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold">Products</h1>
        <Button onClick={handleAddProduct}>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <div className="w-full max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            className="pl-9"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="space-y-4">
              <Skeleton className="h-40 w-full rounded-md" />
              <CardContent className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/3" />
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Skeleton className="h-8 w-16" />
                <Skeleton className="h-8 w-16" />
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const imageSrc = getImageSrc(product);

            return (
              <Card key={product.ProductID} className="flex flex-col">
                <CardContent className="p-4">
                  <div className="relative w-full h-40">
                    <Image
                      src={imageSrc}
                      alt={product.ProductName}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover rounded-t-md"
                      unoptimized={
                        imageSrc.startsWith("data:") ||
                        imageSrc.startsWith("blob:")
                      }
                    />
                  </div>

                  <div className="mt-4 space-y-1">
                    <CardTitle className="text-lg font-semibold">
                      {product.ProductName}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      ₹{product.UnitPrice.toFixed(2)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {product.CategoryName || "—"} ·{" "}
                      {product.SupplierName || "—"}
                    </p>
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between px-4 pb-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditProduct(product)}
                  >
                    <Edit className="mr-1 h-4 w-4" />
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => setDeleteProductId(product.ProductID)}
                  >
                    <Trash2 className="mr-1 h-4 w-4" />
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}

      <Dialog
        open={deleteProductId !== null}
        onOpenChange={(open) => !open && setDeleteProductId(null)}
      >
        <DialogContent>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this product?
          </DialogDescription>
          <DialogFooter>
            <Button onClick={() => setDeleteProductId(null)}>Cancel</Button>
            <Button variant="destructive" onClick={handleDeleteProduct}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {isModalOpen && (
        <ProductModal
          product={currentProduct}
          onClose={() => setIsModalOpen(false)}
          onSave={() => {
            setIsModalOpen(false);
            fetchProducts();
          }}
        />
      )}
    </div>
  );
}
