"use client";
import { useState } from "react";
import { UpdatePost } from "@/app/actions/blogActions";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function BlogEditor({ initialData, isEditing }: any) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [author, setAuthor] = useState(initialData?.author || "");
  const [content, setContent] = useState(initialData?.content || "");

  const editor = useEditor({
    extensions: [StarterKit],
    content: initialData?.content || "<p>Start writing...</p>",
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose max-w-none focus:outline-none min-h-[300px] bg-slate-900 p-4 rounded-xl border border-slate-800",
      },
    },
  });

  const handleSave = async () => {
    if (!title || !author || content.length < 10) {
      alert("Please fill in all fields");
      return;
    }

    if (isEditing) {
      try {
        await UpdatePost(initialData.id, {
          title,
          author,
          content,
          status: initialData.status,
        });
        alert("Updated successfully!");
      } catch (err) {
        console.error("Failed to update:", err);
      }
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto p-6 bg-black text-white rounded-2xl shadow-2xl">
      <div className="flex flex-col gap-2">
        <label className="text-sm text-slate-400 font-medium">Blog Title</label>
        <input
          placeholder="Enter title..."
          className="bg-transparent text-4xl font-bold text-white outline-none border-b border-slate-800 focus:border-lime-400 transition-colors pb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-slate-400 font-medium">
          Author Name
        </label>
        <input
          placeholder="Author name..."
          className="bg-slate-900 text-lg text-white outline-none p-3 rounded-lg border border-slate-800 focus:border-lime-400"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-slate-400 font-medium">Content</label>
        <div className="border border-slate-800 rounded-xl overflow-hidden">
          <div className="bg-slate-800 p-2 flex gap-2 border-b border-slate-700">
            <button
              onClick={() => editor?.chain().focus().toggleBold().run()}
              className={`px-3 py-1 rounded ${
                editor?.isActive("bold")
                  ? "bg-lime-400 text-black"
                  : "bg-slate-700"
              }`}
            >
              B
            </button>
            <button
              onClick={() => editor?.chain().focus().toggleItalic().run()}
              className={`px-3 py-1 rounded ${
                editor?.isActive("italic")
                  ? "bg-lime-400 text-black"
                  : "bg-slate-700"
              }`}
            >
              I
            </button>
          </div>
          <EditorContent editor={editor} />
        </div>
      </div>

      <button
        onClick={handleSave}
        className="bg-lime-400 text-black font-extrabold py-3 px-8 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-lime-400/20 w-fit ml-auto"
      >
        {isEditing ? "Save Changes" : "Publish Post"}
      </button>
    </div>
  );
}
