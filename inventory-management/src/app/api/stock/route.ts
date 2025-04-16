import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("ProductID");

  try {
    if (id) {
      // Fetch stock details for a specific ProductID from vw_all_stock view
      const stock = await prisma.$queryRaw<any[]>`
        SELECT ProductID, ProductName, ProductImage, QuantityInStock
        FROM vw_all_stock
        WHERE ProductID = ${parseInt(id)}
      `;

      if (stock.length === 0)
        return NextResponse.json({ error: "Not found" }, { status: 404 });

      return NextResponse.json(stock[0]);
    }

    // Fetch all stock details from the vw_all_stock view
    const stocks = await prisma.$queryRaw<any[]>`
      SELECT ProductID, ProductName, ProductImage, QuantityInStock
      FROM vw_all_stock
    `;

    return NextResponse.json(stocks);
  } catch (error) {
    console.error("Error fetching stock:", error);
    return NextResponse.json(
      { error: "Failed to fetch stock." },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const { ProductID, QuantityInStock } = await req.json();

  try {
    await prisma.$executeRaw`CALL sp_insert_stock(${ProductID}, ${QuantityInStock})`;
    return NextResponse.json({ message: "Stock added." });
  } catch (error) {
    console.error("Error inserting stock:", error);
    return NextResponse.json({ error: "Insert failed." }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const { ProductID, QuantityInStock } = await req.json();

  if (!ProductID) {
    return NextResponse.json({ error: "ProductID required" }, { status: 400 });
  }

  try {
    await prisma.$executeRaw`CALL sp_update_stock(${ProductID}, ${QuantityInStock})`;
    return NextResponse.json({ message: "Stock updated." });
  } catch (error) {
    console.error("Error updating stock:", error);
    return NextResponse.json({ error: "Update failed." }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const { ProductID } = await req.json();

  if (!ProductID) {
    return NextResponse.json({ error: "ProductID required" }, { status: 400 });
  }

  try {
    await prisma.$executeRaw`CALL sp_delete_stock(${ProductID})`;
    return NextResponse.json({ message: "Stock deleted." });
  } catch (error) {
    console.error("Error deleting stock:", error);
    return NextResponse.json({ error: "Delete failed." }, { status: 500 });
  }
}
