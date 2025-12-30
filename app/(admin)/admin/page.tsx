"use client";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  Settings,
  MoreHorizontal,
  Menu,
  X,
} from "lucide-react";
import Dashboard from "./Components/dashboard/dashboard";
import { prisma } from "@/lib/db";

import { fetchData } from "next-auth/client/_utils";
import { fetchPosts } from "@/app/actions/blogActions";
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
interface PostTypePros {
  postsList: PostType[];
}

export default function AdminDashboard() {
  const [selected, setSelected] = useState("Dashboard");
  const [postsList, setpostsList] = useState<PostType[]>([]);
  const [menuOpen, setMenuOpen] = useState(true);
  useEffect(() => {
    async function getPosts() {
      try {
        const posts = await fetchPosts();

        setpostsList(posts);
      } catch (error) {
        console.log("Error fetching lists", error);
      }
    }
    getPosts();
  }, []);

  useEffect(() => {
    console.log(postsList);
  }, [postsList, setpostsList]);
  const sideMenus = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Posts", icon: FileText },
    { name: "Media", icon: MoreHorizontal },
    { name: "Settings", icon: Settings },
  ];

  const defaultClass =
    " flex items-center  gap-2 py-3 hover:bg-slate-800 transition-transform ease-out duration-300 pl-4 ";
  const selectedClass =
    "flex items-center  gap-2 py-3 hover:bg-slate-800 transition-transform ease-out duration-300 border-r-4 border-lime-400 bg-gray-600/40 pl-4 text-lime-400";

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white">
      <aside
        className={`transition-all duration-300 border-r border-white/10 flex flex-col ${
          menuOpen ? "w-60" : "w-20"
        }`}
      >
        <div className="p-6 flex items-center justify-between">
          {menuOpen && (
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/user-male-circle.png"
              alt="user"
            />
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 hover:bg-white/10 rounded-lg ml-auto"
          >
            <Menu size={24} />
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-2">
          {sideMenus.map((menu) => (
            <div
              key={menu.name}
              onClick={() => setSelected(menu.name)}
              className={`${
                selected === menu.name ? selectedClass : defaultClass
              } ${!menuOpen && "justify-center px-0"} flex  items-center`}
              title={!menuOpen ? menu.name : ""}
            >
              <menu.icon size={22} />
              {menuOpen && <span className="font-medium">{menu.name}</span>}
            </div>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-20 border-b border-white/10 flex justify-between items-center px-10 bg-[#0f0f0f]">
          <h1 className="text-xl font-bold italic text-lime-400">
            BLOG MANAGER
          </h1>
          <div className="flex gap-4">
            <Link href="/admin/create">
              <button className="bg-lime-400 text-black px-4 py-2 rounded-md font-bold hover:bg-lime-500 transition-colors cursor-pointer">
                + Add New Blog
              </button>
            </Link>
            <button
              onClick={() => signOut()}
              className="text-gray-400 hover:text-white underline text-sm"
            >
              Logout
            </button>
          </div>
        </header>

        <main className="p-10">
          {selected === "Dashboard" ? (
            <Dashboard postsList={postsList} />
          ) : (
            `${selected}`
          )}
        </main>
      </div>
    </div>
  );
}
