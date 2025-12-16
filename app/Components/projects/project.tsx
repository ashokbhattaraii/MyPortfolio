interface ProjectDetail {
  name: string;
  description: string;
  dateOfCompletion: string;
  link: string;
}

export default function Project({ project }: any) {
  return (
    <>
      {project.map((p: any, index: any) => {
        return (
          <div
            className="flex flex-wrap flex-col w-30   transition-transform ease-out duration-300 hover:scale-105"
            key={index}
          >
            <div
              id={`project${index}`}
              key={index}
              className="h-30 w-30 bg-gray-500 relative rounded-2xl  flex justify-center"
            ></div>
            <p className="w-full truncate">{p.name}</p>
          </div>
        );
      })}
    </>
  );
}
