"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

interface createPostInput {
  title: string;
  content: string;
  author: string;
  image: File;
  tags: string[];
  status?: string;
}
interface PostType {
  id: number;
  title: string;
  content: string;
  slug: string;
  author: string;
  status: string;
  image: string | null;
  tags: string[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || ""
);

export async function createBlogPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const author = formData.get("author") as string;
  const tags = formData.getAll("tags") as string[];
  const imageFile = formData.get("image") as File;

  let imageUrl = "";

  if (imageFile && imageFile.size > 0) {
    try {
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const fileName = `${Date.now()}-${imageFile.name.replace(/\s/g, "-")}`;

      const { data, error } = await supabase.storage
        .from("blogs-images")
        .upload(fileName, buffer, {
          contentType: imageFile.type,
          upsert: true,
        });
      if (error) throw error;
      const {
        data: { publicUrl },
      } = supabase.storage.from("blogs-images").getPublicUrl(fileName);
      imageUrl = publicUrl;
      console.log(publicUrl);
    } catch (error) {
      console.log("uplaod error", error);
    }
  }
  const slug =
    title
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-") +
    "-" +
    Math.random().toString(36).substring(2, 5);

  try {
    await prisma.post.create({
      data: {
        title: title,
        content: content,
        author: author,
        tags: tags,
        image: imageUrl,
        slug: slug,
        status: "Published",
      },
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to create blog post.");
  }

  revalidatePath("/admin");
  redirect("/admin");
}

export async function fetchPosts() {
  return await prisma.post.findMany({
    orderBy: { createdAt: "asc" },
  });
}

export async function deletePost(id: number) {
  try {
    const deletePost = await prisma.post.delete({
      where: { id: id },
    });
  } catch (error) {
    return { success: false, error: "Falied to delete" };
  }
  revalidatePath("/admin");
  redirect("/admin");
}

export async function UpdatePost(
  id: number,
  data: { title: string; content: string; author: string; status: string }
) {
  try {
    const updated = await prisma.post.update({
      where: { id: id },
      data: {
        title: data.title,
        content: data.content,
        author: data.author,
        status: data.status,
        slug: data.title.toLowerCase().replace(/ /g, "-"),
      },
    });

    return { success: true, post: updated };
  } catch (error) {
    return { success: false, error: "Falied to update" };
  } finally {
    revalidatePath("/admin");
    redirect("/admin");
  }
}

export async function getBlogByID(id: number) {
  const blog = await prisma.post.findUnique({ where: { id } });
  return blog;
}
