"use client";
import { Plus, Edit, Delete, Hand } from "lucide-react";
import { startTransition, useEffect, useState } from "react";
import Card from "../ResuableComponents/card/card";
import BlogData from "../dataTable";
import { deletePost } from "@/app/actions/blogActions";
import { useTransition } from "react";
import { useGlobalActions } from "../../Context/ActionContext";
interface card {
  title: string;
  count: number;
}
interface PostType {
  id: number;
  title: string;
  content: string;
  slug: string;
  status: "published" | "draft";
  publishedAt?: string | null;
  updatedAt: string;
  tags: string[];
  image: string | null;
  author: string | null;
}
interface DashboardProps {
  postsList: PostType[];
}
import { useToast } from "../../Context/ToastContext";
export default function Dashboard({ postsList }: DashboardProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);
  const { openDeleteModel } = useGlobalActions();
  const { isPostCreated } = useToast();
  console.log("Is post created", isPostCreated);
  const blogCount = postsList.length;
  const latestBlogs = postsList
    .sort(
      (a, b) =>
        new Date(b.publishedAt ?? 0).getTime() -
        new Date(a.publishedAt ?? 0).getTime()
    )
    .slice(0, 5);

  return (
    <>
      <main className="max-w-7xl w-full">
        <div id="statistics" className="text-white flex  justify-evenly ">
          <Card title="Total Blogs" count={blogCount}></Card>
          <Card title="Published" count={blogCount}></Card>
          <Card title="Drafts" count={0}></Card>
        </div>
        <div id="blogLists" className="">
          <h1 className="text-3xl my-4 ml-6 font-serif font-bold">
            Latest Blogs Posts
          </h1>
          <div className="w-full overflow-hidden rounded-xl border border-white/5 bg-slate-900/20">
            <table className="text-left w-full border-collapse">
              <thead className="bg-white/5 text-gray-400 uppercase text-[0.7rem] tracking-[0.2em] font-black">
                <tr>
                  <th className="px-8 py-4">s.n</th>
                  <th className="px-8 py-4 w-[50%]">Title</th>
                  <th className="px-8 py-4">Created At</th>
                  <th className="px-8 py-4">Status</th>
                  <th className="px-8 py-4 text-right">Actions</th>
                </tr>
              </thead>
              {latestBlogs.map((post: PostType, index: number) => {
                return (
                  <BlogData
                    post={post}
                    key={index++}
                    index={index + 1}
                    onDelete={() => openDeleteModel(post.id)}
                  ></BlogData>
                );
              })}
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
