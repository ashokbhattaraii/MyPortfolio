"use client";
import { useEffect, useState } from "react";

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
  return (
    <>
      <section className="">
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
            />
          </div>
          <div
            id="blogs"
            className="flex flex-wrap gap-6    relative top-25 md:mx-3 md:justify-between items-stretch"
          >
            <Blog blogs={blogs} />
          </div>
        </div>
      </section>
    </>
  );
}
