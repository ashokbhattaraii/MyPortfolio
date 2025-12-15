import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

const dataFilePath = path.join(process.cwd(), "data", "projectsData.json");

export async function POST(request: Request) {
  try {
    const newProjectData = await request.json();
    const fileContent = await fs.readFile(dataFilePath, "utf-8");
    const existingProjects = JSON.parse(fileContent);
    existingProjects.push(newProjectData);
    const updatedContent = JSON.stringify(existingProjects, null, 2);

    await fs.writeFile(dataFilePath, updatedContent, "utf-8");
    return NextResponse.json(
      { message: "Project added successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to add project" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const fileContent = await fs.readFile(dataFilePath, "utf-8");
    const existingProjects = JSON.parse(fileContent);
    return NextResponse.json(existingProjects, { status: 200 });
  } catch (error) {
    console.error("Error fetching projects", error);
    return NextResponse.json([], { status: 200 });
  }
}
