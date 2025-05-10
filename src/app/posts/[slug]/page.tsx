// app/posts/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug } from "@/actions/getPost";
import { MdOutlineArrowRight, MdOutlineArrowDropDown } from "react-icons/md";
import Menu from "@/components/Menu";

// کامپوننت برای نمایش جزئیات پست
const Post = async ({ params }: { params: { slug: string } }) => {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>; // در صورت پیدا نشدن پست
  }

  return (
    <div>
      <Menu post={post} />
      <div className="mx-auto p-4 mt-10 grid grid-cols-9 relative">
        <div className="col-span-3 sticky h-[100vh] top-0 gap-4 font-bold text-[16px] text-gray-400 pt-2 hidden md:flex flex-col">
          {post.titles.map((item: string, index: number) => (
            <Link href={`#${item}`} key={index}>
              {item}
            </Link>
          ))}
        </div>
        <div className="col-span-9 md:col-span-6 dark:text-white">
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
