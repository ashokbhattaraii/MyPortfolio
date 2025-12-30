import { Trash2, Edit } from "lucide-react";
import Link from "next/link";

interface BlogsDataProps {
  post: {
    id: number;
    title: string;
    content: string;
    status: string;
    createdAt: Date;
  };
  onDelete: (id: number) => void;
}
export default function BlogData({ post, onDelete }: BlogsDataProps) {
  return (
    <tbody className="divide-y divide-white/5">
      <tr className="hover:bg-white/5 transition-colors">
        <td className="px-8 py-4 text-gray-500 italic">{post.id}</td>
        <td className="px-8 py-4 font-medium text-white">{post.title}</td>
        <td className="px-8 py-4 text-gray-400 text-sm">20/08/2025</td>
        <td className="px-8 py-4">
          <span className="bg-lime-400/10 text-lime-400 px-3 py-1 rounded-full text-[10px] font-bold">
            Published
          </span>
        </td>
        <td className="px-8 py-4">
          <div className="flex justify-end gap-4">
            <Link href={`/admin/edit/${post.id}`}>
              <Edit
                size={18}
                className="cursor-pointer hover:text-lime-400 transition-colors"
              />
            </Link>
            <Trash2
              size={18}
              className="cursor-pointer hover:text-red-600 transition-colors"
              onClick={() => {
                onDelete(post.id);
              }}
            />
          </div>
        </td>
      </tr>
    </tbody>
  );
}
