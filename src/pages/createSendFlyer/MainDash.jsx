import React from 'react'
import Banner1 from '../../components/createAndSendFlyer/Banner1';
import properties from "../../assets/createAndSendFlyer/properties-wanted.png"
import auction from "../../assets/createAndSendFlyer//auction.png"
import lease from "../../assets/createAndSendFlyer/lease.png"
import sale from "../../assets/createAndSendFlyer/sale.png"

const MainDash = () => {
  return (
    <div className="">
      <Banner1 />
      <div >
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">

          <div className="flex flex-col items-center justify-center  bg-[#ffffff] border-2 border-[#F8F9FA] p-12 pt-6 ">
            <h1 className="text-xl font-semibold mt-4">For Sale</h1>
            <img src={sale} alt="properties" className="w-32 h-32 mt-5" />
          </div>
          <div className="flex flex-col items-center justify-center  bg-[#ffffff] border-2 border-[#F8F9FA] p-12 pt-6 ">
            <h1 className="text-xl font-semibold mt-4">For Lease</h1>
            <img src={lease} alt="properties" className="w-32 h-32 mt-5" />
          </div>
          <div className="flex flex-col items-center justify-center  bg-[#ffffff] border-2 border-[#F8F9FA] p-12 pt-6 ">
            <h1 className="text-xl font-semibold mt-4">Auction</h1>
            <img src={auction} alt="properties" className="w-32 h-32 mt-5" />
          </div>
          <div className="flex flex-col items-center justify-center  bg-[#ffffff] border-2 border-[#F8F9FA] p-12 pt-6 ">
            <h1 className="text-xl font-semibold mt-4">Properties Wanted</h1>
            <img src={properties} alt="properties" className="w-32 h-32 mt-5" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default MainDash



