"use client";
import React, { useState } from "react";
import { MdOutlineArrowRight, MdOutlineArrowDropDown } from "react-icons/md";
import Link from "next/link";

type Blog ={
    title: string; titles: string[]; date: Date; descript: string; content: string;
}

const Menu = ({ post }: { post: Blog }) => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="px-4 md:hidden dark:text-white">
      <h1
        onClick={() => setMenu(!menu)}
        className="border-b border-gray-500 py-4 flex justify-between items-center cursor-pointer font-bold"
      >
        Menu
        <span className="text-xl">
          {menu ? <MdOutlineArrowDropDown /> : <MdOutlineArrowRight />}
        </span>
      </h1>
      <div
        className={`${
          menu ? "pt-6" : "h-0 opacity-0"
        } gap-4 font-bold text-sm text-gray-400  flex md:hidden flex-col`}
      >
        {post.titles.map((item: string, index: number) => (
          <Link href={`#${item}`} key={index}>
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
