import Button from "@/app/Resualble_Components/Button";
import Link from "next/link";
export default function SideBar({ Projects, firstPage, lastIndex }: any) {
  let lengthOfArray = Projects.length;
  const maxDisplay = 5;
  const projectLength = Projects.length;
  console.log("Sidebar log", projectLength);
  const filteredProjects = Projects?.slice(firstPage, lastIndex) || [];
  console.log("sidebar", firstPage, lastIndex);
  return (
    <>
      <div
        id="sideProjecList"
        className="h-[81vh] w-50 hidden md:block bg-black p-5 ml-5 rounded-2xl shadow shadow-gray-300 relative  max-w-7xl"
      >
        <h2 className="text-blue-700 font-bold">PROJECTS</h2>
        <div id="lists" className="mt-6">
          <ul className="">
            {filteredProjects.map((p: any, index: any) => {
              const projectId = index;
              const projectPath = `/projects/${projectId}`;
              return (
                <div key={index} className="flex gap-2">
                  <Link
                    href={projectPath}
                    className="w-full truncate hover:text-blue-700"
                    key={index}
                  >
                    {p.name}
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
