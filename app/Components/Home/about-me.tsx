export default function AboutMe() {
  return (
    <>
      <div
        className="my-10 p-10 flex gap-4 flex-col justify-center items-center mx-auto min-w-screen md:max-w-2/3  md:flex-row"
        id="about-me"
      >
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
            I'm Ashok Bhattarai, a passionate Computer Science student pursuing
            B.Sc IT (Hons) at Lord Buddha Education Foundation in collaboration
            with Asia Pacific University. Based in Lalitpur, Nepal, I specialize
            in web development with expertise in HTML, CSS, JavaScript, and
            MySQL. I hold certifications in Responsive Web Design and JavaScript
            Algorithms and Data Structures, and I'm currently working as a QA
            Intern at Rumsan, where I'm gaining hands-on experience in quality
            assurance and blockchain technology. I'm driven by a passion for
            creating responsive, user-friendly applications and ensuring
            software quality. My approach combines technical skills with
            attention to detail and a commitment to continuous learning. Whether
            it's building clean interfaces or identifying edge cases in testing,
            I strive to deliver work that meets the highest standards. I'm
            always excited to take on new challenges and contribute to
            meaningful projects that make a positive impact.
          </p>
        </div>
      </div>
    </>
  );
}
