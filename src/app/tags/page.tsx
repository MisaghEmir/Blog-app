"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Tags() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <div className={`flex flex-col md:flex-row justify-center ${inter.className}`}>
      <div className="flex flex-col md:flex-row gap-10  justify-center items-center p-48 px-20 pt-28 h-full w-full">
        <div>
          <h1 className="text-6xl font-bold border-r p-10 py-1 dark:text-gray-200">Tags</h1>
        </div>
        <div className=" h-full w-full">
          <ul className=" flex gap-5 flex-wrap gap-y-0">
            {posts.map(
              (post: {
                slug: string;
                title: string;
                titles: string[];
                descript: string;
                date: string;
              }) => (
                <li key={post.slug} className="items-start ">
                  <Link
                    href={`/api/posts/${post.slug}`}
                    className="text-[14px] font-semibold text-blue-400 hover:text-blue-300 delay-100 transition-all"
                  >
                    {post.title} 
                    <span className="text-gray-200 text-md font-extrabold pl-1">
                         ({post.titles.length})
                    </span>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tags;
