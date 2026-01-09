import Button from "../../Resualble_Components/Button";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Blog({ filteredBlogs, query }: any) {
  const stripHTML = (html: string) => {
    return html.replace(/<[^>]*>?/gm, "");
  };
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
              <div id="contents" className="flex flex-col gap-2">
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
                <p id="contents" className=" line-clamp-3 px-2 text-[12px]">
                  {stripHTML(b.content)}
                </p>
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
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}
