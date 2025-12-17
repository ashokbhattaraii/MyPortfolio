interface ProjectsDetail {
  name: string;
  description: string;
  dateOfCompletion: string;
  link: string;
}
export default async function List({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const projectId = await params;
  async function fetchInitialProjects() {
    try {
      const response = await fetch("/api/projects");
      if (response.ok) {
        const data: ProjectsDetail[] = await response.json();

        console.log(data);
      }
    } catch (e) {
      console.log("Failed to fetch", e);
    }
  }

  return (
    <>
      {" "}
      <p>The project with ID: {projectId} </p>
      <h1 className="text-white mt-100">Hello </h1>=
    </>
  );
}
