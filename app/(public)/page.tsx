import Expertise from "./Components/Home/expertise";
import Contact from "./Components/Home/contact";
import Info from "./Components/Home/info";
import AboutMe from "./Components/Home/about-me";

export default function Home() {
  return (
    <>
      <div className="flex justify-center  flex-col w-full max-w-8xl ">
        <Info />
        <AboutMe />
        <Expertise />
        <Contact />
      </div>
    </>
  );
}
