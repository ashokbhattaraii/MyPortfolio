"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { callbackify } from "util";

const images = [
  "/auth/images/image1.jpg",
  "/auth/images/image2.jpg",
  "/auth/images/image3.jpg",
];

export default function SignIn() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex]);
  return (
    <>
      <main className="text-slate-950 flex w-full font-serif">
        <div className="w-[50%] bg-lime-400/70 min-h-screen flex  items-center flex-col">
          <h1 className="text-2xl font-extrabold tracking-wider pt-4">
            Portfolio
          </h1>
          <div
            id="slider"
            className="my-auto flex flex-col justify-center items-center w-full px-4"
          >
            <div
              id="tag"
              className=" flex flex-col w-full justify-center items-center"
            >
              <p className="text-slate-950 text-2xl font-bold py-4">
                Just a few step away to explore the best
              </p>
            </div>
            <div
              id="images"
              className="w-full flex flex-col justify-center items-center overflow-hidden shadow-2xl shadow-slate-800 "
            >
              <Image
                src={images[currentIndex]}
                width={500}
                height={500}
                alt=""
                className="rounded transition-transform ease-out overflow-hidden "
              ></Image>
            </div>
          </div>
        </div>
        <div
          id="registerForm"
          className="text-white flex items-center w-full flex-col px-3"
        >
          <h1 className="text-3xl text-white font-extrabold tracking-wider my-4">
            Register
          </h1>
          <div id="input" className="w-full max-w-2xl">
            <div className="flex gap-2 my-4 w-full ">
              <label
                htmlFor="fname"
                className="flex flex-col text-slate-200 w-full"
              >
                First Name
                <input
                  type="text"
                  id="fname"
                  placeholder="John"
                  className=" border outline-0 rounded px-4 py-2 bg-slate-600/40 border-slate-950 focus:border-slate-700 text-[18px] text-slate-200 w-full"
                />
              </label>

              <label
                htmlFor="lname"
                className="flex flex-col text-slate-200 w-full"
              >
                Last Name
                <input
                  type="text"
                  id="lname"
                  placeholder="Cena"
                  className="  border outline-0 rounded px-4 py-2 bg-slate-600/40 border-slate-950 focus:border-slate-700 text-[18px] text-slate-200 w-full"
                />
              </label>
            </div>
            <div className="flex gap-2 my-4">
              <label
                htmlFor="phone"
                className="flex flex-col text-slate-200 w-full"
              >
                Phone Number
                <input
                  type="text"
                  id="phone"
                  placeholder="9700000000"
                  className=" border outline-0 rounded px-4 py-2 bg-slate-600/40 border-slate-950 focus:border-slate-700 text-[18px] text-slate-200"
                />
              </label>

              <label
                htmlFor="email"
                className="flex flex-col text-slate-200 w-full"
              >
                Email
                <input
                  type="email"
                  id="lname"
                  placeholder="@gmail.com"
                  className="  border outline-0 rounded px-4 py-2 bg-slate-600/40 border-slate-950 focus:border-slate-700 text-[18px] text-slate-200"
                />
              </label>
            </div>
            <div className="flex gap-2 my-4">
              <label
                htmlFor="password"
                className="flex flex-col text-slate-200 w-full"
              >
                Password
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                  className=" border outline-0 rounded px-4 py-2 bg-slate-600/40 border-slate-950 focus:border-slate-700 text-[18px] text-slate-200"
                />
              </label>

              <label
                htmlFor="cpassword"
                className="flex flex-col text-slate-200 w-full"
              >
                Confirm Passwrod
                <input
                  type="password"
                  id="cpassword"
                  placeholder="*********"
                  className="  border outline-0 rounded px-4 py-2 bg-slate-600/40 border-slate-950 focus:border-slate-700 text-[18px] text-slate-200"
                />
              </label>
            </div>
            <div id="privacy" className="flex gap-4">
              <input type="checkbox" />
              <p>
                Yes, I agree the{" "}
                <a href="" className="text-blue-800">
                  Terms and Conditions
                </a>{" "}
              </p>
            </div>
          </div>
          <div className="max-w-60 w-full my-4 flex flex-col  items-center gap-4 ">
            <button className="  w-full flex justify-center bg-slate-900 py-2 text-xl font-bold tracking-wider rounded shadow shadow-slate-700 hover:text-lime-500 hover:-translate-y-1  transition-transform ease-out duration-200">
              <span>Register</span>
            </button>
            <h1>OR</h1>
          </div>
          <div id="directRegister" className="max-w-xl w-full">
            <div
              id="google"
              className="flex gap-2 bg-white max-w-xl w-full justify-center items-center py-3 rounded"
            >
              <Image
                src="/auth/images/google-color.svg"
                width={20}
                height={20}
                alt="google-icon"
              ></Image>
              <span className="text-black text-[16px] font-bold">
                Continue with google
              </span>
            </div>
          </div>
          <div
            id="github"
            className="flex gap-2 bg-slate-500 max-w-xl w-full justify-center items-center py-3 rounded mt-4 hover:-translate-y-1 trasnition-transform ease-out duration-300"
            onClick={() => signIn("github", { callbackUrl: "/admin" })}
          >
            <Image
              src="/auth/images/github.svg"
              width={20}
              height={20}
              alt="google-icon"
            ></Image>
            <span className="text-white text-[16px] font-bold">
              Continue with Github
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
