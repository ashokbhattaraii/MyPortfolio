"use client";

import { useEffect } from "react";

interface TostType {
  message: string;
  type: "success" | "error" | "info";
  onClose: () => void;
}

export default function ToastMessage({ message, type, onClose }: TostType) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);
  const bgType = {
    success: "bg-emerald-500",
    error: "bg-rose-500",
    info: "bg-blue-500",
  };

  return (
    <>
      <div
        className={`text-white  fixed flex justify-center items-center z-100 right-5 top-3 ${bgType[type]} rounded-xl  transition-transform ease-out duration-300 shadow shadow-slate-500`}
      >
        <div className="flex flex-col px-4">
          <p className=" py-3 text-[14px] font-bold">{message}</p>
        </div>
      </div>
    </>
  );
}
