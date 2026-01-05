"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <>
      <div className="overflow-hidden flex justify-center items-center min-h-120">
        <div className="text-white flex  flex-col gap-5 items-center min-h-screenjustify-center bg-slate-800/40 p-4 rounded-2xl">
          <h1 className="animate-pulse py-4 text-white text-2xl font-bold">
            Login Here
          </h1>
          <button
            className=" px-4 bg-lime-400/40 py-2 rounded-2xl text-xl font-bold hover:-translate-y-2 transition-transform ease-out duration-200 shadow-3xl shadow-slate-300"
            onClick={() => {
              console.log("Login Btn clicked");
              signIn("github", { callbackUrl: "/admin" });
            }}
          >
            Login via Github
          </button>
        </div>
      </div>
    </>
  );
}
