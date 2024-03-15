import React from 'react'

function Navbar() {

  return (
<nav class="bg-gray-200 shadow dark:bg-gray-900 w-screen">
  <div class="container mx-auto px-6 py-4 md:flex md:items-center md:justify-between">
    <div class="flex items-center justify-between">
      <div>
        <a class="flex">
          <img class="h-8 w-8 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/tocinocode.appspot.com/o/global%2Flogo%20tocinocode.png?alt=media&token=45649449-37c5-4d26-91d0-4cb72359a439" alt=""/>
          <span class="ml-1 text-2xl font-medium text-rose-400">TocinoCode</span>
        </a>
      </div>
   
      <div class="flex md:hidden">
        <button id="menu-toggle" type="button" class="text-gray-500 hover:text-red-400 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400" aria-label="toggle menu">
          <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current"><path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path></svg>
        </button>
      </div>
    </div>
    
    <div id="menu-items" class="hidden items-center md:flex flex-col md:mx-6 md:flex-row">
      <a class="my-1 text-sm font-medium text-gray-700 hover:text-red-400 dark:text-gray-200 dark:hover:text-rose-400 md:mx-4 md:my-0">Home</a>
      <a class="my-1 text-sm font-medium text-gray-700 hover:text-red-400 dark:text-gray-200 dark:hover:text-rose-400 md:mx-4 md:my-0">Components</a>
      <a class="my-1 text-sm font-medium text-gray-700 hover:text-red-400 dark:text-gray-200 dark:hover:text-rose-400 md:mx-4 md:my-0">Contact</a>
      <a class="my-1 text-sm font-medium text-gray-700 hover:text-red-400 dark:text-gray-200 dark:hover:text-rose-400 md:mx-4 md:my-0">About</a>
    </div>
  </div>
</nav>

  )
}

export default Navbar