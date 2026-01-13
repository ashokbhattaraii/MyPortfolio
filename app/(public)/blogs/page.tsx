"use client";
import { useEffect, useState } from "react";
import Blog from "../Components/blog/blog";
import { Search, Loader2 } from "lucide-react";
import { fetchPosts } from "@/app/actions/blogActions";

interface PostType {
  id: number;
  title: string;
  content: string;
  slug: string;
  author: string | null;
  status: string;
  tags: string[];
  updatedAt: string;
  publishedAt: string;
}

export default function Blogs() {
  const [query, setQuery] = useState("");
  const [blogs, setBlogs] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        setIsLoading(true);
        const blogs = await fetchPosts("published");
        setBlogs(blogs);
      } catch (error) {
        console.error("Error fetching blogs", error);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchBlog();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.trim());
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(query.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white gap-4">
        <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
        <h1 className="text-xl font-medium">Loading Blogs...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white gap-4">
        <h1 className="text-2xl font-bold text-red-500">Error</h1>
        <p className="text-gray-400">{error}</p>
      </div>
    );
  }

  return (
    <section className="w-full bg-black min-h-screen">
      <div className="max-w-4xl md:max-w-7xl mx-auto px-4">
        <div className="relative mt-20 text-white w-full">
          <h1 className="flex justify-center absolute top-7 w-full text-blue-700 mx-auto text-3xl font-extrabold mt-10">
            <span className="text-red-500">B</span>logs
          </h1>

          <div className="ml-auto">
            <input
              type="text"
              className="border fixed right-0 mt-4 mr-3 px-2 py-2 z-100 rounded-xl max-w-70 outline-0 w-full bg-gray-900 text-white border-gray-700"
              placeholder="Search by name or tags"
              onChange={handleSearch}
            />
          </div>

          {filteredBlogs.length === 0 ? (
            <div className="text-center py-32 pt-40">
              <p className="text-gray-400 text-lg">
                {query
                  ? "No blogs found matching your search."
                  : "No blogs available yet."}
              </p>
            </div>
          ) : (
            <div className="flex flex-wrap flex-col gap-9 pt-30">
              <Blog filteredBlogs={filteredBlogs} query={query} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
