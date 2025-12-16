import Card from "../Card/card";

export default function Expertise() {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center pt-10 mx-auto min-w-screen "
        id="expertise-section"
      >
        <h2 className="text-blue-700 font-bold">Expertise</h2>
        <p className="text-3xl font-extrabold mt-3 mb-6 md:text-4xl lg:text-5xl">
          Skills and Technologies
        </p>
        <div
          id="CardContainer"
          className="flex flex-col lg:flex-row items-stretch justify-center gap-6 px-4"
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
