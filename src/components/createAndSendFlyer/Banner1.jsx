import React from 'react'
import logo from "../../assets/sidebar/sidebar-logo.png";
import bannerImage from "../../assets/createAndSendFlyer/banner-img1.png";
import { NavLink } from 'react-router-dom';

const Banner1 = () => {
    return (
        <div className="p-2 m-2">
            <div className="bg-[#F2F5FA] rounded-lg relative">

                <NavLink to="/own-html">
                <div className="flex flex-wrap gap-4 absolute md:top-4 md:right-4 top-[50%] right-4">
                    <button className="bg-[#176A6E] rounded-3xl text-white px-4 py-2  transition-colors text-sm">
                        Upload HTML Code
                    </button>
                </div>
                </NavLink>

                <div className="grid md:grid-cols-2 gap-8 px-3 py-2 items-center">
                    {/* Left Column - Logo and Text */}
                    <div className="space-y-3">
                        <img src={logo} alt="" className='w-1/2'/>
                        <p className="text-gray-700 text-lg">
                            Create and send targeted property marketing eblasts to our vetted distribution lists.
                        </p>
                    </div>

                    {/* Right Column - Banner Image */}
                    <div className="flex items-center gap-4 justify-end">
                        <img
                            src={bannerImage}
                            alt="Property Marketing Banner"
                            className="w-[80%] mt-5 h-auto object-contain "
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner1
