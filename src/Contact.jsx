import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Contact() {
  const [state, handleSubmit] = useForm("xleqajer");
  if (state.succeeded) {
    return (
      <>
        <div class="flex w-full h-full items-center justify-center flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p>Thanks for a message!</p>
          <Link to="/">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Home page
            </button>
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div class="px-5 grid gap-8 grid-cols-1 md:grid-cols-2 py-24 mx-auto bg-gray-100 text-gray-900 rounded-lg">
        <div class="flex flex-col justify-center">
          <div>
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight">
              Lets talk about everything!
            </h2>
            <div class="text-gray-700 mt-8">
              Hate forms? Send us an{" "}
              <a class="underline" href="mailto:someone@gmail.com">
                email
              </a>{" "}
              instead.
            </div>
          </div>
          <div class="mt-12 text-center">
            <img src="https://dummyimage.com/500x300" alt="Contact" />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xleqajer"
          method="POST"
        >
          <div class="mt-8">
            <span
              htmlFor="email"
              class="uppercase text-sm text-gray-600 font-bold"
            >
              Email
            </span>
            <input
              id="email"
              class="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">
              Message
            </span>
            <textarea
              id="message"
              name="message"
              class="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your Message"
              required
            ></textarea>
          </div>
          <div class="mt-8">
            <button
              class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-indigo-700"
              type="submit"
              disabled={state.submitting}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
