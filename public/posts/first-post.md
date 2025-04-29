---
title: "Introduction"
titles: ["What is Next.js?","Main Features","How to Use These Docs","App Router vs Pages Router"]
descript: "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations."
date: "2025-04-04"
---
<style>
td:nth-child(odd){width:200px}
.h{
    font-size: 24px;
    font-weight: 900;
    margin: 20px 0;
}
hr{
  border-color: rgba(117, 116, 116,0.7);
     margin: 60px 0;
}
.p{
     margin-bottom: 25px;
}
.span{
    background-color: #3a3a3a;
    padding: 3px 6px;
    border-radius: 5px;
}
.a{
    color: rgb(104, 181, 251);
}
</style>
Welcome to the Next.js documentation!

<hr/>
<h1 class="h" id="What is Next.js?">
What is Next.js?
</h1>

<p class="p">
Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.
</p>
<p class="p">
Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.
</p>
<p class="p">
Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.
</p>

<hr/>

<h1 class="h" id="Main Features">
Main Features
</h1>

<p class="p">
Some of the main Next.js features include:
</p>

<hr/>

<h1 class="h" id="second">
How to Use These Docs
</h1>

<p class="p">
On the left side of the screen, you'll find the docs navbar. The pages of the docs are organized sequentially, from basic to advanced, so you can follow them step-by-step when building your application. However, you can read them in any order or skip to the pages that apply to your use case.
</p>

<p class="p">
On the right side of the screen, you'll see a table of contents that makes it easier to navigate between sections of a page. If you need to quickly find a page, you can use the search bar at the top, or the search shortcut (<span class="span">Ctrl+K</span> or <span class="span">Cmd+K</span>).
</p>

<p class="p">
To get started, check out the <a class="a">Installation</a> guide.
</p>

<hr/>

<h1 class="h" id="three">
App Router vs Pages Router
</h1>

<p class="p">
Next.js has two different routers: the App Router and the Pages Router. The App Router is a newer router that allows you to use React's latest features, such as Server Components and Streaming. The Pages Router is the original Next.js router, which allowed you to build server-rendered React applications and continues to be supported for older Next.js applications.
</p>