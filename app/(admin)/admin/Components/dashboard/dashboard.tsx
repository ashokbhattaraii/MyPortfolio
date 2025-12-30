"use client";
import { Plus, Edit, Delete, Hand } from "lucide-react";
import { startTransition, useEffect, useState } from "react";
import Card from "../ResuableComponents/card/card";
import BlogData from "../dataTable";
import { deletePost } from "@/app/actions/blogActions";
import { useTransition } from "react";
interface card {
  title: string;
  count: number;
}
interface PostType {
  id: number;
  title: string;
  content: string;
  slug: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  status: string;
}
interface DashboardProps {
  postsList: PostType[];
}

export default function Dashboard({ postsList }: DashboardProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  const handleDelete = async (id: number) => {
    setIsDeleting(true);
    setConfirmDeleteId(id);
  };

  const handleConfirmDelete = async () => {
    if (confirmDeleteId === null) return;
    startTransition(async () => {
      try {
        await deletePost(confirmDeleteId);
        console.log("deleted successsfully", confirmDeleteId);
      } catch (error) {
        console.log("Error deleting", error);
      } finally {
        setIsDeleting(false);
        setConfirmDeleteId(null);
      }
    });
  };

  const blogCount = postsList.length;
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
              {postsList.map((post: PostType, index: number) => {
                return (
                  <>
                    {
                      <BlogData
                        post={post}
                        key={post.id}
                        onDelete={() => handleDelete(post.id)}
                      ></BlogData>
                    }
                  </>
                );
              })}
            </table>
          </div>
        </div>
        {isDeleting && (
          <div
            id="deleteDialog"
            className="fixed inset-0 flex justify-center items-center bg-slate-400/40  backdrop-blur-2xl "
          >
            <div className="bg-slate-400 flex-col flex justify-center items-center p-4 max-w-sm w-full shadow-2xl rounded-2xl gap-4">
              <h1 className="text-xl text-black">Are you sure?</h1>
              <div className="flex gap-4">
                <button
                  className=" bg-slate-800 px-4 py-2 rounded-2xl text-xl font-bold hover:-translate-y-2 transition-transform ease-out duration-300"
                  onClick={() => handleConfirmDelete()}
                >
                  Confirm!
                </button>
                <button
                  className=" px-4 py-2 rounded-2xl text-xl font-bold hover:-translate-y-2 transition-transform ease-out duration-300 text-black"
                  onClick={() => setIsDeleting(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
