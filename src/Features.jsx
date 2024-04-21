import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Countries from "./countries";
function Features() {
  return (
    <>
      <Navbar />
      <section className="h-screen">
      <section className="flex flex-col justify-center items-center my-10 ">
        <div className="flex flex-col items-center justify-center">
          <h1>We are still working on this page</h1>
          <img
            src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
            alt=""
          />
        </div>
      </section>
      <Countries />

</section>
      <Footer />
    </>
  );
}

export default Features;
