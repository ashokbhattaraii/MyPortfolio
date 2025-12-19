import { NextResponse } from "next/server";
import fs from "fs/promises";

const path = "./data/blogs.json";
export async function GET() {
  try {
    const response = await fs.readFile(path, "utf-8");
    const existingBlogs = await JSON.parse(response);
    return NextResponse.json(existingBlogs, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
