"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function navigation() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();

  function toogleMenu() {
    setMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <header className="fixed z-1000 top-0 left-0 right-0 flex justify-center items-center w-full h-20  @apply bg-linear-to-r from-gray-600 to-slate-900 p-3 shadow shadow-gray-800">
        <p className="mr-auto ml-3 text-lime-500 text-3xl font-bold transition-transform ease-out duration-200 hover:scale-105 ">
          <Link href="./">Portfolio</Link>
        </p>
        <nav className={`mr-auto hidden md:block lg:block `}>
          <ul className="flex  list-none text-white gap-x-10 text-lg ">
            <li className="">
              <a
                href="/"
                className="hover:text-lime-500 transition-colors duration-200 "
              >
                Home
              </a>
            </li>
            <li className="">
              <Link
                href="/#about-me"
                className={`${
                  pathName === "/#about-me" ? "text-lime-400" : "text-white"
                } hover:text-lime-400`}
              >
                About
              </Link>
            </li>

            <li className="">
              <Link
                href="/projects"
                className={`${
                  pathName === "/projects" ? "text-lime-400" : "text-white"
                } hover:text-lime-400`}
              >
                Projects
              </Link>
            </li>
            <li className="hover:text-lime-500">
              <Link
                href="/blogs"
                className={`${
                  pathName === "/blogs" ? "text-lime-400" : "text-white"
                } hover:text-lime-400`}
              >
                Blogs
              </Link>
            </li>
            <li className="hover:text-lime-500">
              <Link
                href="/#contactArea"
                className={`${
                  pathName === "/contact" ? "text-lime-400" : "text-white"
                } hover:text-lime-400`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div onClick={toogleMenu} className="relative">
          <img
            width="35"
            height="35"
            src={`${
              isMenuOpen
                ? "https://img.icons8.com/ios/50/FFFFFF/delete-sign--v1.png"
                : "https://img.icons8.com/ios/50/FFFFFF/menu--v7.png"
            }`}
            alt="menu--v6"
            className="md:hidden mr-4"
          />

          <nav
            id="phone"
            className={`absolute right-5 mt-2  list-none bg-white opacity-90 px-5 w-50  shadow-2xl shadow-gray-500 rounded-2xl md:hidden lg:hidden  ${
              isMenuOpen ? "block" : "hidden"
            } `}
          >
            <ul className="p-6 flex flex-col justify-center items-center gap-6 font-bold  ">
              <li className="">
                <Link
                  href="/"
                  className="hover:text-lime-500  transition-colors duration-200 "
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link
                  href="/#about-me"
                  className="hover:text-lime-500 transition-colors duration-200 "
                >
                  About
                </Link>
              </li>

              <li className="hover:text-lime-500">
                <Link href="/projects">Projects</Link>
              </li>
              <li className="hover:text-lime-500">
                <Link href="/blogs">Blogs</Link>
              </li>
              <li className="hover:text-lime-500">
                <Link href="#contactArea">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
