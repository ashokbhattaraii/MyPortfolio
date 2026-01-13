"use client";
import { ArrowLeft, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import { useForm, Controller } from "react-hook-form";
import { UpdatePost } from "@/app/actions/blogActions";
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
}

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function EditBlogFormUI({
  post,
  id,
}: {
  post: PostType;
  id: number;
}) {
  const router = useRouter();
  const [content, setContent] = useState<string>("");

  const {
    register,
    control,
    handleSubmit,

    formState: { errors },
  } = useForm<PostType>();

  const [tagInput, setTagInput] = useState("");
  const [tagsArray, setTagsArray] = useState<string[]>(post.tags);
  const [title, setTitle] = useState<string>(post.title);
  const [author, setAuthor] = useState<string>(post.author || "");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setContent(post.content);
    setTagsArray(post.tags);
  }, [post.content]);
  async function onValidSubmit(post: PostType, status: string) {
    setIsLoading(true);
    const updateStatus = await UpdatePost(id, {
      title,
      tags: tagsArray,
      author,
      content,
      status: status,
    });
    if (updateStatus.success !== true) {
      setIsLoading(false);
    } else {
      router.push("/admin");
    }
  }

  function addTag(e: React.MouseEvent) {
    if (!tagInput) return;
    console.log("Before", tagsArray);
    e.preventDefault();
    setTagsArray((prev) => [...prev, tagInput]);
    setTagInput("");
    console.log("After", tagsArray);
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
        <ArrowLeft /> <p>Back</p>
      </button>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <form
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          onSubmit={handleSubmit(() => onValidSubmit(post, "published"))}
        >
          <div className="bg-blue-600 px-8 py-10">
            <h1 className="text-4xl font-bold text-white mb-2">Edit Blog</h1>
            <p className="text-indigo-100">Update your story</p>
          </div>

          <div className="p-8 space-y-8">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Blog Title
              </label>
              <input
                {...register("title", {
                  required: "Title is required",

                  minLength: { value: 3, message: "Minimum 3 characters" },
                })}
                type="text"
                onChange={(e) => setTitle(e.target.value.trim())}
                defaultValue={post.title}
                className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-xl"
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
                {...register("author", {
                  required: "Author is required",
                })}
                type="text"
                defaultValue={post.author || ""}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
              />
              {errors.author && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <span className="text-lg">⚠</span> {errors.author.message}
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
                  onChange={(e) => {
                    console.log("Data", e.target.value);
                    setTagInput(e.target.value);
                  }}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
                />
                <button
                  type="button"
                  onClick={addTag}
                  className="border rounded-full p-3 border-blue-600"
                >
                  <Plus />
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {tagsArray.map((tag, ind) => (
                  <span
                    {...register("tags")}
                    key={tag}
                    onClick={() => removeTag(ind)}
                    className="px-4 py-2 rounded-2xl bg-blue-600 text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {errors.tags && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <span className="text-lg">⚠</span> {errors.tags.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Content
              </label>
              <div className="w-full border-2 border-gray-200 rounded-xl bg-white p-4">
                <Controller
                  name="content"
                  control={control}
                  defaultValue={post.content}
                  rules={{
                    required: "Content is required",
                  }}
                  render={({ field }) => (
                    <ReactQuill
                      {...field}
                      value={field.value}
                      onChange={setContent}
                      theme="snow"
                      className="blog-content h-100"
                    />
                  )}
                />
              </div>
            </div>
            {errors.content && (
              <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                <span className="text-lg">⚠</span> {errors.content.message}
              </p>
            )}

            <div className="flex gap-4 pt-6">
              <button
                type="button"
                onClick={() => onValidSubmit(post, "draft")}
                className="flex-1 px-6 py-4 bg-gray-100 flex items-center justify-center cursor-pointer text-gray-700 font-semibold rounded-xl"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin"></Loader2>
                ) : (
                  "Save Draft"
                )}
              </button>
              <button
                type="submit"
                className="flex-1 px-6 cursor-pointer flex items-center justify-center py-4 bg-blue-600 text-white font-semibold rounded-xl"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin"></Loader2>
                ) : (
                  "Update Post"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
