"use client";
import Button from "@/app/Resualble_Components/Button";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  MoveUpRight,
  Hand,
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
        : "opacity-0 translate-y-10 scale-95"
    }`;
  };

  return (
    <>
      <section className="min-h-screen bg-black flex items-center justify-center mx-auto w-full relative ">
        <div className=" w-full  md:mx-auto   text-white flex flex-col items-center justify-center absolute top-0  max-w-7xl md:max-w-5xl">
          <div
            id="infoContainer"
            className=" flex flex-col m-5 gap-4 leading-snug"
          >
            <p id="tag" className="text-5xl font-extrabold m-3  w-2/5 z-2">
              CODING WITH <span className="text-purple-600">PASSION</span>,
              CREATING WITH{" "}
              <span className="bg-linear-to-r from-fuchsia-300 to-cyan-400 bg-clip-text text-transparent">
                PURPOSE
              </span>
            </p>
            <p id="detail" className="m-4 w-1/2 z-100">
              I believe mastery is a journey, not a destination, staying
              fiercely committed to growth. This approach guarantees thoughtful
              execution and highly reliable code on every platform.
            </p>
            <div
              id="buttonContainer"
              className="flex gap-4 ml-5 cursor-pointer items-center"
            >
              <div id="letsTalk" className="">
                <Button className="bg-lime-500 flex gap-2 py-3 font-bold hover:bg-lime-400 hover:-translate-y-1 transition-transform ease-out duration-200 ">
                  <Hand width={20} height={20} color="white"></Hand>Let's Talk
                </Button>
              </div>
              <div id="cv" className="flex justify-center items-center   ">
                <Button className="flex items-center  gap-2 font-bold py-2 z-3 hover:-translate-y-1 transition-transform ease-out duration-200">
                  {" "}
                  <ArrowRight className="rounded-full bg-lime-500 w-8 h-8 hover:bg-lime-400 hover:rotate-45 transition-transform ease-out duration-200"></ArrowRight>
                  View CV
                </Button>
              </div>
            </div>
          </div>
          <div
            id="photoContainer"
            className=" flex justify-end absolute top-5 right-0"
          >
            <div className="bg-purple-600 h-120 max-w-60 w-full absolute z-1 top-10 right-20 rotate-10 rounded-2xl shadow-2xl shadow-purple-300 "></div>
            <img
              src="./profile.png"
              alt="Profile Picture"
              className="object-cover mr-10 drop-shadow-2xl z-2 "
            />
          </div>
        </div>
      </section>
    </>
  );
}
