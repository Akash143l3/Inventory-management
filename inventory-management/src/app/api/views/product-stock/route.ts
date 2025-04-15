import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const result = await prisma.$queryRawUnsafe(`
      SELECT * FROM vw_product_stock
    `);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching vw_product_stock:", error);
    return NextResponse.json(
      { error: "Failed to fetch product stock." },
      { status: 500 }
    );
  }
}
