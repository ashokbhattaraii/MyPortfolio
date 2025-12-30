"use client";
import Button from "../Resualble_Components/Button";
import SideBar from "../Components/projects/sidebar";
import DetailedProjects from "../Components/projects/detailedProjects";
import React, { useState, useEffect } from "react";
import { Target } from "lucide-react";

interface ProjectsDetail {
  name: string;
  description: string;
  dateOfCompletion: string;
  link: string;
}

const Projects = () => {
  const [ProjectList, SetProjectList] = useState<ProjectsDetail[]>([]);
  const [firstPage, nextPage] = useState(0);
  const [lastIndex, setLastIndex] = useState(5);
  const projectLength = ProjectList.length;
  console.log("console from main project", projectLength);
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

  const AddProject = (data: ProjectsDetail) => {
    SetProjectList((prevProject) => {
      return [...prevProject, data];
    });
  };

  const [selectedValue, setSelectValue] = useState(5);
  const handleChange = (selectedValue: any) => {
    setSelectValue(selectedValue);
    nextPage(0);
    setLastIndex(selectedValue);
  };
  useEffect(() => {
    console.log("selected", selectedValue);
  }, [setSelectValue]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchInitialProjects() {
      try {
        const response = await fetch("/api/projects");
        if (response.ok) {
          const data: ProjectsDetail[] = await response.json();

          console.log(data);
          SetProjectList(data);
        }
      } catch (e) {
        console.log("Failed to fetch", e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchInitialProjects();
  }, []);
  if (isLoading) {
    return (
      <>
        <div className="text-white bg-gray-800 text-4xl">
          Loading Projects...
        </div>
      </>
    );
  }
  return (
    <>
      <div
        id="projectContainer"
        className="text-white relative top-6 flex gap-6 mx-auto w-full max-w-7xl"
      >
        <SideBar
          Projects={ProjectList}
          firstPage={firstPage}
          lastIndex={lastIndex}
        />
        <DetailedProjects
          Projects={ProjectList}
          onAddProject={AddProject}
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
