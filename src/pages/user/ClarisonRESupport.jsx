import React from "react";

import EmailIcon from "../../assets/clarisonRE Support/email.png";
import PhoneIcon from "../../assets/clarisonRE Support/phone.png";
import LocationIcon from "../../assets/clarisonRE Support/location.png";
import FacebookIcon from "../../assets/clarisonRE Support/facebook.png";
import TwitterIcon from "../../assets/clarisonRE Support/twitter.png";
import LinkedinIcon from "../../assets/clarisonRE Support/linkedin.png";

const ClarisonRESupport = () => {
  return (
    <div className="rounded m-5 lg:m-0 lg:p-10">
      <div className="bg-white shadow-[#EEEEEE] shadow-lg rounded-3xl h-full w-full flex flex-col md:flex-row justify-center  md:justify-between gap-10 p-10 relative z-30">
        {/* form  */}
        <div className="w-ful md:w-3/5 xl:w-3/4 px-5">
          <form action="" className=" flex flex-col gap-10  ">
            {/* full name  */}
            <div>
              <label className="flex flex-col gap-4 text-base md:text-lg ">
                <span className="font-medium">Full Name</span>

                <input
                  className="outline-none p-4 bg-light border border-gray-100   rounded-lg"
                  type="text"
                  placeholder="Enter your Full Name "
                  required
                  autoComplete="off"
                />
              </label>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-8">
              {/* email  */}
              <div className="w-full md:w-1/2">
                <label className="flex flex-col gap-4 text-base md:text-lg ">
                  <span className="font-medium">Email</span>

                  <input
                    className="outline-none p-4 bg-light border border-gray-100   rounded-lg"
                    type="email"
                    placeholder="Enter your Email Address "
                    required
                    autoComplete="off"
                  />
                </label>
              </div>
              {/* phone  */}
              <div className="w-full md:w-1/2">
                <label className="flex flex-col gap-4 text-base md:text-lg ">
                  <span className="font-medium">Phone</span>

                  <input
                    className="outline-none p-4 bg-light border border-gray-100   rounded-lg"
                    type="text"
                    placeholder="Enter your Phone Number "
                    required
                    autoComplete="off"
                  />
                </label>
              </div>
            </div>
            {/* subject  */}
            <div className="">
              <label className="flex flex-col gap-4 text-base md:text-lg ">
                <span className="font-medium">Subject</span>

                <input
                  className="outline-none p-4 bg-light border border-gray-100   rounded-lg"
                  type="text"
                  placeholder="Enter your Subject "
                  required
                  autoComplete="off"
                />
              </label>
            </div>
            {/* message  */}
            <div className="">
              <label className="flex flex-col gap-4 text-base md:text-lg ">
                <span className="font-medium">Message</span>

                <input
                  className="outline-none p-4 bg-light border border-gray-100   rounded-lg"
                  type="text"
                  placeholder="Enter your Phone Message "
                  required
                  autoComplete="off"
                />
              </label>
            </div>
            {/* submit button  */}
            <button
              type="submit"
              className="bg-primary mx-auto hover:bg-opacity-80 w-32 lg:w-1/5 md:font-semibold  text-white h-14 text-base rounded-lg flex gap-2 items-center justify-center mt-5"
            >
              Submit
            </button>
          </form>
        </div>

        {/* social icons */}
        <div className="w-full lg:w-2/5 xl:w-1/4 mt-5 md:mt-11 flex flex-col gap-5 ">
          <div className="bg-light border text-center flex flex-col items-center border-gray-100   rounded-lg p-9">
            <div className="bg-[#F7F7F8] border  flex items-center justify-center mb-3 w-11 h-11 rounded-lg ">
              <img src={EmailIcon} className="" alt="email icon" />
            </div>
            <h1> Course creator</h1>
            <h1> hub@gmail.com</h1>
          </div>
          <div className="bg-light border text-center flex flex-col items-center border-gray-100   rounded-lg p-9">
            <div className="bg-[#F7F7F8] border  flex items-center justify-center mb-3 w-11 h-11 rounded-lg ">
              <img src={PhoneIcon} className="" alt="phone icon" />
            </div>
            <h1>+212522675423</h1>
          </div>
          <div className="bg-light border text-center flex flex-col items-center border-gray-100   rounded-lg p-9">
            <div className="bg-[#F7F7F8] border  flex items-center justify-center mb-3 w-11 h-11 rounded-lg ">
              <img src={LocationIcon} className="" alt="location icon" />
            </div>
            <h1>Somewhere in Morocco</h1>
          </div>
          <div className="bg-light border text-center flex flex-col items-center border-gray-100   rounded-lg p-9">
            <span className="flex gap-6 items-center">
              <div className="bg-[#F7F7F8] border  flex items-center justify-center mb-3 w-11 h-11 rounded-lg ">
                <img src={FacebookIcon} alt="facebook icon" />
              </div>
              <div className="bg-[#F7F7F8] border  flex items-center justify-center mb-3 w-11 h-11 rounded-lg ">
                <img src={TwitterIcon} alt="twitter icon" />
              </div>
              <div className="bg-[#F7F7F8] border  flex items-center justify-center mb-3 w-11 h-11 rounded-lg ">
                <img src={LinkedinIcon} alt="linkedin icon" />
              </div>
            </span>

            <h1>Social Profile</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClarisonRESupport;
