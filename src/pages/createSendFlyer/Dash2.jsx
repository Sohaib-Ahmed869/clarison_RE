import React from 'react'
import Banner1 from '../../components/createAndSendFlyer/Banner1';
import singleProperty from '../../assets/createAndSendFlyer/single-property.png';
import multipleProperty from '../../assets/createAndSendFlyer/multiple-property.png';
import upload from "../../assets/createAndSendFlyer/upload.png";
import ownHtml from '../../assets/createAndSendFlyer/own-html.png';
import ownDesign from '../../assets/createAndSendFlyer/own-design.png';
import { NavLink } from 'react-router-dom';

const Dash2 = () => {
  return (
    <div className="">
      <Banner1 />
      <div >
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">

        <NavLink to="/single-property">
          <div className="flex flex-col items-center justify-start  bg-[#ffffff] border-2 border-[#F8F9FA] p-12 pt-6 ">
            <h1 className="text-xl font-semibold mt-4">Single Property</h1>
            <p className='text-sm text-[#7B91B0] mt-1 text-center'>Commercial propery listing</p>
            <img src={singleProperty} alt="properties" className="w-32 h-32 mt-5" />
          </div>
          </NavLink>
          
          <NavLink to="/multiple-property">
          <div className="flex flex-col items-center justify-start bg-[#ffffff] border-2 border-[#F8F9FA] p-12 pt-6 ">
            <h1 className="text-xl font-semibold mt-4 ">Multiple Property</h1>
            <p className='text-sm text-[#7B91B0] mt-1 text-center'>Multiple Commercial <br /> propery listing</p>
            <img src={multipleProperty} alt="properties" className="w-32 h-32 mt-5" />
          </div>
          </NavLink>

          <NavLink to="/upload-flyer">
          <div className="flex flex-col items-center justify-start bg-[#ffffff] border-2 border-[#F8F9FA] p-12 pt-6 ">
            <h1 className="text-xl font-semibold mt-4 ">Upload your own flyer</h1>
            <p className='text-sm text-[#7B91B0] mt-1 text-center'>Single property, multi property, or <br />non-property</p>
            <img src={upload} alt="properties" className="w-32 h-32 mt-5" />
          </div>
          </NavLink>

          <NavLink to="/own-html">
          <div className="flex flex-col items-center justify-start bg-[#ffffff] border-2 border-[#F8F9FA] p-12 pt-6 ">
            <h1 className="text-xl font-semibold mt-4 ">Use your own HTML</h1>
            <p className='text-sm text-[#7B91B0] mt-1 text-center'>Paste your own HTML</p>
            <img src={ownHtml} alt="properties" className="w-32 h-32 mt-5" />
          </div>
          </NavLink>

          
          <div className="flex flex-col items-center justify-start  bg-[#ffffff] border-2 border-[#F8F9FA] p-12 pt-6 ">
            <h1 className="text-xl font-semibold mt-4 ">Design your own flyer</h1>
            <p className='text-sm text-[#7B91B0] mt-1 text-center'>Design your own flyer</p>
            <img src={ownDesign} alt="properties" className="w-32 h-32 mt-5" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dash2



