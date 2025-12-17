"use client";
import Button from "../Resualble_Components/Button";
import SideBar from "../Components/projects/sidebar";
import DetailedProjects from "../Components/projects/detailedProjects";
import { useState, useEffect } from "react";

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
  const updatePage = () => {
    if (lastIndex >= projectLength) {
      nextPage(0);
      setLastIndex(5);
    } else {
      nextPage(firstPage + 5);
      setLastIndex(lastIndex + 5);
    }
  };

  const AddProject = (data: ProjectsDetail) => {
    SetProjectList((prevProject) => {
      return [...prevProject, data];
    });
  };
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
          onCLickNextPage={updatePage}
          firstPage={firstPage}
          lastIndex={lastIndex}
        />
      </div>
    </>
  );
};

export default Projects;
