"use client";
import Button from "../../Resualble_Components/Button";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  MoveUpRight,
  Hand,
  PhoneCall,
  File,
  Github,
  Linkedin,
  MousePointerClick,
} from "lucide-react";

export default function Info() {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setHasLoaded(true);
    }, 100);

    return () => clearTimeout(timeOut);
  }, []);

  const baseTransitionClass = "transition duration-700 ease-out";
  const animate = (delay = "delay-0") => {
    return `${baseTransitionClass} transform ${delay} ${
      hasLoaded
        ? "opacity-100 translate-y-0 scale-100"
        : "opacity-0 -translate-y-10 scale-95"
    }`;
  };

  const nameWords = ["ASHOK", "BHATTARAI"];

  return (
    <>
      <section className="md:min-h-screen min-h-[90vh] bg-black flex items-center justify-center mx-auto w-full relative">
        <div className=" w-full  md:mx-auto   text-white flex flex-col items-center justify-center absolute top-0  max-w-7xl md:max-w-5xl">
          <div
            id="infoContainer"
            className={`flex flex-col m-5 gap-4 leading-snug ${animate(
              "delay-200"
            )}`}
          >
            <p id="tag" className="text-5xl font-extrabold m-3  w-2/5 z-2">
              CODING WITH <span className="text-blue-600">PASSION</span>,
              CREATING WITH <span className="text-blue-600">PURPOSE</span>
            </p>
            <div id="name" className="m-4 w-1/2 z-10 relative">
              <div className="flex gap-3 items-center">
                {nameWords.map((word, index) => (
                  <span
                    key={index}
                    className={`inline-block text-6xl font-serif italic relative ${animate(
                      `delay-[${400 + index * 200}ms]`
                    )}`}
                    style={{
                      transitionDelay: hasLoaded
                        ? `${400 + index * 200}ms`
                        : "0ms",
                    }}
                  >
                    <span className="relative z-10">{word}</span>
                  </span>
                ))}
              </div>
              <p className="text-sm tracking-widest mt-2 ml-1 text-gray-300">
                Full Stack Developer
              </p>
            </div>
            <div
              id="buttonContainer"
              className="flex gap-4 ml-5 cursor-pointer items-center"
            >
              <div id="letsTalk" className="">
                <Link href="#contactArea">
                  <Button className="bg-blue-600 text-white flex gap-2 py-3 font-bold  hover:bg-blue-600/80 hover:-translate-y-1 transition-transform ease-out duration-200 ">
                    <PhoneCall
                      width={20}
                      height={20}
                      color="white"
                      className="hover:rotate-45"
                    ></PhoneCall>
                    Let's Talk
                  </Button>
                </Link>
              </div>
              <div id="cv" className="flex justify-center items-center   ">
                <Link href="./Ashok_Bhattarai_Resume.pdf" target="_blank">
                  <Button className="flex items-center  gap-2 font-bold py-2 z-3 hover:-translate-y-1 transition-transform ease-out duration-200">
                    {" "}
                    <File className="rounded-full  w-8 h-8  hover:rotate-45 transition-transform ease-out duration-200"></File>
                    View CV
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div
            id="photoContainer"
            className={` flex justify-end absolute top-5 right-0 ${animate(
              "delay-200"
            )}`}
          >
            <div className="hidden md:block bg-blue-600 h-120 max-w-60 w-full absolute  top-10 md:right-20 rotate-10 rounded-2xl shadow shadow-purple-300 "></div>
            <img
              src="./profile.png"
              alt="Profile Picture"
              className="object-cover ml-25 md:ml-0 md:m  drop-shadow-2xl "
            />
          </div>
        </div>
      </section>
    </>
  );
}
