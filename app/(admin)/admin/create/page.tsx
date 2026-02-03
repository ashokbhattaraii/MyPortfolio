"use client";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useState } from "react";
import { ArrowLeft, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import "react-quill-new/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { title } from "process";
import { createBlogPost } from "@/app/actions/blogActions";
import { useToast } from "../Context/ToastContext";
import { Loader2 } from "lucide-react";
interface PostType {
  title: string;
  content: string;
  slug: string;
  status: string;
  publishedAt?: string | null;
  updatedAt: string;
  tags: string[];
  image: string | null;
  author: string | null;
  sourceLink?: string | null;
}

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
export default function CreateBlogForm() {
  const [content, setContent] = useState<string>("");
  const router = useRouter();
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const { setIsPostCreated, setToast } = useToast();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<PostType>();

  const [tagInput, setTagInput] = useState("");
  const [tagsArray, setTagsArray] = useState<string[]>([]);
  const [blogTitle, setBlogtitle] = useState<string>();
  const [isPostCreating, setIsPostCreating] = useState(false);
  const onSubmit = async (data: PostType, status: "published" | "draft") => {
    setIsPostCreated(true);
    setIsPostCreating(true);
    const formData = new FormData();
    try {
      formData.append("title", data.title);
      formData.append("author", data.author ?? "");
      formData.append("content", data.content);
      formData.append("sourceLink", data.sourceLink ?? "");
      formData.append("tags", JSON.stringify(tagsArray));
      formData.append("status", status);
      let fileInput = document.getElementById(
        "image-upload",
      ) as HTMLInputElement;
      if (fileInput?.files?.[0]) {
        formData.append("image", fileInput.files[0]);
      }
      const postCrateStatus = await createBlogPost(formData);
      if (postCrateStatus.success == true) {
        setToast("Post created successfully", "success");
      } else {
        setIsPostCreating(false);
        setToast("Error creating post", "error");
        return;
      }
    } catch {}
    router.push("/admin");
  };

  function addTag(e: React.MouseEvent) {
    e.preventDefault();
    if (tagInput.trim() !== "") {
      setTagsArray([...tagsArray, tagInput]);
      setTagInput("");
    }
  }
  function removeTag(ind: number) {
    setTagsArray((prev) => prev.filter((tag, index) => index !== ind));
    console.log("Index", ind);
    console.log("Value", tagsArray[ind]);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <button
        type="button"
        className="fixed flex gap-2 shadow-xl cursor-pointer shadow-gray-400 py-2 px-4 bg-indigo-600 m-2 text-white rounded-xl z-50"
        onClick={() => router.push("/admin")}
      >
        <ArrowLeft></ArrowLeft> <p>Back</p>
      </button>
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* FORM WRAPPER START */}
        <form
          onSubmit={handleSubmit((data) => onSubmit(data, "published"))}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
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
                onChange={(e) => setBlogtitle(e.target.value.trim())}
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
                Source Link
              </label>
              <input
                {...register("sourceLink")}
                type="url"
                placeholder="https://example.com/source"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
              />
              {errors.sourceLink && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <span className="text-lg">⚠</span> {errors.sourceLink.message}
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
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl
              focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
              outline-none transition-all"
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
                    const files = e.target.files;
                    if (files && files.length > 0) {
                      const url = URL.createObjectURL(files[0]);
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
              <div className="flex gap-4">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  placeholder="technology, design, lifestyle (one at a time)"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
                />
                <button
                  type="button"
                  className="border rounded-full p-3 border-blue-600 hover:bg-blue-600 hover:text-white  transition-transform ease-out duration-300 hover:scale-105"
                  onClick={addTag}
                >
                  <Plus />
                </button>
              </div>
              <div className="mt-5">
                {errors.tags ? (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <span className="text-lg">⚠</span> {errors.tags.message}
                  </p>
                ) : (
                  tagsArray.length > 0 &&
                  tagsArray.map((tag, index) => {
                    return (
                      <span
                        onClick={() => removeTag(index)}
                        className=" mx-2 border px-4 py-2 rounded-2xl bg-blue-600 text-white hover:bg-blue-700  "
                        key={index}
                      >
                        #{tag}
                      </span>
                    );
                  })
                )}
              </div>
            </div>
            <div id="content">
              <label htmlFor="contentEditor">
                <Controller
                  control={control}
                  name="content"
                  rules={{
                    validate: (value) =>
                      value.replace(/<(.|\n)*?>/g, "").trim().length > 5 ||
                      "Content is missing",
                  }}
                  render={({ field }) => (
                    <ReactQuill
                      theme="snow"
                      className="custom-quill "
                      {...field}
                      id="contentEditor"
                      placeholder="Enter your content here"
                      modules={{
                        toolbar: [
                          [{ header: [1, 2, false] }],
                          ["bold", "italic", "underline", "strike"],
                          [{ list: "ordered" }, { list: "bullet" }],
                          ["link", "image"],
                          ["clean"],
                        ],
                      }}
                    />
                  )}
                />
              </label>
              {errors.content && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <span className="text-lg">⚠</span> {errors.content.message}
                </p>
              )}
            </div>

            <div className="flex gap-4 pt-6">
              <button
                type="button"
                disabled={isPostCreating}
                className="flex-1 px-6 py-4 flex justify-center items-center bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all hover:shadow-md cursor-pointer"
                onClick={handleSubmit((data) => onSubmit(data, "draft"))}
              >
                {isPostCreating ? (
                  <Loader2 className="animate-spin"></Loader2>
                ) : (
                  "Save Draft"
                )}
              </button>
              <button
                type="submit"
                disabled={isPostCreating}
                className="flex-1 flex justify-center items-center px-6 py-4 j bg-blue-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
              >
                {isPostCreating ? (
                  <Loader2 className="animate-spin"></Loader2>
                ) : (
                  "Publish Blog"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
