import React from "react";

function Home() {
  return (
    <>
      <section class="container mx-auto flex flex-col items-center px-8 py-36 sm:flex-row-reverse sm:px-12">
        <div class="mb-8 w-full sm:mb-0 sm:w-1/2 sm:pl-4 md:pl-16">
          <img
            alt="Hanging out with friends"
            class="rounded-lg sm:rounded-br-[80px] sm:rounded-tl-[120px]"
            src="/5.jpeg"
          />
        </div>
        <div class="mr-4 w-full text-center sm:w-1/2 sm:text-left">
          <h1 class="mb-6 text-3xl font-bold leading-tight dark:text-slate-50 md:text-4xl">
            Sending Money Abroad: How Does It Work?
          </h1>

          <p class="mb-2 leading-relaxed text-slate-700 dark:text-slate-400">
            We empowering Connections: Sending Money to Loved Ones Hassle-Free
          </p>
          <ul class="mb-8 flex flex-col items-center space-y-1 dark:text-slate-400 sm:items-start">
            <li class="flex items-end">
              <svg
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
                class="mr-2 text-orange-300"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m5 12l5 5L20 7"
                ></path>
              </svg>
              <span>Send money abroad</span>
            </li>
            <li class="flex items-end">
              <svg
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
                class="mr-2 text-orange-300"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m5 12l5 5L20 7"
                ></path>
              </svg>
              <span>Swift Money Transfers</span>
            </li>
            <li class="flex items-end">
              <svg
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
                class="mr-2 text-orange-300"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m5 12l5 5L20 7"
                ></path>
              </svg>
              <span>Payment cards</span>
            </li>
          </ul>
          <div class="flex flex-col space-y-3 md:flex-row md:space-x-2 md:space-y-0">
            <button class="rounded-lg border-0 bg-slate-900 px-6 py-3 text-base text-white shadow-lg shadow-slate-300 transition hover:bg-orange-300 hover:text-slate-900 hover:shadow-orange-300 dark:bg-orange-300 dark:text-black dark:shadow-sm dark:shadow-orange-300 dark:hover:bg-orange-400 sm:py-2">
              Open menu
            </button>
            <button class="rounded-lg border-0 bg-white px-6 py-3 text-base text-slate-900 shadow-lg shadow-slate-100 transition hover:bg-orange-300 hover:text-slate-900 hover:shadow-orange-300 dark:bg-slate-700 dark:text-slate-300 dark:shadow-sm dark:shadow-slate-800 dark:hover:bg-slate-600 sm:py-2">
              Explore services
            </button>
            <div></div>
          </div>
        </div>
      </section>

      <section class="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="62.63443"
          height="48.83955"
          viewBox="0 0 62.63443 48.83955"
          creator="Katerina Limpitsouni"
        >
          <path
            d="M44.98697,17.27072c3.02152-4.51246,6.04304-9.02491,9.06455-13.53737h-4.31735c2.40533,3.96877,4.81066,7.93755,7.216,11.90632,.34353,.56682,.68706,1.13365,1.03059,1.70047,.69922,1.15371,2.24206,1.58614,3.42047,.89688,1.15413-.67506,1.59935-2.2614,.89688-3.42047-2.40533-3.96877-4.81066-7.93755-7.216-11.90632-.34353-.56682-.68706-1.13365-1.03059-1.70047-1.01399-1.67307-3.27826-1.55182-4.31735,0-3.02152,4.51246-6.04304,9.02491-9.06455,13.53737-.75151,1.12234-.21797,2.7684,.89688,3.42047,1.22766,.71806,2.66719,.22811,3.42047-.89688h0Z"
            fill="#01010C"
            origin="undraw"
          />
          <path
            d="M2.5,48.54032c9.98476-1.10812,19.23175-7.01358,24.027-15.93333,2.57961-4.79839,4.1285-11.12074,1.05639-16.08048-2.76184-4.45884-8.78327-6.86452-13.37808-3.572-4.65048,3.33241-5.40732,9.23623-4.16926,14.46374,.63378,2.67602,1.65266,5.29118,2.6765,7.83978,.92629,2.30578,1.9356,4.61149,3.35298,6.66419,2.95718,4.2827,7.44023,7.17352,12.79181,6.89937,5.40109-.27669,10.27355-3.15896,13.66494-7.28503,3.97582-4.83709,6.41813-10.83763,8.35242-16.73667,2.1236-6.47637,3.3803-13.21153,3.88983-20.00421,.10112-1.34804-1.2214-2.5-2.5-2.5-1.43699,0-2.39859,1.14808-2.5,2.5-.72105,9.61263-3.11196,19.4488-7.5363,28.05291-1.94694,3.78626-4.50102,7.445-8.33595,9.50003-3.33345,1.78631-7.49538,2.16839-10.71346-.0623-3.04595-2.11138-4.69295-5.8781-5.98461-9.22046-1.50713-3.89995-3.7081-8.6514-2.34844-12.87282,1.02202-3.17312,4.20143-5.00393,7.04753-2.69742,3.32838,2.69736,2.63287,7.49083,1.10972,10.98162-3.53242,8.09567-11.73046,14.08948-20.50302,15.06307-1.3418,.14892-2.5,1.04242-2.5,2.5,0,1.23594,1.14939,2.64989,2.5,2.5h0Z"
            fill="#01010C"
          />
        </svg>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium pl-4">
                  Easy and affordable
                </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium pl-4">Happy customers</span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium pl-4">
                  Send money to 160 countries
                </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium pl-4">40 currencies</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
