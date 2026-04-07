import React from "react";
import Image from "next/image";
import { totalBlogs } from "../../utils/data/blogs";
import Link from "next/link";
import { BlogCardVariants } from "./ui/BlogCardVariants";

const Blogs = () => {
  return (
    <div
      className="flex flex-col items-center py-12 bg-slate-50 dark:bg-[#080808]"
      id="blog"
    >
      <div className="flex flex-col items-center pb-4 border-b-2 border-slate-300 dark:border-slate-700 mb-8 w-full px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-[#040c2c] dark:text-slate-300 animate__animated animate__fadeInDown animate__faster">
          Blogs
        </h2>
        <p className="text-sm sm:text-lg font-sans text-slate-500 dark:text-slate-400 mt-1 animate__animated animate__fadeIn" style={{ animationDelay: "0.2s" }}>
          My thoughts on various topics
        </p>
      </div>

      <div className="h-full w-full">
        <div className="container mx-auto lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 h-full pb-16">
            {totalBlogs.map((blog) => (
                <div key={blog.id} className="mx-3 lg:pl-20">
                  <div className={BlogCardVariants({ variant: blog.variant })}>
                    <div className="px-3 w-full">
                      <Image
                        src={blog.photo}
                        alt={blog.name}
                        width={500}
                        height={500}
                        className="object-cover rounded-xl opacity-80 hover:opacity-100 transition ease-out duration-300"
                      />
                    </div>
                    <div className="px-6 mt-6 w-full">
                      <h1 className="text-sm lg:text-base font-bold font-sans text-slate-800 dark:text-slate-100 group-hover:text-purple-800 dark:group-hover:text-purple-300 transition ease-out duration-300 leading-snug">
                        {blog.name}
                      </h1>
                      <p className="mt-2 text-xs font-sans leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3">
                        {blog.details}
                      </p>
                    </div>
                    <Link
                      className="mt-5 w-1/2 text-center text-sm font-medium font-sans bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 text-white py-2 px-4 rounded-md transition-colors"
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>

      <Link
        className="text-sm font-medium font-sans bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 text-white py-2.5 px-6 rounded-md transition-colors"
        href="https://sahedthought.hashnode.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        More on Hashnode
      </Link>
    </div>
  );
};

export default Blogs;
