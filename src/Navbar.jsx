import React from "react";
import { Link } from "react-router-dom";
function Navbar() {


  function stopShowArticle() {
    const articles = document.getElementsByClassName("article");
    for (let article of articles) {
      article.classList.remove("h-article");
    }
  } 
  return (

    <>
      <nav class="bg-gradient-to-tr from-white via-transparent to-blue-100 shadow dark:bg-gray-800">
        <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <Link
          className={({ isActive }) =>{ 
            return isActive? "text-blue-700" : ""}}
            to="/"
            class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
         
          >
            home
          </Link>

          <Link 
            to="/features"
            class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            features
          </Link>
          <Link
          onClick={stopShowArticle}
            to="/blog"
            class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            blog
          </Link>

          <Link
            to="/contact"
            class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            contact
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
