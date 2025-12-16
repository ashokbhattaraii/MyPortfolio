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
            className=" w-65 bg-black overflow-hidden rounded shadow shadow-gray-600 transition-transform ease-out duration-300 hover:scale-105 items-stretch"
          >
            <Link href={path} key={i}>
              <div className="" key={i}>
                <div id="testNoImage" className="" key={i}>
                  <img
                    src={b.imageUrl}
                    alt="testNoImage"
                    className="h-full w-full"
                  />
                </div>
                <p id="title" className="font-bold p-2">
                  {b.title}
                </p>
                <p
                  id="author"
                  className="flex justify-end mr-2 hover:text-amber-500"
                >
                  -{b.author.name}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}
