"use client";
import Button from "@/app/Resualble_Components/Button";
import { signOut } from "next-auth/react";

export default function AdminDashboard() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-black">
        <h1>This is admin dashboard</h1>
        <Button
          variant="danger"
          onClick={() => {
            signOut({ callbackUrl: "/" });
          }}
        >
          Log Out
        </Button>
        <h1>This is admin</h1>
      </div>
    </>
  );
}
