"use client";

import { signIn } from "next-auth/react";
import Button from "../Resualble_Components/Button";

export default function SignIn() {
  return (
    <>
      <div className="text-white flex  flex-col gap-5 items-center justify-center">
        <h1>Login Page</h1>
        <Button
          variant="primary"
          onClick={() => {
            console.log("Login Btn clicked");
            signIn("github", { callbackUrl: "/admin" });
          }}
        >
          Login via Github
        </Button>
      </div>
    </>
  );
}
