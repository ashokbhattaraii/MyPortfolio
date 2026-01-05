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
  createdAt: string;
  tags: string[];
}
import { fetchPosts } from "@/app/actions/blogActions";
import { getBlogByID } from "@/app/actions/blogActions";

let blogs;
async function GetBlog() {
  try {
    const blogs = await fetchPosts();
  } catch (error) {
    console.error("Network error during fetch:", error);
    return [];
  }
}

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
  const createdAt = new Date(targetBlog.createdAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const updatedAt = new Date(targetBlog.updatedAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const stripHTML = (html: string) => {
    return html.replace(/<[^>]*>?/gm, "");
  };

  return (
    <>
      <div id="blogDetailContainer" className="">
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
                  className="h-12 w-12 rounded-full bg-lime-400 flex justify-center items-center text-3xl font-extrabold"
                >
                  <p>{targetBlog.author?.charAt(0)}</p>
                </div>
                <div id="authorName">
                  <p className="text-[12px]">Written By</p>
                  <p>{targetBlog.author}</p>
                </div>
              </div>
              <hr className="w-px h-20 bg-lime-400 border-none mx-6" />
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
              <div className=" hidden md:flex ml-auto mr-4 gap-2 bg-lime-400 p-1 rounded-2xl items-center">
                <CheckCheck className="bg-lime-500 rounded-full w-5 h-5"></CheckCheck>
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
          <div id="contnet" className="mt-4">
            <div
              className="prose prose-invert prose-lime max-w-none px-2 mb-10
                     first-letter:text-5xl first-letter:font-bold first-letter:text-lime-400 
                     first-letter:float-left first-letter:mr-3"
              dangerouslySetInnerHTML={{ __html: targetBlog.content }}
            />
          </div>
          <div id="footer" className="ml-4 flex gap-2">
            <Button className="flex  gap-2 bg-red-600 transition-transform ease-out duration-300  hover:-translate-y-2 ">
              {" "}
              <span>
                <Heart color="white"></Heart>
              </span>{" "}
              Like
            </Button>
            <Button className="flex gap-2 bg-lime-400 transition-transform ease-out duration-300  hover:-translate-y-2">
              {" "}
              <span>
                <Share color="white"></Share>
              </span>{" "}
              Share
            </Button>
            <p className="ml-auto mr-3 mt-2 text-gray-400 hover:text-blue-400 transition-colors">
              Contact by Mail
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
