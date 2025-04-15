// src/app/api/orders/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// POST: Create a new order using stored procedure
export async function POST(req: Request) {
  const { OrderDate, CustomerID, ProductID, Quantity, Price } =
    await req.json();

  if (
    !OrderDate ||
    CustomerID == null ||
    ProductID == null ||
    Quantity == null ||
    Price == null
  ) {
    return NextResponse.json(
      {
        error:
          "All fields (OrderDate, CustomerID, ProductID, Quantity, Price) are required.",
      },
      { status: 400 }
    );
  }

  const date = new Date(OrderDate);
  if (isNaN(date.getTime())) {
    return NextResponse.json(
      { error: "Invalid OrderDate format." },
      { status: 400 }
    );
  }

  try {
    await prisma.$executeRaw`CALL sp_insert_order(${date}, ${CustomerID}, ${ProductID}, ${Quantity}, ${Price})`;
    return NextResponse.json({ message: "Order inserted successfully." });
  } catch (error) {
    console.error("Error inserting order:", error);
    return NextResponse.json(
      { error: "Failed to insert order." },
      { status: 500 }
    );
  }
}

// DELETE: Remove an order by ID using stored procedure
export async function DELETE(req: Request) {
  const { OrderID } = await req.json();

  if (OrderID == null) {
    return NextResponse.json(
      { error: "OrderID is required." },
      { status: 400 }
    );
  }

  try {
    await prisma.$executeRaw`CALL sp_delete_order(${OrderID})`;
    return NextResponse.json({ message: "Order deleted successfully." });
  } catch (error) {
    console.error("Error deleting order:", error);
    return NextResponse.json(
      { error: "Failed to delete order." },
      { status: 500 }
    );
  }
}

// GET: Fetch all orders with related order details and product info
export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      include: {
        orderdetail: {
          include: {
            product: true,
          },
        },
      },
      orderBy: {
        OrderDate: "desc",
      },
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders." },
      { status: 500 }
    );
  }
}
