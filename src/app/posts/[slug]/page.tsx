// app/posts/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug } from "@/actions/getPost";
import { MdOutlineArrowRight, MdOutlineArrowDropDown } from "react-icons/md";

// کامپوننت برای نمایش جزئیات پست
const Post = async ({ params }: { params: { slug: string } }) => {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>; // در صورت پیدا نشدن پست
  }

  return (
    <div>
      <div className="p-4 border-b border-gray-500 md:hidden">
        <h1>Menu</h1>
      </div>
      <div>
        <div className="relative">
          <button
            type="button"
            className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 cursor-pointer"
            aria-expanded="false"
          >
            <span>Solutions</span>
            <svg
              className="size-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fill-rule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

        
        </div>
      </div>
      <div className="mx-auto p-4 mt-10 grid grid-cols-9 relative">
        <div className="col-span-3 sticky h-[100vh] top-0 gap-2 font-bold text-[16px] text-gray-400 pt-4 hidden md:flex flex-col">
          {post.titles.map((item: string, index: number) => (
            <Link href={`#${item}`} key={index}>
              {item}
            </Link>
          ))}
        </div>
        <div className="col-span-9 md:col-span-6">
          <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
          <div className="prose mt-4">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
