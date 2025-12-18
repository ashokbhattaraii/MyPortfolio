"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Blog from "../Components/blog/blog";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch("/api/blogs");
        const blogs = await response.json();
        setBlogs(blogs);
        console.log(blogs);
      } catch (error) {
        alert(error);
      }
    }
    fetchBlogs();
  }, []);

  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentquery = e.target.value;
    setQuery(currentquery);
  };
  useEffect(() => {
    console.log("useeffect", query);
  }, [query]);

  return (
    <>
      <section className="max-w-4xl w-full md:max-w-7xl">
        <div
          id="blogsContainer"
          className="relative mt-20 text-white w-full max-w-7xl"
        >
          <h1 className=" flex justify-center absolute top-7 w-full text-blue-700 mx-auto text-3xl font-extrabold ">
            <span className="text-red-500">B</span>logs
          </h1>
          <div id="searchBar">
            <input
              type="text"
              className="border fixed right-15 top-25 px-2 py-2 z-100 rounded-xl max-w-70 outline-0 w-full"
              placeholder="Search by name or tags"
              onChange={handleSearch}
            />
          </div>
          <div id="blogs" className="flex flex-wrap flex-col gap-10 pt-20 ">
            <Blog blogs={blogs} query={query} />
          </div>
        </div>
      </section>
    </>
  );
}
