import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const res = await prisma.post.findMany({
      where: { status: "published" },
      include: {
        PostStats: true,
      },
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error("Database error:", error); // Add logging
    return NextResponse.json(
      {
        error: "Failed to fetch blogs",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
