import React from "react";
import { TbMailFilled } from "react-icons/tb";
import { FaFacebook,FaYoutube,FaGithub ,FaInstagram   } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaBluesky } from "react-icons/fa6";
import { SiX } from "react-icons/si";



function Footer() {
  return (
    <footer className="pb-4 flex flex-col justify-center items-center text-[14px] text-gray-400 font-bold mt-16">
      <div className="flex items-center justify-center gap-5 text-[23px]">
        <span>
            <TbMailFilled />
        </span>
        <span className="text-[24px]">
            <FaFacebook />
        </span>
        <span className="text-[25px]">
            <FaYoutube />
        </span>
        <span className="text-[26px]">
            <ImLinkedin />
        </span>
        <span className="text-[26px]">
            <FaGithub  />
        </span>
        <span className="text-[25px]">
            <FaBluesky />
        </span>
        <span className="text-[24px]">
            <SiX />
        </span>
        <span>
            <FaInstagram  />
        </span>
      </div>
      <div className="mt-3">
        <p className="text-center mt-2">Tails Azimuth • © 2025 • Next.js Starter Blog</p>
        <p className="text-center mt-1">Tailwind Nextjs Theme</p>
      </div>
    </footer>
  );
}

export default Footer;
