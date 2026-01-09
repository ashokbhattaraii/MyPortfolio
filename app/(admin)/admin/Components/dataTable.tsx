import { Trash2, Edit } from "lucide-react";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface BlogsDataProps {
  post: {
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
  };
  index: number;

  onDelete: (id: number) => void;
}

export default function BlogData({ post, onDelete, index }: BlogsDataProps) {
  const router = useRouter();
  return (
    <tbody className="divide-y divide-white/5  ">
      <tr className="hover:bg-white/5 transition-colors">
        <td className="px-8 py-4 text-gray-500 italic">{index}</td>
        <td
          className="px-8 py-4 font-medium text-white cursor-pointer"
          onClick={() => router.push(`/blogs/${post.id}`)}
        >
          {post.title}
        </td>
        <td className="px-8 py-4 text-gray-400 text-sm">20/08/2025</td>
        <td className="px-8 py-4">
          <span className="bg-blue-600/10 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold">
            Published
          </span>
        </td>
        <td className="px-8 py-4">
          <div className="flex justify-end gap-4">
            <Link href={`/admin/edit/${post.id}`}>
              <Edit
                size={18}
                className="cursor-pointer hover:text-blue-600 transition-colors"
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
