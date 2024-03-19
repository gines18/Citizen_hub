import React from "react";
import Navbar from "./Navbar";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
function Blog() {

function showArticle() {
  const articles = document.getElementsByClassName("article");
  for (let article of articles) {
    article.classList.add("h-article");
  }
}


  const blogs = [
    {
      id: 1,
      title:
        "Why Every Company Needs a Website: Unlocking the Gateway to Digital Success",
      body: "In today's digital age, having a website isn't just a luxury, it's a necessity for any company striving to thrive in the competitive business landscape. ",
      category: "Digital presence",
      Date: "17 March 2024",
    },
    {
      id: 2,
      title: "The Impact of Social Media on Modern Society",
      body: "Social media has revolutionized the way we communicate, connect, and share information. From influencing consumer behavior to shaping political discourse, social media plays a significant role in modern society.",
      category: "Social Media",
      Date: "17 March 2024",
    },
    {
      id: 3,
      title:
        "Why Hiring a Professional Web Designer is Essential for Your Business",
      body: "Hiring a professional web designer is essential for your business because they possess the expertise and experience needed to create a website that not only looks visually appealing but also functions seamlessly and effectively.",
      category: "Web Design",
      Date: "17 March 2024",
    },
  ];

  return (
    <>
      <Navbar />

      <div class="article mt-10 mx-10 ">
        {blogs.map((blog) => (
          <section class="text-gray-600 body-font  ">
            <div class="container px-5 py-5 sm:w-full md:w-4/5 lg:w-4/5 ml-auto me-auto  ">
              <div class="-my-8 divide-y-2 divide-gray-100">
                <div class="py-8 flex flex-wrap md:flex-nowrap">
                  <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span class="font-semibold title-font text-gray-700">
                      {blog.category}
                    </span>
                    <span class="mt-1 text-gray-500 text-sm">{blog.Date}</span>
                  </div>
                  <div key={blog.id} class="md:flex-grow">
                    <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                      {blog.title}
                    </h2>
                    <p class="leading-relaxed">{blog.body}</p>
                    <Link
                    onClick={showArticle}
                      to={`/blog/${blog.id}`}
                      className="text-indigo-500 inline-flex items-center mt-4"
                    >
                      Read More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Blog;
