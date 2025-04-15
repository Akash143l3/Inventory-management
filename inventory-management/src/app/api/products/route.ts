import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// POST: Insert a new product
export async function POST(req: Request) {
  const { ProductName, UnitPrice, CategoryID, SupplierID } = await req.json();

  try {
    await prisma.$executeRaw`CALL sp_insert_product(${ProductName}, ${UnitPrice}, ${CategoryID}, ${SupplierID})`;
    return NextResponse.json({ message: "Product inserted successfully." });
  } catch (error) {
    console.error("Error inserting product:", error);
    return NextResponse.json(
      { error: "Failed to insert product." },
      { status: 500 }
    );
  }
}

// PUT: Update a product
export async function PUT(req: Request) {
  const { ProductID, ProductName, UnitPrice, CategoryID, SupplierID } =
    await req.json();

  try {
    await prisma.$executeRaw`CALL sp_update_product(${ProductID}, ${ProductName}, ${UnitPrice}, ${CategoryID}, ${SupplierID})`;
    return NextResponse.json({ message: "Product updated successfully." });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { error: "Failed to update product." },
      { status: 500 }
    );
  }
}

// DELETE: Delete a product using stored procedure
export async function DELETE(req: Request) {
  const { ProductID } = await req.json();

  if (!ProductID) {
    return NextResponse.json(
      { error: "ProductID is required" },
      { status: 400 }
    );
  }

  try {
    await prisma.$executeRaw`CALL sp_delete_product(${ProductID})`;
    return NextResponse.json({ message: "Product deleted successfully." });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { error: "Failed to delete product." },
      { status: 500 }
    );
  }
}

// GET: Fetch one product by ID or all products
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const productId = searchParams.get("ProductID");

  try {
    if (productId) {
      // Fetch one product
      const product = await prisma.product.findUnique({
        where: { ProductID: parseInt(productId) },
      });

      if (product) {
        return NextResponse.json({ product });
      } else {
        return NextResponse.json(
          { error: "Product not found." },
          { status: 404 }
        );
      }
    } else {
      // Fetch all products
      const products = await prisma.product.findMany();
      return NextResponse.json({ products });
    }
  } catch (error) {
    console.error("Error retrieving product(s):", error);
    return NextResponse.json(
      { error: "Failed to retrieve product(s)." },
      { status: 500 }
    );
  }
}
