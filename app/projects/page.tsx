"use client";
import Button from "../Resualble_Components/Button";
import SideBar from "../Components/projects/sidebar";
import DetailedProjects from "../Components/projects/detailedProjects";
import { useState } from "react";

interface ProjectsDetail {
  name: string;
  description: string;
  DateOfCompletion: Date;
  Link: string;
}

const Projects = () => {
  const [ProjectList, SetProjectList] = useState<ProjectsDetail[]>([]);
  const AddProject = (data: ProjectsDetail) => {
    SetProjectList((prevProject) => {
      return [...prevProject, data];
    });
  };
  return (
    <>
      <div
        id="projectContainer"
        className="text-white relative top-6 flex w-full mx-auto"
      >
        <SideBar Projects={ProjectList} />
        <DetailedProjects Projects={ProjectList} onAddProject={AddProject} />
      </div>
    </>
  );
};

export default Projects;
