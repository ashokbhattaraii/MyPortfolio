import { useContext } from "react";
import BlogData from "../dataTable";
import { useGlobalActions } from "../../Context/ActionContext";
interface PostType {
  id: number;
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
interface PostProps {
  postsList: PostType[];
}
const handleDelete = () => {};
export default function Post({ postsList }: PostProps) {
  const { openDeleteModel } = useGlobalActions();
  return (
    <>
      <div className="w-full overflow-hidden rounded-xl border border-white/5 bg-slate-900/20">
        <table className="text-left w-full border-collapse">
          <thead className="bg-white/5 text-gray-400 uppercase text-[0.7rem] tracking-[0.2em] font-black">
            <tr>
              <th className="px-8 py-4">s.n</th>
              <th className="px-8 py-4 w-[50%]">Title</th>
              <th className="px-8 py-4">Created At</th>
              <th className="px-8 py-4">Status</th>
              <th className="px-8 py-4 text-right">Actions</th>
            </tr>
          </thead>
          {postsList.map((post: PostType, index: number) => {
            return (
              <BlogData
                post={post}
                key={index++}
                index={index + 1}
                onDelete={() => openDeleteModel(post.id)}
              ></BlogData>
            );
          })}
        </table>
      </div>
    </>
  );
}
