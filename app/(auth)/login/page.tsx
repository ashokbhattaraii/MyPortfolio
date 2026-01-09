"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { handleLogin, loginWithGoogle } from "../Actions/AuthActions";
import { ok } from "assert";

const images = [
  "/auth/images/image1.jpg",
  "/auth/images/image2.jpg",
  "/auth/images/image3.jpg",
];

interface loginType {
  email: string;
  password: string;
}

export default function Login() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>({ mode: "onChange" });

  const validationRules = {
    email: {
      required: "Email is required",
      pattern: {
        value: /^\S+@\S+\.\S+$/,
        message: "Please enter a valid email",
      },
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Atleast 8 characters or symbols",
      },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const onValidSubmit = async (data: any) => {
    await handleLogin(data);
  };

  const ErrorMessage = ({ field }: { field: keyof loginType }) => {
    if (!errors[field]) return null;
    return <span className="text-red-600">{errors[field]?.message}</span>;
  };

  return (
    <main className="text-slate-200 flex w-full font-serif min-h-screen">
      <div className="hidden md:flex w-[50%] bg-[#0F2854] min-h-screen items-center flex-col">
        <div className="mr-auto ml-4 mt-4">
          <h1 className="text-2xl font-extrabold tracking-wider">Portfolio</h1>
        </div>

        <div className="my-auto flex flex-col justify-center items-center w-full px-4">
          <p className="text-white text-2xl font-bold py-4">
            Welcome back, sign in to continue
          </p>

          <div className="w-full flex justify-center items-center overflow-hidden shadow-2xl shadow-slate-800">
            <Image
              src={images[currentIndex]}
              width={500}
              height={500}
              alt=""
              className="rounded"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center px-3">
        <h1 className="text-3xl text-white font-extrabold tracking-wider mb-6">
          Login
        </h1>

        <form
          onSubmit={handleSubmit(onValidSubmit)}
          className="w-full max-w-xl flex flex-col gap-4"
        >
          <label className="flex flex-col text-slate-200">
            Email
            <input
              type="email"
              placeholder="you@example.com"
              className="border outline-0 rounded px-4 py-2 bg-slate-600/40 border-slate-950 focus:border-slate-700 text-[18px]"
              {...register("email", validationRules.email)}
            />
            <ErrorMessage field="email" />
          </label>

          <label className="flex flex-col text-slate-200">
            Password
            <input
              type="password"
              placeholder="********"
              className="border outline-0 rounded px-4 py-2 bg-slate-600/40 border-slate-950 focus:border-slate-700 text-[18px]"
              {...register("password", validationRules.password)}
            />
            <ErrorMessage field="password" />
          </label>

          <div className="max-w-60 w-full my-6 flex flex-col items-center gap-4 mx-auto">
            <button
              type="submit"
              className="w-full bg-slate-900 py-2 text-xl font-bold tracking-wider rounded shadow shadow-slate-700 hover:text-lime-500 hover:-translate-y-1 transition"
            >
              Login
            </button>

            <span
              className="cursor-pointer"
              onClick={() => router.push("/register")}
            >
              Don't have an account,{" "}
              <span className="text-blue-600">Register</span>
            </span>

            <span>OR</span>
          </div>
        </form>

        <div
          className="max-w-xl w-full flex flex-col gap-4"
          onClick={loginWithGoogle}
        >
          <div className="flex gap-2 bg-white w-full justify-center items-center py-3 rounded cursor-pointer">
            <Image
              src="/auth/images/google-color.svg"
              width={20}
              height={20}
              alt="google"
            />
            <span className="text-black text-[16px] font-bold">
              Continue with Google
            </span>
          </div>

          <div className="flex gap-2 bg-slate-500 w-full justify-center items-center py-3 rounded cursor-pointer hover:-translate-y-1 transition">
            <Image
              src="/auth/images/github.svg"
              width={20}
              height={20}
              alt="github"
            />
            <span className="text-white text-[16px] font-bold">
              Continue with Github
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
