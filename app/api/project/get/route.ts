import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
export async function GET(request: NextRequest) {
  try {
    const projects = await prisma.projectDetail.findMany();
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch projects",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
