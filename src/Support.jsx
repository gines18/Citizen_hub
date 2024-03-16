import React from 'react'

function Support() {
  return (
    <section
    className="w-4/5 ml-auto mr-auto h-custom flex flex-col justify-center bg-cover bg-center rounded-lg"
    style={{ backgroundImage: "url('./12.png')", opacity: "5" }}
  >
    <div class="my-10 md:w-3/5 ml-7 sm:w-5/5 ls:w-3/5 xl:w-2/5">
      <div class="text-7xl text-white mb-4">Support</div>
      <div class="text-white">
        Assistance and guidance in navigating the process of transferring
        funds internationally
      </div>
    </div>

    <div class="flex flex-wrap gap-4 justify-around p-4 text-white w-full">
      <div class="h-card lex-shrink-0 w-1/4">
        <p>
        Quick, convenient, and cost-effective solutions for sending money internationally
        </p>
      </div>
      <div class="h-card lex-shrink-0  w-1/3">
        <p>Seamlessly connect with loved ones worldwide by utilizing our comprehensive remittance services</p>
      </div>
      <div class="h-card lex-shrink-0  w-1/4">
        <p>Safe & Swift Transfers: Trust our reliable system for swift and secure money transfers</p>
      </div>
    </div>
  </section>
  )
}

export default Support