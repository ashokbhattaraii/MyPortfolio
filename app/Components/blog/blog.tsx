import Button from "@/app/Resualble_Components/Button";
import Image from "next/image";
import Link from "next/link";
export default function Blog({ blogs }: any) {
  return (
    <>
      {blogs.map((b: any, i: any) => {
        const blogId = i;
        const path = `/blogs/${blogId}`;
        return (
          <div
            key={i}
            className=" h-110 w-[85%] mx-auto bg-black  overflow-hidden rounded shadow shadow-gray-600 transition-transform ease-out duration-300 hover:scale-102 items-stretch text-white"
          >
            <Link href={path} key={i}>
              <div className="">
                <img src={`${b.imageUrl}`} alt="" />
              </div>
              <div id="tags" className="text-white flex gap-2">
                {b.tags.map((t: any, i: any) => {
                  return (
                    <p className=" mt-2 ml-2 rounded p-1 px-2 bg-gray-800 text-[12px] font-bold shadow-inner shadow-gray-600">
                      # {t}
                    </p>
                  );
                })}
                <div id="title" className="flex">
                  {b.title}
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}
