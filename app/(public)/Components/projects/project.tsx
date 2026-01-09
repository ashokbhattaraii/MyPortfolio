"use client";
import Button from "../../Resualble_Components/Button";
import { useEffect } from "react";
import Link from "next/link";

interface ProjectDetail {
  name: string;
  description: string;
  dateOfCompletion: string;
  link: string;
  startIndex: number;
  lastIndex: number;
}
const colors = [
  "bg-pink-400",
  "bg-blue-600",
  "bg-purple-500",
  "bg-cyan-400",
  "bg-orange-500",
];

export default function Project({
  project,
  startIndex,
  lastIndex,
  selectedValue,
}: any) {
  const projectLength = project.length;

  console.log("Selected value", selectedValue);
  const pageProject = project?.slice(startIndex, lastIndex);
  let key = 1;
  return (
    <>
      {pageProject.map((p: any, index: any) => {
        const firstLetter = p.name?.trim().charAt(0).toUpperCase() || "";
        const bgColor = colors[index % colors.length];
        console.log("First word", firstLetter);
        return (
          <Link href={p.link} key={index++}>
            <div
              className="flex flex-wrap flex-col w-30  text-center  transition-transform ease-out duration-300 hover:scale-105"
              key={index}
            >
              <div
                id={`project${index}`}
                key={index}
                className={`h-30 w-30 ${bgColor} relative rounded-2xl  flex justify-center items-center`}
              >
                <p
                  className={`text-8xl font-bold ${
                    bgColor === "bg-blue-600" ? "text-white" : "text-black"
                  }`}
                >
                  {firstLetter}
                </p>
              </div>

              <p className="w-full truncate text-[#2B2A2A]">{p.name}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
}
