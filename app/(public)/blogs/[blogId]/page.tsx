import Button from "../../Resualble_Components/Button";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  Calendar,
  Repeat,
  CheckCheck,
  Heart,
  Share,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface Blog {
  id: string;
  title: string;
  content: string;
  author: { name: string };
  imageUrl: string;
  updatedAt: string;
  publishedAt: string;
  tags: string[];
  sourceLink?: string;
}
import { fetchPosts } from "@/app/actions/blogActions";
import { getBlogByID } from "@/app/actions/blogActions";

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;

  const targetBlog = await getBlogByID(Number(blogId));
  if (!targetBlog) {
    notFound();
  }
  const createdAt = new Date(targetBlog.publishedAt).toLocaleDateString(
    "en-US",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  );
  const updatedAt = new Date(targetBlog.updatedAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <div id="blogDetailContainer" className="max-w-4xl w-full mx-auto">
        <div className="max-w-4xl h-auto w-full mx-auto bg-linear-to-r from-black to-gray-900 p-4 text-white">
          <header>
            <div id="backBtn" className="flex gap-2 hover:text-gray-600 ">
              <Link href="/blogs" className="flex ">
                <ArrowLeft className="hover:scale-102"> </ArrowLeft>
                <p className="">Back to Blogs</p>
              </Link>
            </div>
            <div id="tags" className="text-white flex gap-2 py-4">
              {targetBlog.tags.map((t: any, i: any) => {
                return (
                  <p
                    key={i}
                    className=" mt-2 ml-2 rounded p-1 px-2 bg-gray-800 text-[12px] font-bold shadow-inner shadow-gray-600"
                  >
                    # {t}
                  </p>
                );
              })}
            </div>
            <p className="text-4xl font-extrabold text-white">
              {targetBlog.title}
            </p>
            <div
              id="detail"
              className="w-full my-6 h-30 bg-black border-l-[5px] border-l-red-500 border-solid shadow shadow-gray-700 flex items-center"
            >
              <div id="authContainer" className="flex gap-2 ml-4">
                <div
                  id="author"
                  className="h-12 w-12 rounded-full bg-blue-600 flex justify-center items-center text-3xl font-extrabold text-white"
                >
                  <p>{targetBlog.author?.charAt(0)}</p>
                </div>
                <div id="authorName">
                  <p className="text-[12px]">Written By</p>
                  <p className="flex items-center gap-2">{targetBlog.author}</p>
                </div>
              </div>
              <hr className="w-px h-20 bg-blue-600 border-none mx-6" />
              <div id="published" className="flex flex-col gap-2">
                <p className="text-[12px] flex items-center gap-1">
                  <span>
                    <Calendar></Calendar>
                  </span>{" "}
                  Published At: {createdAt}
                </p>
                <p className="text-[12px] flex items-center gap-1">
                  <span>
                    <Repeat></Repeat>
                  </span>{" "}
                  Updated At: {updatedAt}
                </p>
              </div>
              <div className=" hidden md:flex ml-auto mr-4 gap-2 bg-blue-600 p-1 rounded-2xl items-center text-white">
                <CheckCheck className="bg-[#2B2A2A] text-white rounded-full w-5 h-5"></CheckCheck>
                <p>Published</p>
              </div>
            </div>
          </header>
          <div className="overflow-hidden">
            <img
              src={targetBlog.image || "placeholder-image.jpg"}
              alt={targetBlog.title}
              className="hover:scale-105 object-cover transition-transform ease-out duration-300 rounded"
            ></img>
          </div>
          <div id="contnet" className="mt-4 w-full">
            <div
              className="blog-content 
      prose
      prose-invert
      prose-lg
      wrap-break-word
      text-gray-200"
              dangerouslySetInnerHTML={{ __html: targetBlog.content }}
            />
          </div>
          <div id="footer" className="ml-4 flex gap-2 mt-8">
            <Button className="flex  gap-2 bg-red-600 transition-transform ease-out duration-300  hover:-translate-y-2 ">
              {" "}
              <span>
                <Heart color="white"></Heart>
              </span>{" "}
              Like
            </Button>

            {targetBlog.sourceLink && (
              <a
                href={targetBlog.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto hover:opacity-80 transition-opacity flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                View Source
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
