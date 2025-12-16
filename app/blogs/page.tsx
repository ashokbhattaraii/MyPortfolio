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
      <div
        id="blogsContainer"
        className="relative mt-20 text-white w-full max-w-7xl"
      >
        <h1 className=" flex justify-center absolute top-7 w-full text-blue-700 mx-auto text-3xl font-extrabold ">
          <span className="text-red-500">B</span>logs
        </h1>
        <div
          id="blogs"
          className="flex flex-wrap gap-4 justify-center content-center relative top-25 md:mx-8 md:justify-between"
        >
          <Blog blogs={blogs} />
        </div>
      </div>
    </>
  );
}
