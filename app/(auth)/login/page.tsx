"use client";

// import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { callbackify } from "util";
import { registerUser } from "../Actions/AuthActions";
import { loginWithGoogle } from "../Actions/AuthActions";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const images = [
  "/auth/images/image1.jpg",
  "/auth/images/image2.jpg",
  "/auth/images/image3.jpg",
];
interface registerType {
  fname: string;
  lname: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export default function SignIn() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<registerType>({ mode: "onChange" });
  const validationRules = {
    fname: {
      required: "First name is required",
      minLength: {
        value: 3,
        message: "Atleast 3 characters",
      },
    },
    lname: {
      required: "Last name is required",
      minLength: {
        value: 3,
        message: "Atleast 3 characters",
      },
    },
    phone: {
      required: "Phone number is required",
      minLength: {
        value: 10,
        message: "Number must be 10 digits",
      },
    },

    email: {
      required: "Email is required",

      pattern: {
        value: /^\S+@\S+\.\S+$/,
        message: "Please enter a valid email",
      },
    },

    password: {
      message: "Password is required",

      minLength: {
        value: 8,
        message: "Atleast 8 characters or symbols",
      },
    },

    confirmPassword: {
      message: "Confirm Password is required",

      minLength: {
        value: 8,
        message: "Atleast 8 characters or symbols",
      },
      validate: (value: string) =>
        value === watch("password") || "Password do not match",
    },
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const ErrorMesage = ({ errors, field }: any) => {
    if (!errors?.[field]) return null;
    if (errors)
      return (
        <>
          <span className="text-red-600">{errors[field].message}</span>
        </>
      );
  };

  const router = useRouter();
  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      console.log(session);
      if (session) router.push("/admin");
    };
    checkSession();
  }, []);

  const onValidSubmit = async (data: registerType) => {
    const req = await registerUser(data);
    if (req) {
      console.log("User registed successfulle");
    } else {
      console.log("failed to create user");
    }
  };

  return (
    <>
      <main className="text-slate-200 flex w-full  font-serif min-h-screen">
        <div className="hidden md:flex w-[50%] bg-[#0F2854] min-h-screen   items-center flex-col">
          <div className="mr-auto ml-4 mt-4">
            <h1 className="text-2xl font-extrabold tracking-wider mr-auto ">
              Portfolio
            </h1>
          </div>
          <div
            id="slider"
            className="my-auto flex flex-col justify-center items-center w-full px-4"
          >
            <div
              id="tag"
              className=" flex flex-col w-full justify-center items-center"
            >
              <p className="text-white text-2xl font-bold py-4">
                Just a few step away to explore the best{" "}
                <span className="inline-flex items-baseline ">
                  <span className="animate-bounce [animation-delay:0s]">.</span>
                  <span className="animate-bounce [animation-delay:-0.15s]">
                    .
                  </span>
                  <span className="animate-bounce [animation-delay:-0.3s]">
                    .
                  </span>
                </span>
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
        <form
          className="w-full flex flex-col justify-center items-center"
          onSubmit={handleSubmit(onValidSubmit)}
        >
          <div
            id="registerForm"
            className="text-white flex items-center justify-center w-full flex-col px-3"
          >
            <h1 className="text-3xl text-white font-extrabold tracking-wider ">
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
                    className={`border outline-0 rounded px-4 py-2 bg-slate-600/40 border-slate-950 focus:border-slate-700 text-[18px] text-slate-200 w-full `}
                    {...register("fname", validationRules.fname)}
                  />
                  <ErrorMesage errors={errors} field="fname"></ErrorMesage>
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
                    {...register("lname", validationRules.lname)}
                  />
                  <ErrorMesage errors={errors} field="lname"></ErrorMesage>
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
                    className=" border outline-0 rounded px-4 py-2 bg-slate-600/40 border-slate-950 focus:border-slate-700 text-[18px] text-slate-200 w-full"
                    {...register("phone", validationRules.phone)}
                  />
                  <ErrorMesage errors={errors} field="phone"></ErrorMesage>
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
                    className="  border outline-0 rounded px-4 py-2 bg-slate-600/40 border-slate-950 focus:border-slate-700 text-[18px] text-slate-200 w-full"
                    {...register("email", validationRules.email)}
                  />
                  <ErrorMesage errors={errors} field="email"></ErrorMesage>
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
                    className=" border outline-0 rounded px-4 py-2 bg-slate-600/40 border-slate-950 focus:border-slate-700 text-[18px] text-slate-200 w-full"
                    {...register("password", validationRules.password)}
                  />
                  <ErrorMesage errors={errors} field="password"></ErrorMesage>
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
                    className="  border outline-0 rounded px-4 py-2 bg-slate-600/40 border-slate-950 focus:border-slate-700 text-[18px] text-slate-200 w-full"
                    {...register(
                      "confirmPassword",
                      validationRules.confirmPassword
                    )}
                  />
                  <ErrorMesage
                    errors={errors}
                    field="confirmPassword"
                  ></ErrorMesage>
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
              <button className="  w-full flex justify-center bg-slate-900 py-2 text-xl font-bold tracking-wider rounded shadow shadow-slate-700 hover:text-lime-500 hover:-translate-y-1  transition-transform ease-out duration-200 cursor-pointer">
                <span>Register</span>
              </button>
              <h1>OR</h1>
            </div>
            <div id="directRegister" className="max-w-xl w-full">
              <div
                id="google"
                onClick={async () => await loginWithGoogle()}
                className="flex gap-2 bg-white max-w-100 mx-auto w-full justify-center items-center py-3 rounded cursor-pointer"
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
              className="flex gap-2 bg-slate-500 max-w-100 mx-auto w-full justify-center items-center py-3 rounded mt-4 hover:-translate-y-1 trasnition-transform ease-out duration-300 cursor-pointer"
              // onClick={() => signIn("github", { callbackUrl: "/admin" })}
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
        </form>
      </main>
    </>
  );
}
