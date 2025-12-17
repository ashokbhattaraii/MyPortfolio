import Card from "../Card/card";

export default function Expertise() {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center pt-10 mx-auto my-5  "
        id="expertise-section"
      >
        <h2 className="text-black font-bold text-2xl">Expertise</h2>
        <p className="text-3xl font-extrabold mt-3 mb-6 md:text-4xl lg:text-5xl text-white">
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
