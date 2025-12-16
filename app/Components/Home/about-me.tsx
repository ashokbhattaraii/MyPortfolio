export default function AboutMe() {
  return (
    <>
      <div
        // 🛑 MAIN CONTAINER FIXES:
        // 1. px-4: Adds padding on the sides for mobile margins (left/right).
        // 2. mx-auto max-w-6xl: Centers the content and limits its max width on large screens.
        // 3. gap-6: Adds spacing between the image and text on mobile.
        // 4. md:pt-20: Increases padding on desktop for spacing.
        // 5. md:items-start: Aligns content items to the start (left) on desktop for better readability.
        className="flex flex-col justify-center items-center pt-10 px-4 mx-auto max-w-6xl gap-6 md:gap-10 md:pt-20 md:flex-row md:items-start"
        id="about-me"
      >
        <img
          src="./about-me.jpg"
          alt="about-me-model"
          // 🛑 RESPONSIVE IMAGE FIXES:
          // 1. w-full max-w-xs: Scales the image responsive, up to a small max-width on mobile.
          // 2. h-auto aspect-square: Maintains aspect ratio without fixed height, preventing distortion.
          // 3. md:max-w-sm: Increases size slightly on desktop.
          className="w-full max-w-xs h-auto aspect-square object-cover rounded-lg shadow-2xl shadow-gray-800 md:max-w-sm"
        />

        {/* Text Content Wrapper */}
        <div className="md:max-w-xl">
          <p
            // 🛑 RESPONSIVE HEADING ALIGNMENT:
            // Centered on mobile (`text-center`), left-aligned on desktop (`md:text-left`).
            className="mb-4 text-center md:text-left text-xl font-bold md:text-3xl lg:text-4xl"
          >
            Build. Learn. Iterate. Enduring Digital Experiences.
          </p>
          <p
            // 🛑 RESPONSIVE PARAGRAPH ALIGNMENT AND SIZE:
            // Centered on mobile; increased text size slightly for readability.
            className="text-gray-700 text-sm text-center md:text-left md:text-base"
          >
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
