import Card from "../Card/card";

export default function Expertise() {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center pt-8 sm:pt-10 md:pt-12 mx-auto mb-5 px-4"
        id="expertise-section"
      >
        <h2 className="text-[#2B2A2A] text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 text-center">
          Expertise
        </h2>
        <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#5A7ACD] to-[#4a6bb8] mx-auto rounded-full mb-3"></div>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mt-3 mb-4 sm:mb-6 text-[#2B2A2A] text-center px-2">
          Skills and Technologies
        </p>
        <div
          id="CardContainer"
          className="flex flex-col lg:flex-row items-stretch justify-center gap-4 sm:gap-6 w-full max-w-7xl"
        >
          <Card
            title="Frontend"
            skills={[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "HTML",
              "CSS",
            ]}
          ></Card>

          <Card
            title="Testing & QA"
            skills={[
              "Playwright",
              "Cypress",
              "Jest",
              "Postman",
              "JMeter",
              "OWASP ZAP",
            ]}
          ></Card>
          <Card
            title="Other Skills"
            skills={[
              "Problem Solving",
              "Debugging",
              "Agile / Scrum",
              "API Design",
              "Performance Optimization",
              "Code Review",
            ]}
          ></Card>
        </div>
      </div>
    </>
  );
}
