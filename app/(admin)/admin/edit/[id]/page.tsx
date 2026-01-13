export const dynamic = "force-dynamic";
import { prisma } from "@/lib/db";

import BlogEditor from "../../Components/blogEditor";

export default async function Edit({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await prisma.post.findUnique({ where: { id: Number(id) } });

  if (!post)
    return (
      <>
        <div className="flex justify-center items-center text-3xl text-white">
          <h1>Blog Not Found</h1>
        </div>
      </>
    );

  return (
    <div className="p-10 bg-[#0a0a0a] min-h-screen">
      <h1 className="text-blue-600 font-bold text-2xl mb-8">Edit Blog</h1>
      <BlogEditor post={post} id={Number(id)} />
    </div>
  );
}
