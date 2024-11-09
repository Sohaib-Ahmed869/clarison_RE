import React from 'react'
import { NavLink } from 'react-router-dom'

const MyCurrentPlan = () => {
  return (
    
    <div className="rounded  p-4 sm:p-10 my-6 sm:m-10 bg-white shadow-[#EEEEEE] shadow-2xl flex flex-col items-center gap-10">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center w-full font-semibold text-secondary">
        My Current Plan
      </h1>
      <p className=" text-center w-full lg:w-4/6 text-base lg:text-xl font-light">
        Flat rate, no hidden fees, no membership fees, no commitment or
        contract. Simply select the package that suits your needs. And remember,
        it’s always free to receive tailored listing eblasts. Sign up to receive
        eblasts [here]
      </p>
      <div class="flex w-full">
        <div class="bg-secondary text-white rounded-2xl py-10 sm:py-20 px-7 sm:px-16 shadow-lg">
          <h2 class="text-2xl sm:text-4xl font-semibold mb-2 ">Basic</h2>
          <p class="text-base w-full sm:w-4/6 mb-6 font-light   text-gray-300">
            Send up to 3,000 E-mails Per Month with our Segmented E-mail Lists
          </p>

          <p class="text-2xl sm:text-4xl font-semibold mb-4 ">$60/Month</p>

          <NavLink to="/user/account-setting/pricing-structure">
          <button class="bg-white text-primary w-full font-semibold rounded-full py-2 px-8 hover:bg-blue-100 mb-6 transition-all duration-300">
            Upgrade Now
          </button>
         </NavLink>
          <div>
            <p class="text-base sm:text-lg font-normal mb-4">
              Basic Plan includes:
            </p>
            <ul class="space-y-2 text-sm text-gray-300 ">
              <li class="flex items-center">
                <svg
                  class="w-4 h-4 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Access to email marketing templates
              </li>
              <li class="flex items-center">
                <svg
                  class="w-4 h-4 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Ability to send 3,000 emails per month
              </li>
              <li class="flex items-center">
                <svg
                  class="w-4 h-4 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Analytics (open rates, click-through rates)
              </li>
              <li class="flex items-center">
                <svg
                  class="w-4 h-4 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Access to property marketing templates (flyers, brochures)
              </li>
              <li class="flex items-center">
                <svg
                  class="w-4 h-4 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Access to our segmented email lists
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCurrentPlan
