"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Eye, FolderOpen, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "../../Context/ToastContext";
import { useProjects } from "@/app/hook/project";

// Zod validation schema
const projectSchema = z.object({
  name: z.string().min(3, "Project name must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  dateOfCompletion: z.string().min(1, "Completion date is required"),
  link: z.string().url("Please enter a valid URL"),
});

type ProjectFormData = z.infer<typeof projectSchema>;

export default function ProjectManage() {
  const [showModal, setShowModal] = useState(false);
  const { setToast, setIsProjectAdded } = useToast();
  const { data: projects, isLoading, error } = useProjects();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
  });

  const handleAddProject = () => {
    setShowModal(true);
    reset();
  };
  console.log("Projects data:", projects);

  const onSubmit = async (data: ProjectFormData) => {
    try {
      const response = await fetch("/api/project/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to add project");
      } else {
        setIsProjectAdded(true);
        setToast("Project added successfully!", "success");

        setShowModal(false);
      }
    } catch (error) {
      console.error("Error adding project:", error);
      setIsProjectAdded(true);
      setToast("Error adding project. Please try again.", "error");
    }
  };
  const today = new Date().toISOString().split("T")[0];
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <FolderOpen size={32} className="text-blue-600" />
            <h1 className="text-3xl font-bold text-white">Projects</h1>
          </div>
          <p className="text-gray-400">
            Manage and showcase your portfolio projects
          </p>
        </div>
        <button
          onClick={handleAddProject}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-600/50"
        >
          <Plus size={20} />
          Add Project
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
        {/* Total Projects Card */}
        <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-lg border border-blue-500/30 p-6 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Total Projects</p>
              <h3 className="text-3xl font-bold text-white">
                {projects?.length || 0}
              </h3>
            </div>
            <div className="p-3 bg-blue-600/20 rounded-lg">
              <FolderOpen size={28} className="text-blue-400" />
            </div>
          </div>
        </div>

        {/* Completed Projects Card */}
        <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 rounded-lg border border-green-500/30 p-6 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Completed</p>
              <h3 className="text-3xl font-bold text-white">
                {projects?.filter((p: any) => p.isCompleted)?.length || 0}
              </h3>
            </div>
            <div className="p-3 bg-green-600/20 rounded-lg">
              <Eye size={28} className="text-green-400" />
            </div>
          </div>
        </div>

        {/* Last Updated Card */}
        <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 rounded-lg border border-purple-500/30 p-6 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Last Updated</p>
              <h3 className="text-lg font-bold text-white">
                {projects && projects.length > 0
                  ? new Date(
                      projects.reduce((latest: any, current: any) =>
                        new Date(current.updatedAt) > new Date(latest.updatedAt)
                          ? current
                          : latest,
                      ).updatedAt,
                    ).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })
                  : "N/A"}
              </h3>
            </div>
            <div className="p-3 bg-purple-600/20 rounded-lg">
              <Edit2 size={28} className="text-purple-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-white/10 overflow-hidden backdrop-blur">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Project Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Description
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Completion Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Link
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <p className="text-gray-400">Loading projects...</p>
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <p className="text-red-400">Error loading projects</p>
                  </td>
                </tr>
              ) : projects && projects.length > 0 ? (
                projects.map((project: any) => (
                  <tr
                    key={project.id}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200"
                  >
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-white">
                        {project.name}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-400 line-clamp-2">
                        {project.description}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-semibold rounded-full border border-blue-600/30">
                        {new Date(project.dateOfCompletion).toLocaleDateString(
                          "en-US",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          },
                        )}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 transition-colors"
                      >
                        <Eye size={16} />
                        View
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button className="p-2 bg-yellow-600/20 text-yellow-400 rounded-lg hover:bg-yellow-600/40 transition-all duration-200 border border-yellow-600/30 hover:border-yellow-600/60">
                          <Edit2 size={18} />
                        </button>
                        <button className="p-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/40 transition-all duration-200 border border-red-600/30 hover:border-red-600/60">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <FolderOpen size={48} className="text-gray-600" />
                      <p className="text-gray-400 text-lg">
                        No projects yet. Click "Add Project" to get started!
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Project Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-white/10 w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto scrollbar-hide">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 md:p-6 border-b border-white/10 sticky top-0 bg-gray-900/80">
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Add New Project
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            {/* Modal Body */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-4 md:p-6 space-y-4"
            >
              {/* Project Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">
                  Project Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter project name"
                  {...register("name")}
                  className={`w-full px-3 py-2 bg-gray-700/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all text-sm md:text-base ${
                    errors.name
                      ? "border-red-500 focus:border-red-600"
                      : "border-white/10 focus:border-blue-600"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">
                  Description *
                </label>
                <textarea
                  placeholder="Enter project description"
                  rows={3}
                  {...register("description")}
                  className={`w-full px-3 py-2 bg-gray-700/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all resize-none text-sm md:text-base ${
                    errors.description
                      ? "border-red-500 focus:border-red-600"
                      : "border-white/10 focus:border-blue-600"
                  }`}
                />
                {errors.description && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* Date of Completion */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">
                  Completion Date *
                </label>
                <input
                  type="date"
                  max={today}
                  {...register("dateOfCompletion")}
                  className={`w-full px-3 py-2 bg-gray-700/50 border rounded-lg text-white focus:outline-none transition-all text-sm md:text-base ${
                    errors.dateOfCompletion
                      ? "border-red-500 focus:border-red-600"
                      : "border-white/10 focus:border-blue-600"
                  }`}
                />
                {errors.dateOfCompletion && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.dateOfCompletion.message}
                  </p>
                )}
              </div>

              {/* Project Link */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">
                  Project Link *
                </label>
                <input
                  type="url"
                  placeholder="https://example.com"
                  {...register("link")}
                  className={`w-full px-3 py-2 bg-gray-700/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all text-sm md:text-base ${
                    errors.link
                      ? "border-red-500 focus:border-red-600"
                      : "border-white/10 focus:border-blue-600"
                  }`}
                />
                {errors.link && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.link.message}
                  </p>
                )}
              </div>

              {/* Form Actions */}
              <div className="flex gap-2 md:gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-3 md:px-4 py-2 md:py-3 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-700 transition-all font-semibold text-sm md:text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-3 md:px-4 py-2 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-lg text-sm md:text-base"
                >
                  Add Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
