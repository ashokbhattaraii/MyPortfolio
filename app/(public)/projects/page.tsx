"use client";
import Button from "../Resualble_Components/Button";
import SideBar from "../Components/projects/sidebar";
import DetailedProjects from "../Components/projects/detailedProjects";
import React, { useState, useEffect } from "react";
import { Target } from "lucide-react";
import { useProjects } from "@/app/hook/project";

interface ProjectsDetail {
  name: string;
  description: string;
  dateOfCompletion: string;
  link: string;
}

const Projects = () => {
  const [firstPage, nextPage] = useState(0);
  const [lastIndex, setLastIndex] = useState(5);
  const { data: ProjectList = [], isLoading: isProjectsLoading } =
    useProjects();
  console.log("projects data from main project", ProjectList);

  const projectLength = ProjectList?.length || 0;
  console.log("console from main project", projectLength);

  const [selectedValue, setSelectValue] = useState(5);

  const updatePage = (action: "next" | "prev") => {
    const step = selectedValue;

    if (action === "next") {
      nextPage(firstPage + step);
      setLastIndex(lastIndex + step);
    } else {
      nextPage(firstPage - step);
      setLastIndex(lastIndex - step);
    }
  };

  const handleChange = (selectedValue: any) => {
    setSelectValue(selectedValue);
    nextPage(0);
    setLastIndex(selectedValue);
  };

  useEffect(() => {
    console.log("selected", selectedValue);
  }, [selectedValue]);

  if (isProjectsLoading) {
    return (
      <>
        <div className="text-white animate-pulse text-4xl min-h-screen flex justify-center items-center">
          Loading Projects...
        </div>
      </>
    );
  }

  return (
    <>
      <div
        id="projectContainer"
        className="text-white relative top-6 flex gap-6 mx-auto w-full max-w-8xl"
      >
        <SideBar
          Projects={ProjectList}
          firstPage={firstPage}
          lastIndex={lastIndex}
        />
        <DetailedProjects
          Projects={ProjectList}
          onCLickNextPage={() => updatePage("next")}
          onCLickPreviousPage={() => updatePage("prev")}
          firstPage={firstPage}
          lastIndex={lastIndex}
          projectLength={projectLength}
          handleChange={handleChange}
          selectedValue={selectedValue}
        />
      </div>
    </>
  );
};

export default Projects;
