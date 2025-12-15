export default function ProjectDetail({
  params,
}: {
  params: { projectId: string };
}) {
  const { projectId } = params;

  return (
    <>
      {" "}
      <p>The project with ID: {projectId} </p>
      <h1 className="text-white mt-100">Hello </h1>
    </>
  );
}
