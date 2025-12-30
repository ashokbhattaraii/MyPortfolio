// "use client";

// import { useEditor, EditorContent } from "@tiptap/react";

// import StarterKit from "@tiptap/starter-kit";

// export default function Editor({
//   onChange,
// }: {
//   onChnage: (html: string) => void;
// }) {
//   const editor = useEditor({
//     extensions: [StarterKit],
//     content: "<p>Start Writing BLogs here</p>",
//     onUpdate: ({ editor }) => {
//       onChange(editor.getHTML());
//     },
//   });
//   return (
//     <>
//       <div className="bg-amber-400 text-black text-2xl">
//         <EditorContent editor={editor}></EditorContent>
//       </div>
//     </>
//   );
// }
