"use client";
import { useEffect, useState } from "react";
import Project from "./project";
import { NextResponse } from "next/server";
import Button from "../../Resualble_Components/Button";
import { useForm } from "react-hook-form";

interface ProjectDetail {
  name: string;
  description: string;
  dateOfCompletion: string;
  link: string;
  projectLength: number;
}

interface DetailedProjectProps {
  Projects: ProjectDetail[];
  onAddProject: (newProject: ProjectDetail) => void;
  onCLickNextPage: (nextPage: any) => void;
}

export default function DetailedProjects({
  Projects,
  onAddProject,
  onCLickNextPage,
  onCLickPreviousPage,
  projectLength,
  firstPage,
  lastIndex,
  handleChange,
  selectedValue,
}: any) {
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

  function changeValue(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    const numValue = Number(value);
    handleChange(numValue);
    console.log("selected", numValue);
  }

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
      <div
        id="detailProjectDisplay"
        className="text-white h-full w-full max-w-7xl ml-15 md:ml-0"
      >
        <h2 className="text-black font-bold">Projects</h2>
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
        <div
          id="pageControl"
          className="flex justify-center items-center mt-10"
        >
          <div id="pageBtn" className="flex justify-around gap-10">
            <Button
              variant="primary"
              onClick={onCLickPreviousPage}
              className={` fixed bottom-5 left-8 z-50 bg-lime-500 md:bottom-4  shadow-lg md:left-110  hover:scale-105 transition-transform ${
                firstPage > 0 ? "block" : "hidden"
              } ${firstPage < 0 ? "hidden" : "block"}`}
            >
              Previous
            </Button>
            <select
              onChange={changeValue}
              name=""
              id=""
              className=" fixed bottom-5 py-2 px-4 bg-lime-400 text-white rounded-2xl"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>

            <Button
              variant="primary"
              onClick={onCLickNextPage}
              className={` fixed bottom-5 right-4 z-50 bg-lime-500 md:bottom-4 md:right-55 shadow-lg hover:scale-105 transition-transform ${
                lastIndex > projectLength ? "hidden" : "block"
              }
              }`}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
      {isFormOpen && (
        <div
          id="overlayForm"
          className="text-black fixed inset-0 z-100 flex justify-center items-center pt-20 backdrop-blur-sm"
        >
          <form className="flex flex-col bg-white rounded-2xl gap-3 w-187 p-4 max-h-[85vh] overflow-y-auto">
            <h1 className="text-center text-blue-700 font-black text-2xl">
              Add Project
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Project Name"
                  className="border py-2 rounded-2xl pl-2 outline-0 focus:border-blue-700"
                  {...register("name", ValidationRules.name)}
                />
                <ErrorMessage error={errors} name="name" />
              </div>

              <div className="flex flex-col gap-1">
                <span>Link</span>
                <input
                  type="text"
                  placeholder="https://"
                  className="border py-2 rounded-2xl pl-2 outline-0 focus:border-blue-700"
                  {...register("link", ValidationRules.link)}
                />
                <ErrorMessage error={errors} name="link" />
              </div>
            </div>

            <span>Content</span>
            <textarea
              id="description"
              rows={2}
              className="border py-2 rounded-2xl pl-2 outline-0 focus:border-blue-700 resize-none"
              placeholder="Project Description"
              {...register("description", ValidationRules.description)}
            ></textarea>
            <ErrorMessage error={errors} name="description" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span>Date Of Completion</span>
                <input
                  type="date"
                  className="border py-2 rounded-2xl pl-2 outline-0 focus:border-blue-700"
                  {...register("dateOfCompletion", ValidationRules.date)}
                />
                <ErrorMessage error={errors} name="date" />
              </div>

              <div className="flex flex-col gap-1">
                <span>Tags</span>
                <input
                  type="text"
                  placeholder="React, Next.js, Tailwind"
                  className="border py-2 rounded-2xl pl-2 outline-0 focus:border-blue-700"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-2 justify-center items-center">
              <Button
                varient="primary"
                type="submit"
                onClick={handleSubmit(onSubmit)}
                className="bg-lime-400"
              >
                Add Project
              </Button>

              <Button
                variant="danger"
                className="bg-lime-400"
                onClick={() => {
                  toogleForm(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
