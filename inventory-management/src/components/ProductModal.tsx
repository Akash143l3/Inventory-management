import { useState, useEffect } from "react";
import imageCompression from "browser-image-compression";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface Product {
  ProductID?: number;
  ProductName: string;
  ProductImage: string;
  UnitPrice: number;
  CategoryID: number;
  SupplierID: number;
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onSave: () => void;
}

interface Category {
  CategoryID: number;
  CategoryName: string;
}

interface Supplier {
  SupplierID: number;
  SupplierName: string;
}

export default function ProductModal({
  product,
  onClose,
  onSave,
}: ProductModalProps) {
  const [formData, setFormData] = useState<Product>({
    ProductName: "",
    ProductImage: "",
    UnitPrice: 0,
    CategoryID: 1,
    SupplierID: 1,
  });

  
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (product) {
      setFormData(product);
      setImagePreview(product.ProductImage || null);
    }

    setCategories([
      { CategoryID: 1, CategoryName: "Electronics" },
      { CategoryID: 2, CategoryName: "Clothing" },
      { CategoryID: 3, CategoryName: "Home & Kitchen" },
    ]);

    setSuppliers([
      { SupplierID: 1, SupplierName: "Tech Solutions Inc." },
      { SupplierID: 2, SupplierName: "Fashion World" },
      { SupplierID: 3, SupplierName: "HomeGoods Inc." },
    ]);
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "UnitPrice" ? parseFloat(value) : value,
    }));

    // If changing ProductImage as a URL
    if (name === "ProductImage") {
      setImagePreview(value);
    }
  };

  const handleSelectChange = (
    name: "CategoryID" | "SupplierID",
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const compressedFile = await imageCompression(file, {
        maxSizeMB: 0.3,
        maxWidthOrHeight: 800,
        useWebWorker: true,
      });

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setFormData((prev) => ({
          ...prev,
          ProductImage: base64,
        }));
        setImagePreview(base64);
      };
      reader.readAsDataURL(compressedFile);
    } catch (error) {
      console.error("Image compression error:", error);
      alert("Failed to compress the image.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const method = formData.ProductID ? "PUT" : "POST";

      const res = await fetch("/api/products", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        onSave();
      } else {
        const errorData = await res.json();
        alert(`Error: ${errorData.error || "Failed to save product"}`);
      }
    } catch (error) {
      console.error("Error saving product:", error);
      alert("An error occurred while saving the product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>
              {formData.ProductID ? "Edit Product" : "Add New Product"}
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="ProductName">Product Name</Label>
              <Input
                id="ProductName"
                name="ProductName"
                value={formData.ProductName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="ProductImage">Product Image</Label>

              {/* URL input */}
              <Input
                id="ProductImage"
                name="ProductImage"
                type="text"
                placeholder="Paste image URL"
                value={
                  typeof formData.ProductImage === "string"
                    ? formData.ProductImage
                    : ""
                }
                onChange={handleChange}
              />

              {/* File upload input */}
              <Input
                className="mt-2"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />

              {/* Preview */}
              {imagePreview && (
                <div className="mt-2">
                  <img
                    src={imagePreview}
                    alt="Product Preview"
                    className="w-32 h-32 object-cover rounded"
                  />
                </div>
              )}
            </div>

            <div>
              <Label htmlFor="UnitPrice">Price</Label>
              <Input
                id="UnitPrice"
                name="UnitPrice"
                type="number"
                min="0"
                step="0.01"
                value={formData.UnitPrice}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label>Category</Label>
              <Select
                value={String(formData.CategoryID)}
                onValueChange={(value) =>
                  handleSelectChange("CategoryID", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem
                      key={category.CategoryID}
                      value={String(category.CategoryID)}
                    >
                      {category.CategoryName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Supplier</Label>
              <Select
                value={String(formData.SupplierID)}
                onValueChange={(value) =>
                  handleSelectChange("SupplierID", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select supplier" />
                </SelectTrigger>
                <SelectContent>
                  {suppliers.map((supplier) => (
                    <SelectItem
                      key={supplier.SupplierID}
                      value={String(supplier.SupplierID)}
                    >
                      {supplier.SupplierName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save Product"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
