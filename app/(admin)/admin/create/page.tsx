"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
interface PostType {
  title: string;
  content: string;
  slug: string;
  status: "published" | "draft";
  publishedAt?: string | null;
  updatedAt: string;
  tags: string[];
  image: string | null;
  author: string | null;
}

export default function CreateBlogForm() {
  const router = useRouter();
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<PostType>();

  const onSubmit: SubmitHandler<PostType> = (data) => {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <button
        className="fixed flex  gap-2  shadow-xl cursor-pointer shadow-gray-400 py-2 px-4 bg-indigo-600 m-2 text-white rounded-xl"
        onClick={() => router.push("/admin")}
      >
        <ArrowLeft></ArrowLeft> <p>Back</p>
      </button>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-blue-600 text-blue-600 px-8 py-10">
            <h1 className="text-4xl font-bold text-white mb-2">
              Create New Blog
            </h1>
            <p className="text-indigo-100">Share your story with the world</p>
          </div>

          <div className="p-8 space-y-8">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Blog Title
              </label>
              <input
                {...register("title", { required: "Title is required" })}
                type="text"
                placeholder="Enter an engaging title for your blog"
                className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <span className="text-lg">⚠</span> {errors.title.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Author Name
              </label>
              <input
                {...register("author", { required: "Author name is required" })}
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
              />
              {errors.author && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <span className="text-lg">⚠</span> {errors.author.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Featured Image
              </label>
              <div className="relative">
                <input
                  {...register("image", { required: "Image is required" })}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="image-upload"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      const url = URL.createObjectURL(e.target.files[0]);
                      setPreviewImage(url);
                    }
                  }}
                />
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all"
                >
                  {previewImage ? (
                    <div className="relative w-full h-full">
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all rounded-xl flex items-center justify-center">
                        <span className="text-white font-semibold opacity-0 hover:opacity-100 transition-opacity">
                          Click to change image
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <p className="mb-2 text-sm text-gray-600 font-semibold">
                        Click to upload featured image
                      </p>
                      <p className="text-xs text-gray-500">
                        PNG, JPG or GIF (MAX. 10MB)
                      </p>
                    </div>
                  )}
                </label>
              </div>
              {errors.image && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <span className="text-lg">⚠</span> {errors.image.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tags
              </label>
              <input
                {...register("tags", {
                  required: "At least one tag is required",
                })}
                type="text"
                placeholder="technology, design, lifestyle (comma-separated)"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
              />
              {errors.tags && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <span className="text-lg">⚠</span> {errors.tags.message}
                </p>
              )}
            </div>

            <div className="flex gap-4 pt-6">
              <button
                type="button"
                className="flex-1 px-6 py-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all hover:shadow-md cursor-pointer"
              >
                Save Draft
              </button>
              <button
                onClick={handleSubmit(onSubmit)}
                type="button"
                className="flex-1 px-6 py-4 bg-blue-600 text-blue-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
              >
                Publish Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
