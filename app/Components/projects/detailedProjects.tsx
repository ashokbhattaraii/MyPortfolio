"use client";
import { useState } from "react";
import Project from "./project";
import { NextResponse } from "next/server";
import Button from "../../Resualble_Components/Button";
import { useForm } from "react-hook-form";

interface ProjectDetail {
  name: string;
  description: string;
  dateOfCompletion: string;
  link: string;
}

interface DetailedProjectProps {
  Projects: ProjectDetail[];
  onAddProject: (newProject: ProjectDetail) => void;
}

export default function DetailedProjects({
  Projects,
  onAddProject,
}: DetailedProjectProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ProjectDetail>();

  const ValidationRules = {
    name: {
      required: "Name can't be empty",
      minLength: {
        value: 5,
        message: "Atleast 5 character",
      },
    },
    description: {
      required: "Description can't be empty",
      minLength: {
        value: 5,
        message: "Atleast 5 character",
      },
    },
    date: {
      required: "Completion date is required",
    },
    link: {
      required: "Enter a valid project link",
      pattern: {
        value:
          /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|[a-zA-Z0-9]+\.[^\s]{2,})$/i,
        message: "Must be a valid URL (e.g., https://example.com)",
      },
    },
  };

  const ErrorMessage = ({ error, name }: { error: any; name: string }) => {
    const fieldError = error[name];
    if (!fieldError) {
      return null;
    }
    return (
      <p className="text-red-400 text-sm mt-1 self-start ml-2">
        {fieldError.message}
      </p>
    );
  };
  const [isFormOpen, toogleForm] = useState(false);

  function onClickAdd() {
    toogleForm(!isFormOpen);
  }
  const onSubmit = async (data: ProjectDetail) => {
    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to save project to serevr");
      }

      const result = await response.json();

      onAddProject(result.project || data);
      toogleForm(false);
    } catch {
      console.log("Submission failed", errors);
      alert("Error, check the consle");
    }
  };
  return (
    <>
      <div id="detailProjectDisplay" className="text-black ml-22 max-w-2/3 ">
        <h2 className="text-blue-700 font-bold">Projects</h2>
        <div id="detailedList" className="flex flex-wrap gap-8 text-blue-600">
          <Project project={Projects} />
          <div
            id="AddProjects"
            className="h-30 w-30 border rounded-2xl relative flex justify-center"
            onClick={onClickAdd}
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/android/24/1A1A1A/plus.png"
              alt="add"
              className="absolute top-[40%] "
            />
            <p className="absolute -bottom-7">Add</p>
          </div>
        </div>
      </div>
      {isFormOpen && (
        <div
          id="overlayForm"
          className="text-white  fixed inset-0 z-100 flex justify-center items-center pt-20 backdrop-blur-sm"
        >
          <form className="flex flex-col bg-gray-700 rounded-2xl gap-3 w-80 p-3 max-h-[90vh] overflow-y-auto ">
            <h1 className="text-center text-blue-700 font-black text-2xl">
              Add Project
            </h1>
            <span>Name</span>
            <input
              type="text"
              placeholder="Project Name"
              className="border py-2 rounded-2xl pl-2 outline-0 focus:border-blue-700"
              {...register("name", ValidationRules.name)}
            />
            <ErrorMessage error={errors} name="name" />
            <span>Content</span>
            <textarea
              id="description"
              rows={2}
              className="border py-2 rounded-2xl pl-2 outline-0 focus:border-blue-700 resize-none"
              placeholder="Project Description"
              {...register("description", ValidationRules.description)}
            ></textarea>
            <ErrorMessage error={errors} name="description" />
            <>Date Of Completetion</>
            <input
              type="date"
              className="border py-2 rounded-2xl pl-2 outline-0 focus:border-blue-700"
              {...register("dateOfCompletion", ValidationRules.date)}
            />
            <ErrorMessage error={errors} name="date" />
            <span>Link</span>
            <input
              type="text"
              placeholder="https://"
              className="border py-2 rounded-2xl pl-2 outline-0 focus:border-blue-700"
              {...register("link", ValidationRules.link)}
            />
            <ErrorMessage error={errors} name="link" />
            <Button
              varient="primary"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              Add Project
            </Button>
            <button
              className="mb-2"
              onClick={() => {
                toogleForm(false);
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );
}
