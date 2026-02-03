"use client";
import { useEffect, useState } from "react";
import Project from "./project";
import Button from "../../Resualble_Components/Button";

interface ProjectDetail {
  name: string;
  description: string;
  dateOfCompletion: string;
  link: string;
  projectLength: number;
}

interface DetailedProjectProps {
  Projects: ProjectDetail[];
  onCLickNextPage: (nextPage: any) => void;
}

export default function DetailedProjects({
  Projects,
  onCLickNextPage,
  onCLickPreviousPage,
  projectLength,
  firstPage,
  lastIndex,
  handleChange,
  selectedValue,
}: any) {
  function changeValue(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    const numValue = Number(value);
    handleChange(numValue);
    console.log("selected", numValue);
  }

  return (
    <>
      <div
        id="detailProjectDisplay"
        className="text-white h-full w-full max-w-8xl ml-15 md:ml-0"
      >
        <h2 className="text-[#2B2A2A] font-bold">Projects</h2>
        <div
          id="detailedList"
          className="flex flex-wrap gap-8 text-blue-600 mt-4"
        >
          <Project
            project={Projects}
            startIndex={firstPage}
            lastIndex={lastIndex}
            selectedValue={selectedValue}
          />
        </div>
        <div
          id="pageControl"
          className="flex justify-center items-center mt-10"
        >
          <div id="pageBtn" className="flex justify-around gap-10">
            <Button
              variant="primary"
              onClick={onCLickPreviousPage}
              className={` fixed bottom-5 left-8 z-50 bg-blue-600 text-white md:bottom-4  shadow-lg md:left-110  hover:scale-105 transition-transform ${
                firstPage > 0 ? "block" : "hidden"
              } ${firstPage < 0 ? "hidden" : "block"}`}
            >
              Previous
            </Button>
            <select
              onChange={changeValue}
              name=""
              id=""
              className=" fixed bottom-5 py-2 px-4 bg-blue-600 text-white rounded-2xl"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>

            <Button
              variant="primary"
              onClick={onCLickNextPage}
              className={` fixed bottom-5 right-4 z-50 bg-blue-600 text-white md:bottom-4 md:right-55 shadow-lg hover:scale-105 transition-transform ${
                lastIndex > projectLength ? "hidden" : "block"
              }
              }`}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
