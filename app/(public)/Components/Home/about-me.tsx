export default function AboutMe() {
  return (
    <>
      <section
        className="relative py-16 md:py-24 px-4 md:px-6 mx-auto max-w-7xl"
        id="about-me"
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B2A2A] mb-3">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5A7ACD] to-[#4a6bb8] mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col justify-center items-center gap-8 md:gap-12 lg:gap-16 md:flex-row md:items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#5A7ACD] to-[#4a6bb8] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative">
              <img
                src="./about-me.jpg"
                alt="about-me-model"
                className="w-full max-w-sm h-auto aspect-square object-cover 
                           rounded-2xl shadow-2xl border-4 border-white
                           transition-transform duration-300 group-hover:scale-105
                           md:max-w-sm"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-600 rounded-full opacity-80 blur-2xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-600/60 rounded-full opacity-60 blur-xl -z-10"></div>
            </div>
          </div>

          <div className="w-full md:max-w-2xl lg:max-w-xl px-2 sm:px-4 md:px-0 flex-1">
            <div className="mb-4 sm:mb-6">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center md:text-left leading-tight mb-3 sm:mb-4">
                <span className="text-[#2B2A2A]">Build. </span>
                <span className="text-blue-600">Learn. </span>
                <span className="text-[#2B2A2A]">Iterate.</span>
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-center md:text-left text-blue-600">
                Creating Enduring Digital Experiences
              </p>
            </div>

            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-[#5A7ACD] to-transparent mb-4 sm:mb-6 md:mb-8 mx-auto md:mx-0"></div>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-[#2B2A2A] text-xs sm:text-sm md:text-base leading-relaxed text-center md:text-left">
                I'm{" "}
                <span className="font-semibold text-blue-600">
                  Ashok Bhattarai
                </span>
                , a passionate Computer Science student pursuing B.Sc IT (Hons)
                at Lord Buddha Education Foundation in collaboration with Asia
                Pacific University. Based in{" "}
                <span className="font-medium">Lalitpur, Nepal</span>, I
                specialize in web development with expertise in HTML, CSS,
                JavaScript, and MySQL.
              </p>

              <p className="text-[#2B2A2A] text-xs sm:text-sm md:text-base leading-relaxed text-center md:text-left">
                I hold certifications in{" "}
                <span className="font-medium">Responsive Web Design</span> and{" "}
                <span className="font-medium">
                  JavaScript Algorithms and Data Structures
                </span>
                , and I'm currently working as a QA Intern at{" "}
                <span className="font-semibold text-blue-600">Rumsan</span>,
                where I'm gaining hands-on experience in quality assurance and
                blockchain technology.
              </p>

              <p className="text-[#2B2A2A] text-xs sm:text-sm md:text-base leading-relaxed text-center md:text-left">
                I'm driven by a passion for creating responsive, user-friendly
                applications and ensuring software quality. My approach combines
                technical skills with attention to detail and a commitment to
                continuous learning. Whether it's building clean interfaces or
                identifying edge cases in testing, I strive to deliver work that
                meets the highest standards.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#5A7ACD]/10 to-[#5A7ACD]/5 border-l-4 border-[#5A7ACD]">
              <p className="text-[#2B2A2A] text-xs sm:text-sm md:text-base font-medium italic text-center md:text-left">
                "Always excited to take on new challenges and contribute to
                meaningful projects that make a positive impact."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
