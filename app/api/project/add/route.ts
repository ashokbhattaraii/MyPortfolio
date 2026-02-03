//add project api route
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

interface ProjectInput {
  name: string;
  description: string;
  dateOfCompletion: string;
  link: string;
}
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, description, dateOfCompletion, link } = data as ProjectInput;

    const newProject = await prisma.projectDetail.create({
      data: {
        name,
        description,
        dateOfCompletion: dateOfCompletion,
        link,
      },
    });
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      {
        error: "Failed to add project",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
