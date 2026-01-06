"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Blog from "../Components/blog/blog";
import { Search } from "lucide-react";
import { fetchPosts } from "@/app/actions/blogActions";

interface PostType {
  id: number;
  title: string;
  content: string;
  slug: string;
  author: string | null;
  status: string;
  tags: string[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export default function Blogs() {
  const [query, setQuery] = useState("");
  const [blogs, setBlogs] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchBlog() {
      try {
        const blogs = await fetchPosts();

        setBlogs(blogs);
        console.log("Fetched from supabase", blogs);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching blogs", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchBlog();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentquery = e.target.value.trim();
    console.log(currentquery);
    setQuery(currentquery);
  };
  let filteredBlogs;

  filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(query.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-2xl animate-pulse">Loading Blogs...</h1>
      </div>
    );
  }

  return (
    <>
      <section className="max-w-4xl w-full md:max-w-7xl">
        <div
          id="blogsContainer"
          className="relative mt-20 text-white w-full max-w-4xl md:max-w-7xl"
        >
          <h1 className="flex justify-center absolute top-7 w-full text-blue-700 mx-auto text-3xl font-extrabold  mt-10">
            <span className="text-red-500">B</span>logs
          </h1>
          <div id="searchBar" className="ml-auto">
            <input
              type="text"
              className="border fixed right-0 mt-4 mr-3 px-2 py-2 z-100 rounded-xl max-w-70 outline-0 w-full "
              placeholder="Search by name or tags"
              onChange={handleSearch}
            />
          </div>
          <div id="blogs" className="flex flex-wrap flex-col gap-9 pt-30 ">
            <Blog filteredBlogs={filteredBlogs} query={query} />
          </div>
        </div>
      </section>
    </>
  );
}
