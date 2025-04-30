import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// POST: Insert a new product
export async function POST(req: Request) {
  const { ProductName, UnitPrice, CategoryID, SupplierID, ProductImage } =
    await req.json();

  try {
    // Instead of using the stored procedure, use Prisma's createMany
    const product = await prisma.product.create({
      data: {
        ProductName,
        UnitPrice,
        CategoryID,
        SupplierID,
        // Store the image URL instead of binary data
        ProductImage: null, // We'll modify the schema to handle URLs
      },
    });

    return NextResponse.json({
      message: "Product inserted successfully.",
      product,
    });
  } catch (error) {
    console.error("Error inserting product:", error);
    return NextResponse.json(
      { error: "Failed to insert product." },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  const {
    ProductID,
    ProductName,
    UnitPrice,
    CategoryID,
    SupplierID,
    ProductImage,
  } = await req.json();

  try {
    // Use Prisma's update instead of stored procedure
    const product = await prisma.product.update({
      where: {
        ProductID: ProductID,
      },
      data: {
        ProductName,
        UnitPrice,
        CategoryID,
        SupplierID,
        // Handle image URL
        ProductImage: null, // We'll modify the schema to handle URLs
      },
    });

    return NextResponse.json({
      message: "Product updated successfully.",
      product,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { error: "Failed to update product." },
      { status: 500 }
    );
  }
}

// DELETE: Delete a product using Prisma
export async function DELETE(req: Request) {
  const { ProductID } = await req.json();

  if (!ProductID) {
    return NextResponse.json(
      { error: "ProductID is required" },
      { status: 400 }
    );
  }

  try {
    await prisma.product.delete({
      where: {
        ProductID: ProductID,
      },
    });
    return NextResponse.json({ message: "Product deleted successfully." });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { error: "Failed to delete product." },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const productId = searchParams.get("ProductID");

  try {
    if (productId) {
      // Use Prisma's findUnique
      const product = await prisma.product.findUnique({
        where: {
          ProductID: parseInt(productId),
        },
        include: {
          stock: true,
        },
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
      // Use Prisma's findMany
      const products = await prisma.product.findMany({
        include: {
          stock: true,
        },
      });
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
