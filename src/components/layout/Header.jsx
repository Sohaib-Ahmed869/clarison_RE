import React from 'react'
import magnifier from "../../assets/header/magnifier.svg"
import notification from "../../assets/header/notification.png"
import profilePhoto from "../../assets/header/profile-photo.png"
import { ChevronDown } from 'lucide-react'

const Header = () => {
  return (
    <div className=' w-full flex justify-evenly items-center pt-2'>
      <div className="w-3/6 ">
        <h2 className='text-2xl font-semibold text-[#151D48]'>Dashboard</h2>
      </div>

      <div className=" w-full  ">
        {/* search */}
        <div className="bg-white border rounded-lg  border-gray-200 flex items-center w-full  relative">
          <img src={magnifier} alt="" className='absolute w-6 h-6 ml-2' />
          <input
            type="text"
            placeholder='Search here...'
            className='w-full p-2 pl-10 outline-none'
          />
        </div>
      </div>

      <div className="p-2 w-3/5 flex items-center gap-2">
        {/* notification */}
        <div className="">
          <img src={notification} alt="notification" className='w-9 h-9 ml-2' />
        </div>
        {/* pofile  */}
        <div className="flex items-center gap-2">
          <div className="">
            <img src={profilePhoto} alt="profile-photo" />
          </div>
          <div className="">
            <div className="flex justify-between items-center">
              <h2 className='text-[#151D48]'>Andry Smith</h2>
              <ChevronDown size={20} />
            </div>
            <p className='text-[#737791] font-light'>Real Esatate Broker</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
