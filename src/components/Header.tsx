"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdWbSunny } from "react-icons/md";
import { HiMoon } from "react-icons/hi2";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useThemeMode } from "@/context/ThemeMode";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, ThemeMode } = useThemeMode();
  return (
    <header className="text-center py-4 px-4 flex justify-between items-center">
      <span>
        <Link href={"/"}>
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={140}
            height={30}
            priority
          />
        </Link>
      </span>
      <nav>
        <ul className="flex items-center gap-10 text-[16px] font-bold ">
          <div className=" hidden md:flex items-center gap-10 dark:text-white">
            <li>
              <Link href={"/tags"}>Tags</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
          </div>
          <div className="pb-1 md:pb-0 dark:text-white">
            {theme ? (
              <MdWbSunny
                size={20}
                cursor={"pointer"}
                onClick={ThemeMode.toggleThemeMode}
              />
            ) : (
              <HiMoon
                size={20}
                cursor={"pointer"}
                onClick={ThemeMode.toggleThemeMode}
              />
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none cursor-pointer"
            >
              {!isOpen && <LuMenu />}
            </button>
          </div>
        </ul>
        {isOpen && (
          <div
            className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out delay-300
       ${
         isOpen
           ? "opacity-100 scale-100 visible"
           : "opacity-0 scale-90 invisible"
       }
       `}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-gray-800 transition cursor-pointer"
            >
              <IoMdClose size={24} />
            </button>
            <div className="flex flex-col gap-8 text-2xl text-gray-800 font-medium">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600"
              >
                Home
              </Link>
              <Link
                href="/tags"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600"
              >
                Tags
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600"
              >
                About
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
