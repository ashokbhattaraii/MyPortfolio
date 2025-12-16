export default function AboutMe() {
  return (
    <>
      <div className="flex flex-col justify-center mx-auto pt-10" id="about-me">
        <div className="flex flex-col justify-center items-center pt-10  max-w-full  mx-auto gap-6 md:gap-10 md:pt-20 md:max-w-5xl md:flex-row md:mx-autos">
          <img
            src="./about-me.jpg"
            alt="about-me-model"
            className="h-100 max-w-60 rounded-lg shadow-2xl shadow-gray-800"
          />
          <div>
            <p className="mb-4 text-xl font-bold md:text-3xl lg:text-4xl">
              Build. Learn. Iterate. Enduring Digital Experiences.
            </p>
            <p className="text-gray-700 text-[0.7rem] ">
              I'm Ashok Bhattarai, a passionate Computer Science student
              pursuing B.Sc IT (Hons) at Lord Buddha Education Foundation in
              collaboration with Asia Pacific University. Based in Lalitpur,
              Nepal, I specialize in web development with expertise in HTML,
              CSS, JavaScript, and MySQL. I hold certifications in Responsive
              Web Design and JavaScript Algorithms and Data Structures, and I'm
              currently working as a QA Intern at Rumsan, where I'm gaining
              hands-on experience in quality assurance and blockchain
              technology. I'm driven by a passion for creating responsive,
              user-friendly applications and ensuring software quality. My
              approach combines technical skills with attention to detail and a
              commitment to continuous learning. Whether it's building clean
              interfaces or identifying edge cases in testing, I strive to
              deliver work that meets the highest standards. I'm always excited
              to take on new challenges and contribute to meaningful projects
              that make a positive impact.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
