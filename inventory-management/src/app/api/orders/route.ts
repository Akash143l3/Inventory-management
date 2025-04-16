// src/app/api/orders/route.ts
import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

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
    // Query the vw_all_orders view to get the orders with related product details
    const orders = await prisma.$queryRaw<any[]>`
      SELECT
        OrderID,
        OrderDate,
        CustomerID,
        ProductID,
        ProductName,
        ProductImage,
        Quantity,
        Price,
        TotalPrice
      FROM vw_all_orders
      ORDER BY OrderDate DESC;
    `;

    return NextResponse.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders." },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  const { OrderID, OrderDate, CustomerID, ProductID, Quantity, Price } =
    await req.json();

  if (
    OrderID == null ||
    !OrderDate ||
    CustomerID == null ||
    ProductID == null ||
    Quantity == null ||
    Price == null
  ) {
    return NextResponse.json(
      {
        error:
          "All fields (OrderID, OrderDate, CustomerID, ProductID, Quantity, Price) are required.",
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
    await prisma.$executeRaw`CALL sp_update_order(${OrderID}, ${date}, ${CustomerID}, ${ProductID}, ${Quantity}, ${Price})`;
    return NextResponse.json({ message: "Order updated successfully." });
  } catch (error) {
    console.error("Error updating order:", error);
    return NextResponse.json(
      { error: "Failed to update order." },
      { status: 500 }
    );
  }
}
