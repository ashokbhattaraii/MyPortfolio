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
                  <span>{index + 1}. </span>
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

          <button className="flex items-center gap-2 text-[12px] ml-6 text-blue-700">
            View all
            <span>
              <img
                width="13"
                height="13"
                src="https://img.icons8.com/ios/50/228BE6/forward--v1.png"
                alt="forward--v1"
              />
            </span>
          </button>

          <Button
            variant="primary"
            className="w-3/4 mt-30 absolute bottom-2 right-2"
          >
            Hide
          </Button>
        </div>
      </div>
    </>
  );
}
