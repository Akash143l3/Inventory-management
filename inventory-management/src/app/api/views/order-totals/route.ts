import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const result = await prisma.$queryRawUnsafe(`
      SELECT * FROM vw_order_totals
    `);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching vw_order_totals:", error);
    return NextResponse.json(
      { error: "Failed to fetch order totals." },
      { status: 500 }
    );
  }
}
