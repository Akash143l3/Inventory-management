import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function handler(req: Request) {
  const { method } = req;
  const url = new URL(req.url);
  const id = url.searchParams.get("id"); // for GET, PUT, DELETE by ID

  try {
    switch (method) {
      case "GET":
        if (id) {
          // GET /api/stock?id=1
          const stock = await prisma.stock.findUnique({
            where: { ProductID: parseInt(id) },
            include: { product: true },
          });
          if (!stock) {
            return NextResponse.json(
              { error: "Stock not found" },
              { status: 404 }
            );
          }
          return NextResponse.json(stock);
        } else {
          // GET /api/stock
          const stocks = await prisma.stock.findMany({
            include: { product: true },
          });
          return NextResponse.json(stocks);
        }

      case "POST": {
        const { ProductID, QuantityInStock } = await req.json();
        const stock = await prisma.stock.create({
          data: {
            ProductID,
            QuantityInStock,
          },
        });
        return NextResponse.json(stock);
      }

      case "PUT": {
        if (!id) {
          return NextResponse.json(
            { error: "ProductID is required for update" },
            { status: 400 }
          );
        }

        const { QuantityInStock } = await req.json();
        const updated = await prisma.stock.update({
          where: { ProductID: parseInt(id) },
          data: { QuantityInStock },
        });
        return NextResponse.json(updated);
      }

      case "DELETE": {
        if (!id) {
          return NextResponse.json(
            { error: "ProductID is required for delete" },
            { status: 400 }
          );
        }

        const deleted = await prisma.stock.delete({
          where: { ProductID: parseInt(id) },
        });
        return NextResponse.json(deleted);
      }

      default:
        return NextResponse.json(
          { error: "Method Not Allowed" },
          { status: 405 }
        );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
