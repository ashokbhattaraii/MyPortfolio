import Button from "../../Resualble_Components/Button";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Blog({ filteredBlogs, query }: any) {
  return (
    <>
      {filteredBlogs.map((b: any, i: any) => {
        const blogId = b.id;
        const path = `/blogs/${blogId}`;
        const dateStr = b.createdAt;
        const formattedDate = new Date(dateStr).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
        return (
          <div
            key={i}
            className=" w-[85%] md:w-1/2 pb-2 mx-auto bg-black  overflow-hidden rounded shadow shadow-gray-600 transition-transform ease-out duration-300 hover:scale-102 items-stretch text-white"
          >
            <Link href={path} key={i}>
              <div className="">
                <img src={`${b.imageUrl}`} alt="" className="pb-3" />
              </div>
              <div id="contents" className="flex flex-col gap-2 ">
                <div id="tags" className="text-white flex gap-2">
                  {b.tags.map((t: any, i: any) => {
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
                <p id="title" key={i} className="pl-2 font-bold">
                  {b.title}
                </p>
                <p
                  id="contents"
                  className=" line-clamp-3 px-2 text-[12px] w-full wrap-break-word overflow-hidden"
                  dangerouslySetInnerHTML={{ __html: b.content }}
                ></p>
                <hr className="h-0.5 w-[90%] mx-auto shadow shadow-[#5A7ACD] my-2" />
                <div
                  id="author"
                  className="p-2 flex flex-row items-center gap-2 "
                >
                  <div
                    id="profileIcon"
                    className="bg-blue-600 w-10 h-10 rounded-full flex justify-center items-center text-white"
                  >
                    <User />
                  </div>
                  {b.author}
                  <p className="ml-auto">{formattedDate}</p>
                  {b.sourceLink && (
                    <a
                      href={b.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="ml-2 hover:opacity-80 transition-opacity"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}
