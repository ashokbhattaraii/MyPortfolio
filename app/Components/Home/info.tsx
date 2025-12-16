"use client";
import Button from "@/app/Resualble_Components/Button";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Info() {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setHasLoaded(true);
    }, 100);

    return () => clearTimeout(timeOut);
  }, []);

  const baseTransitionClass = "transition duration-300 ease-out";
  const getLoadedClass = (delay = "delay-0") => {
    const visibility = hasLoaded
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-5";
    return `${baseTransitionClass} transform ${delay} ${visibility}`;
  };

  return (
    <>
      <div
        className={`flex flex-col justify-center items-center pt-10 mx-auto w-full max-w-4xl`}
      >
        <img
          src="./1731638746008.jpeg"
          alt="profile pic"
          className={`w-48 h-48 md:w-60 md:h-60 rounded-full shadow-xl shadow-gray-700`}
        />
        <div>
          <p className="flex items-center justify-center text-2xl text-blue-700 mt-5 transition-transform ease-out duration-200 hover:scale-110 font-extrabold">
            <span className="text-5xl">A</span>shok{" "}
            <span className="text-5xl">B</span>hattarai
          </p>
        </div>
        <div className="flex flex-col justify-center items-center my-6 text-center">
          <p className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-none">
            Frontend Developer.{" "}
          </p>
          <p className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-none mt-2">
            Always Becoming.
          </p>
        </div>
        <div className="flex justify-center items-center my-3 max-w-2xl p-4 text-center">
          <p className="text-gray-500">
            I believe mastery is a journey, not a destination, staying fiercely
            committed to growth. This approach guarantees thoughtful execution
            and highly reliable code on every platform.
          </p>
        </div>
        <div className="flex gap-4 justify-center items-center mt-4 sm:gap-10">
          <Link href="/projects">
            <Button className="border-2 rounded-2xl p-2 bg-blue-700 text-black font-semibold transition duration-300 hover:bg-blue-800">
              View My Work
            </Button>
          </Link>
          <Link href="#contactArea">
            <Button className="border-2 border-blue-700 p-2 rounded-2xl font-semibold transition duration-300 hover:bg-gray-950">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
