"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchPosts = async () => {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data);
      };
      fetchPosts();
    } catch (error) {
      console.log(error)
      throw Error();
    } finally {
      setLoading(false);
    }
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="py-4">
      <ul className="space-y-4">
        <li className=" pb-10 items-start pr-40 border-gray-500">
          <h1 className="text-6xl font-semibold dark:text-white">Latest</h1>
          <p className="text-gray-600 dark:text-gray-300 my-7">A blog created with Next.js</p>
        </li>
        {posts.map(
          (post: {
            slug: string;
            title: string;
            titles: string[];
            descript: string;
            date: string;
          },index) => (
            <li
              key={index}
              className={`py-10 flex gap-28 items-start pr-20 border-gray-500 ${index !== (posts.length - 1) && "border-b"}`}
            >
              <p className="text-sm text-gray-500 flex-9">{post.date}</p>
              <div className=" gap-2 flex-1 ">
                <Link
                  href={`/posts/${post.slug}`}
                  className="text-3xl font-semibold dark:text-white hover:underline"
                >
                  {post.title}
                </Link>
                <div className="flex gap-3 text-blue-500 mt-1">
                  {post.titles.map((item, index) => (
                    <Link
                      href={`/posts/${post.slug}#${item}`}
                      className="hover:text-blue-400 cursor-pointer"
                      key={index}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
                <p className="text-gray-500 dark:text-gray-300 my-7 ">{post.descript}...</p>
                <span className="text-blue-500 mt-20 font-bold hover:text-blue-400">
                  <Link href={`/posts/${post.slug}`}>Read more →</Link>
                </span>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  )
}
