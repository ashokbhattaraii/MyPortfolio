"use client";
import { useEffect, useState } from "react";
import Project from "./project";
import { NextResponse } from "next/server";
import Button from "../../Resualble_Components/Button";
import { useForm } from "react-hook-form";
import { getCookie } from "cookies-next";
import { useSession } from "next-auth/react";
import { Session } from "inspector/promises";
import ToastMessage from "@/app/(admin)/admin/Components/Toast/toast";

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
  const [toast, setToast] = useState(false);

  function changeValue(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    const numValue = Number(value);
    handleChange(numValue);
    console.log("selected", numValue);
  }
  const { data, status } = useSession();
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (status === "loading") {
      console.log("Loged In");
    }
    if (data) {
      console.log("The logged in data", data.user?.email);
      setIsAdmin(true);
    }
  }, [status]);

  function onClickAdd() {
    if (!isAdmin) {
      console.log("onclick check admin", data?.user?.email);
      setToast(true);

      console.log("toast message shown");
      return;
    }
    console.log("admin status", isAdmin);
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

      onAddProject(result || data);
      toogleForm(false);
    } catch {
      console.log("Submission failed", errors);
      alert("Error, check the consle");
    }
  };

  return (
    <>
      {toast && (
        <div className="fixed">
          <ToastMessage
            type="error"
            message="Access denied"
            onClose={() => setToast(false)}
          ></ToastMessage>
        </div>
      )}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4">
          <form className="w-full max-w-3xl rounded bg-gradient-to-br from-zinc-900 to-black p-6 shadow-2xl shadow-blue-900/40 overflow-y-auto max-h-[90vh]">
            <h1 className="mb-6 text-center text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Add New Project
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-300">Project Name</label>
                <input
                  type="text"
                  placeholder="My Awesome Project"
                  className="rounded bg-zinc-800 px-3 py-2 outline-none border border-zinc-700 focus:border-blue-500 transition"
                  {...register("name", ValidationRules.name)}
                />
                <ErrorMessage error={errors} name="name" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-300">Project Link</label>
                <input
                  type="text"
                  placeholder="https://example.com"
                  className="rounded bg-zinc-800 px-3 py-2 outline-none border border-zinc-700 focus:border-blue-500 transition"
                  {...register("link", ValidationRules.link)}
                />
                <ErrorMessage error={errors} name="link" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-300">Completion Date</label>
                <input
                  type="date"
                  className="rounded bg-zinc-800 px-3 py-2 outline-none border border-zinc-700 focus:border-blue-500 transition"
                  {...register("dateOfCompletion", ValidationRules.date)}
                />
                <ErrorMessage error={errors} name="date" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-300">Tags</label>
                <input
                  type="text"
                  placeholder="React, Next.js, Tailwind"
                  className="rounded bg-zinc-800 px-3 py-2 outline-none border border-zinc-700 focus:border-blue-500 transition"
                />
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-1">
              <label className="text-sm text-gray-300">Description</label>
              <textarea
                rows={3}
                placeholder="Describe your project..."
                className="rounded bg-zinc-800 px-3 py-2 outline-none border border-zinc-700 focus:border-blue-500 transition resize-none"
                {...register("description", ValidationRules.description)}
              />
              <ErrorMessage error={errors} name="description" />
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <Button
                onClick={() => toogleForm(false)}
                className="rounded bg-zinc-700 px-6 py-2 font-bold text-white hover:bg-red-600 transition"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={handleSubmit(onSubmit)}
                className="rounded bg-lime-400 py-2 font-bold text-black hover:scale-105 transition"
              >
                Add Project
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
