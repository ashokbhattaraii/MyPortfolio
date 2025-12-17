interface CardInfo {
  title: string;
  skills: string[];
}

export default function Card({ title, skills }: CardInfo) {
  return (
    <>
      {
        <div className="w-55 rounded-3xl  bg-gray-950 backdrop-blur-2xl flex flex-wrap gap-3 flex-col py-3">
          <h1 className="text-blue-700 text-center font-extrabold text-[1.2rem]">
            {title}
          </h1>

          <div
            id="skillsContainer"
            className="flex flex-wrap gap-3 px-2 text-white"
          >
            {skills.map((skill, index) => {
              return (
                <p
                  key={index}
                  className=" rounded-2xl px-2 py-2 bg-gray-600 hover:bg-gray-800"
                >
                  {skill}
                </p>
              );
            })}
          </div>
        </div>
      }
    </>
  );
}
