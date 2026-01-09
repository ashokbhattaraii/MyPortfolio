interface CardInfo {
  title: string;
  skills: string[];
}

export default function Card({ title, skills }: CardInfo) {
  return (
    <>
      {
        <div className="w-full sm:w-full md:w-55 rounded-2xl sm:rounded-3xl bg-blue-600 backdrop-blur-2xl flex flex-wrap gap-2 sm:gap-3 flex-col py-4 sm:py-3">
          <h1 className="text-white text-center font-extrabold text-base sm:text-lg md:text-[1.2rem] px-2">
            {title}
          </h1>

          <div
            id="skillsContainer"
            className="flex flex-wrap gap-2 sm:gap-3 px-2 sm:px-3 text-white justify-center sm:justify-start"
          >
            {skills.map((skill, index) => {
              return (
                <p
                  key={index}
                  className="rounded-xl sm:rounded-2xl px-2 sm:px-3 py-1.5 sm:py-2 bg-[#2B2A2A] hover:bg-[#2B2A2A]/80 hover:scale-105 transition-transform ease-out duration-150 text-white text-xs sm:text-sm"
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
