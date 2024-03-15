import React from "react";
import { motion } from "framer-motion"
function About() {
  return (
    <>
      <section class="container mx-auto flex flex-col items-center px-12 py-28 sm:flex-row">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
          alt="Security"
          class="mb-10 h-24 w-full pr-16 pl-16 dark:contrast-200 dark:invert sm:mb-0 sm:h-fit sm:w-1/2 sm:pr-24 sm:pl-0"
          src="6.svg"
        />
        <div class="mr-4 w-full text-center sm:w-1/2 sm:text-left">
          <h2 class="mb-4 text-3xl font-bold leading-tight dark:text-slate-50 md:text-4xl">
            Trusted and secured
          </h2>
          <p class="leading-relaxed text-slate-700 dark:text-slate-400">
            Each transaction is guarded by advanced and certified security
            system.
          </p>
        </div>
      </section>
      <section class="container mx-auto flex flex-col items-center px-12 py-28 sm:flex-row-reverse">
        <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
                    alt="Security"
          class="mb-10 h-24 w-full pr-16 pl-16 dark:contrast-200 dark:invert sm:mb-0 sm:h-fit sm:w-1/2 sm:pl-24 sm:pr-0"
          src="7.svg"
        />
        <div class="mr-4 w-full text-center sm:w-1/2 sm:text-left">
          <h2 class="mb-4 text-3xl font-bold leading-tight dark:text-slate-50 md:text-4xl">
            Multi layer security
          </h2>
          <p class="leading-relaxed text-slate-700 dark:text-slate-400">
            Support fingerprint and face recognition for any transaction. More
            options coming soon.
          </p>
        </div>
      </section>
      <section class="container mx-auto flex flex-col items-center px-12 py-28 sm:flex-row">
        <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
                    alt="Security"
          class="mb-10 h-24 w-full pr-16 pl-16 dark:contrast-200 dark:invert sm:mb-0 sm:h-fit sm:w-1/2 sm:pr-24 sm:pl-0"
          src="8.svg"
        />
        <div class="mr-4 w-full text-center sm:w-1/2 sm:text-left">
          <h2 class="mb-4 text-3xl font-bold leading-tight dark:text-slate-50 md:text-4xl">
            Meaningful insight
          </h2>
          <p class="leading-relaxed text-slate-700 dark:text-slate-400">
            Visualize transactions with multiple chart option to get insight as
            you need.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
