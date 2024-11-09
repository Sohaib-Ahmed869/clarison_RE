import React from 'react'
const cardData = [
    {
      id: 1,
      title: "Basic",
      description: "Send up to 3,000 E-mails Per Month. ",
      price: "$60",
      buttonText: "Subscribed",
      buttonColor: "white",
      buttonTextColor: "black",
      planHeading: "Basic Plan Includes:",
      plans: [
        "Access to email marketing templates",
        "Ability to send 3,000 emails",
        "Analytics (open rates, click-through rates)",
        "Access to property marketing templates (flyers, brochures)",
        "Segmented email lists",
      ],
    },
    {
      id: 2,
      title: "Pro",
      description: "Send up to 10,000 E-mails Per Month. ",
      price: "$100",
      buttonText: "Upgrade",
      buttonColor: "primary",
      buttonTextColor: "white",
      planHeading: "Pro Plan includes:",
      plans: ["All Basic Plan features", "Ability to send 10k emails per month"],
    },
    {
      id: 3,
      title: "Pro-Plus",
      description: "Send up to 25,000 E-mails Per Month ",
      price: "$130",
      buttonText: "Upgrade",
      buttonColor: "primary",
      buttonTextColor: "white",
      planHeading: "Pro-Plus Plan includes:",
      plans: [
        "All Basic Plan features",
        "Ability to send 25k emails per month",
        "API integration with platforms like LoopNet/CoStar to import listings ",
      ],
    },
    {
      id: 4,
      title: "Pro-Per-Use",
      description: "One-Time Campaigns ",
      price: "$100",
      buttonText: "Upgrade",
      buttonColor: "primary",
      buttonTextColor: "white",
      planHeading: "Pay-Per-Use includes:",
      plans: ["Ability to send 1,000 E-mails to recipients"],
    },
    {
      id: 5,
      title: "Free Trial",
      description: "14 Day Trial",
      price: "$0",
      buttonText: "Start a 14-day-Trail",
      buttonColor: "primary",
      buttonTextColor: "white",
      planHeading: "Plan Includes:",
      plans: ["500 recipient credit during trial period"],
    },
  ];
const PricingStructure = () => {
  return (
    <div className="rounded p-4 sm:p-10 my-6 sm:m-10 bg-white shadow-[#EEEEEE]  shadow-2xl flex flex-col items-center gap-10">
    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center w-full font-semibold text-secondary">
      Pricing Structure
    </h1>
    <p className="text-center w-full lg:w-4/6 text-base lg:text-xl font-light">
      Flat rate, no hidden fees, no membership fees, no commitment or
      contract. Simply select the package that suits your needs. And remember,
      it’s always free to receive tailored listing eblasts. Sign up to receive
      eblasts [here]
    </p>
    <div className="flex w-full justify-center flex-wrap gap-x-[1px] gap-y-5">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="group hover:bg-secondary bg-[#f2f5fa] hover:text-white text-black w-72  min-h-[38rem] rounded-2xl py-10 sm:py-10 px-7 sm:px-7 transition-all hover:z-20 z-0 duration-500 transform hover:scale-105"
        >
          <h2 className="text-2xl sm:text-4xl font-semibold mb-2 w-full">
            {card.title}
          </h2>
          <p className="text-base w-full h-16 mb-6 font-light">
            {card.description}
          </p>
          <p className="text-2xl sm:text-4xl font-semibold mb-4">
            {card.price}
          </p>
          <button
            className={`bg-${card.buttonColor} text-${card.buttonTextColor} w-full group-hover:text-primary font-semibold rounded-full py-2 px-8 group-hover:bg-white mb-6 transition-all duration-300`}
          >
            {card.buttonText}
          </button>
          <div>
            <p className="text-base sm:text-lg font-semibold mb-4">
              {card.planHeading}
            </p>
            <ul className="space-y-2 text-sm">
              {card.plans.map((plan, index) => (
                <li key={index} className="flex items-start gap-1">
                  <svg
                    className="w-4 h-4 group-hover:text-white text-primary transition-colors duration-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="w-full">{plan}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default PricingStructure
