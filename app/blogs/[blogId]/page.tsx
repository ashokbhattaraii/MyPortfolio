import Button from "@/app/Resualble_Components/Button";
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
  tags: [string];
}

const getBaseUrl = () => {
  if (process.env.VERCEL_URL) {
    return `https://my-portfolio-rho-silk-25.vercel.app`;
  }

  return `http://localhost:${process.env.PORT}`;
};
async function GetBlog(): Promise<Blog[]> {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/api/blogs`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`Fetch failed from ${url}. Status: ${response.status}`);
      return [];
    }

    return await response.json();
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
  const BlogDetail = await GetBlog();
  console.log(BlogDetail);
  const requestedIndex = Number(blogId);

  const targetBlog = BlogDetail[requestedIndex];

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
  return (
    <>
      <div id="blogDetailContainer" className=" ">
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
                  <p>{targetBlog.author.name.charAt(0)}</p>
                </div>
                <div id="authorName">
                  <p className="text-[12px]">Written By</p>
                  <p>{targetBlog.author.name}</p>
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
                  Published At: {createdAt}
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
              src={targetBlog.imageUrl}
              alt={targetBlog.title}
              className="hover:scale-105 object-cover transition-transform ease-out duration-300 rounded"
            ></img>
          </div>
          <div id="contnet">
            {targetBlog.content
              .split("\n\n")
              .map((paragraph: any, index: any) => {
                return (
                  <p
                    key={index}
                    className="p-4 my-1 first-letter:text-4xl first-letter:text-lime-400 first-letter:flex first-letter:float-left first-letter:mr-2 first-letter:font-bold"
                  >
                    {paragraph}
                  </p>
                );
              })}
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
