"use client";

import { useState, useEffect, useContext } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { createBlogPost } from "@/app/actions/blogActions";
import { error } from "console";

import { useToast } from "../Context/ToastContext";
export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);
  const [author, setAuthor] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { setIsPostCreated, setToast } = useToast();
  const editor = useEditor({
    extensions: [StarterKit],
    content: "Create your story here...",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "prose prose-invert focus:outline-none min-h-[400px] max-w-none text-lg p-6 bg-slate-800 focus:bg-slate-900 rounded transition-transform ease-out duration-300",
      },
    },
  });
  const addTag = () => {
    const trimmedValue = tagInput.trim();
    if (!trimmedValue) return;
    if (tags.includes(trimmedValue)) {
      setTagInput("");
      return;
    }
    setTags([...tags, tagInput]);
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (title.trim().length < 5) newErrors.title = "Atleast 5 character";

    if (!author.trim()) newErrors.author = "Author is required";

    if (!editor || editor.getText().trim().length < 20)
      newErrors.content = "Atleast 20 characters";
    if (tags.length === 0) newErrors.tags = "Atleast one tag is required";
    if (!file) newErrors.image = "Cover Image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [isTostOpen, setIsTostOpen] = useState(false);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("content", editor?.getHTML() || "");
    formData.append("title", title);
    formData.append("author", author);
    tags.forEach((tag) => formData.append("tags", tag));
    if (file) {
      formData.append("image", file);
    }
    try {
      await createBlogPost(formData);
      setIsPostCreated(true);
    } catch (error) {
      console.log("Error crating post", error);
      setToast("Failed to create Post", "error");
      setIsTostOpen(true);
    }
    setToast("Post created successfully!", "success");
    setIsPostCreated(true);
    setIsTostOpen(true);
  };
  return (
    <>
      <div className="text-white mx-6">
        <div id="heading" className="flex justify-around items-center py-4">
          <h1 className="text-[2.4rem] font-bold">
            Create New <span className="text-lime-40  0 italic">Blog</span>
          </h1>
          <button
            disabled={isPublishing}
            className={`bg-lime-400 px-4 py-2 text-2xl rounded-2xl font-bold max-w-50 ${
              isPublishing ? "opacity-50 cursor-not-allowed" : ""
            }}`}
            onClick={async () => {
              if (isPublishing) return;
              const isValid = validate();
              if (isValid) {
                setIsPublishing(true);

                await handleSubmit();
                setIsPublishing(false);
              }
            }}
          >
            {isPublishing ? "Publishing..." : "Publish"}
          </button>
        </div>
        <div
          id="blogArea"
          className="max-w-4xl w-full mx-auto flex flex-col gap-4"
        >
          <div className="w-full flex- flex-col">
            <input
              type="text"
              placeholder="Enter your title here"
              className={`text-3xl w-full outline-0 mt-20  ${
                errors.title ? "" : ""
              }`}
              onChange={(e) => {
                setTitle(e.target.value);
                console.log(title);
              }}
            />
            <p className="my-2 text-red-800">{errors.title}</p>
          </div>
          <div className="w-full flex- flex-col">
            <input
              type="text"
              id="author"
              placeholder="Author"
              className={`border border-slate-800 rounded-2xl w-full py-3 pl-4 outline-0 focus:border-slate-600 text-gray-300 ${
                errors.author ? "border border-red-700" : "border-slate-400"
              }`}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <p className="my-2 text-red-800">{errors.author}</p>
          </div>
          <div className="w-full flex- flex-cols">
            <input
              type="file"
              className="border border-slate-800 rounded-2xl py-3 w-full pl-4 outline-0 focus:border-slate-600 text-gray-300"
              onChange={(e) => {
                setFile(e.target.files?.[0] || null);
              }}
            />
            <p className="my-2 text-red-800">{errors.image}</p>
          </div>

          <div id="tags" className="flex gap-2">
            <input
              type="text"
              className="border border-slate-800 rounded-2xl py-3 pl-4 outline-0 focus:border-slate-600 text-gray-300 w-full"
              placeholder="Tag"
              id="tag"
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addTag();
                }
              }}
            />

            <button
              className="border px-4 rounded-2xl bg-lime-400 text-2xl"
              onClick={() => {
                if (!tagInput) return;
                setTags([...tags, tagInput]);
                setTagInput("");
              }}
            >
              Add
            </button>
          </div>
          {!errors.tags ? (
            <span className="h-10 flex gap-4 ">
              {tags.map((tag, index) => {
                return <h1 key={index}>#{tag}</h1>;
              })}
            </span>
          ) : (
            <span className="my-2 text-red-800">{errors.tags}</span>
          )}

          <div className="bg-slate-900 rounded-2xl">
            <div
              id="btn"
              className="mt-2 flex  pl-4 pt-3 gap-4 pb-4 w-full  rounded"
            >
              <button
                className="text-xl font-bold bg-slate-400 px-4 rounded"
                onClick={() => editor?.chain().focus().toggleBold().run()}
              >
                Bold
              </button>
              <button
                className="text-xl font-bold  p-2 rounded"
                onClick={() => editor?.chain().focus().toggleItalic().run()}
              >
                Italic
              </button>
            </div>
            {!editor ? (
              <h1 className="mt-6 text-center text-2xl">Loading editor...</h1>
            ) : (
              <EditorContent
                editor={editor}
                className="outline-0 rounded"
              ></EditorContent>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
