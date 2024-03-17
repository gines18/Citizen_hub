

import Navbar from './Navbar';
import React from 'react';
import Footer from './Footer';

const Contact = () => {
    return (
<>
        <Navbar />
        <section className="text-gray-600 body-font relative flex flex-col justify-center ml-auto mr-auto w-5/6 mt-10">
      
     <div class="px-5 grid gap-8 grid-cols-1 md:grid-cols-2 py-24 mx-auto bg-gray-100 text-gray-900 rounded-lg">
         <div class="flex flex-col justify-center">
             <div>
                 <h2 class="text-4xl lg:text-5xl font-bold leading-tight">
                     Lets talk about everything!
                 </h2>
              
             </div>
             <div class="mt-12 text-center">
                 <img src="https://dummyimage.com/500x300" alt="Contact" />
             </div>
         </div>
         <form> 
             <div>
                 <span class="uppercase text-sm text-gray-600 font-bold">
                     Full Name
                 </span>
                 <input
                     class="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                     type="text"
                     placeholder="Enter your Name"
                     required
                 />
             </div>
             <div class="mt-8">
                 <span class="uppercase text-sm text-gray-600 font-bold">
                     Email
                 </span>
                 <input
                     class="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                     type="email"
                     placeholder="Enter your email address"
                     required
                 />
             </div>
             <div class="mt-8">
                 <span class="uppercase text-sm text-gray-600 font-bold">
                     Phone Number
                 </span>
                 <input
                     class="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                     type="phone"
                     placeholder="Enter your Phone Number including country code"
                     required
                 />
             </div>
             <div class="mt-8">
                 <span class="uppercase text-sm text-gray-600 font-bold">
                     Message
                 </span>
                 <textarea
                     class="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                     placeholder="Enter your Message"
                     required
                 ></textarea>
             </div>
             <div class="mt-8">
                 <button
                     class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-indigo-700"
                     type="submit"
                 >
                     Send Message
                 </button>
             </div>
         </form>
     </div>
      <Footer />
        </section>
         
    </>
    );
};

export default Contact;
