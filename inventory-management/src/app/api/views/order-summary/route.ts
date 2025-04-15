import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const result = await prisma.$queryRawUnsafe(`
      SELECT * FROM vw_order_summary
    `);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching vw_order_summary:", error);
    return NextResponse.json(
      { error: "Failed to fetch order summary." },
      { status: 500 }
    );
  }
}
