export default async function BlogDetail({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  return (
    <>
      <p className="text-white">{blogId}</p>
    </>
  );
}
