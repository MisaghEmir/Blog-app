// app/api/posts/route.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function GET() {
  const postsDirectory = path.join(process.cwd(), 'public/posts')
  console.log("postsDirectory",postsDirectory)
  const fileNames = fs.readdirSync(postsDirectory)
  console.log("fileNames",fileNames)
  
  const allPosts = fileNames.map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      console.log("fileContents",fileContents)
    const { data } = matter(fileContents)

    return {
      title: data.title,
      titles: data.titles,
      date: data.date,
      descript: data.descript,
      slug: fileName.replace(/\.md$/, ''),
    }
  })

  return new Response(JSON.stringify(allPosts), {
    headers: { 'Content-Type': 'application/json' },
  })
}
