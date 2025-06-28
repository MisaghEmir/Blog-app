"use server"
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

// این تابع برای خواندن یک پست خاص باید در سمت سرور اجرا شود
export async function getPostBySlug(slug: string) {
  const postsDirectory = path.join(process.cwd(), "public/posts");
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      title: data.title,
      titles: data.titles,
      date: data.date,
      descript: data.descript,
      content: content,
    } ;
  } catch (err) {
    console.log(err)
    notFound(); // اگر پست پیدا نشد، صفحه‌ی 404 را نشان می‌دهد
  }
}