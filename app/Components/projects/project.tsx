"use client";
import Button from "@/app/Resualble_Components/Button";

interface ProjectDetail {
  name: string;
  description: string;
  dateOfCompletion: string;
  link: string;
  startIndex: number;
  lastIndex: number;
}

export default function Project({ project, startIndex, lastIndex }: any) {
  const projectLength = project.length;

  console.log("Project Length", projectLength);

  const pageProject = project?.slice(startIndex, lastIndex) || [];
  {
    console.log("StaRT", startIndex);
    console.log("eND  ", lastIndex);
  }
  return (
    <>
      {pageProject.map((p: any, index: any) => {
        return (
          <div
            className="flex flex-wrap flex-col w-30  text-black  transition-transform ease-out duration-300 hover:scale-105"
            key={index}
          >
            <div
              id={`project${index}`}
              key={index}
              className="h-30 w-30 bg-gray-500 relative rounded-2xl  flex justify-center"
            ></div>

            <p className="w-full truncate">{p.name}</p>
          </div>
        );
      })}
    </>
  );
}
