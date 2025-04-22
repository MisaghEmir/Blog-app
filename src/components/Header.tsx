import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
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
      <ul className="flex items-center gap-12 text-[16px] font-bold">
        <li>
          <Link href={"/tags"}>Tags</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
