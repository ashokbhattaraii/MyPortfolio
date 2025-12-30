"use client";
import { useState } from "react";
import { UpdatePost } from "@/app/actions/blogActions";
import { Editor, extensions, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function BlogEditor({ initialData, isEditing }: any) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [content, setContent] = useState(initialData?.content || "");

  const handleSave = async () => {
    if (isEditing) {
      await UpdatePost(initialData.id, {
        title,
        content,
        status: initialData.status,
      });
      console.log("Edited successfully");
    } else {
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <input
        className="bg-transparent text-4xl font-bold text-white outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={handleSave}
        className="bg-lime-400 text-black font-bold py-2 px-6 rounded-md hover:bg-lime-500"
      >
        {isEditing ? "Save Changes" : "Publish Post"}
      </button>
    </div>
  );
}
