import React from 'react'
import { Send, MousePointer, Mail, Layout, Upload } from 'lucide-react';
import TopEBlasts from '../../components/dashboard/Topeblasts';
import RecentActivity from '../../components/dashboard/RecentActivity';
import VisitorsBlock from '../../components/dashboard/ClicksBlock';
import ClicksBlock from '../../components/dashboard/ClicksBlock';
import ClickOpenRate from '../../components/dashboard/ClickOpenRate';




const Dashboard = () => {


  return (
    <div className='bg-[#fafbfc]'>
      <div className="grid grid-cols-7 gap-2">


        {/* Summary Section  */}
        <div className="bg-white p-6 col-span-4 rounded-lg" >
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-gray-900">Summary</h2>
                <p className="text-gray-600">Sales Summary</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                  <Upload size={15}/> Export
                </button>
                <button className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50">
                  Sort
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </div>

        </div>


        <div className='col-span-3 bg-white'>
          <ClicksBlock/>
        </div>

      </div>

      <div className="grid grid-cols-7 bg-white">

        <div className='col-span-3 bg-white'>
          <TopEBlasts />
        </div>
        <div className='col-span-4  bg-white'>
          <ClickOpenRate/>
        </div>

      </div>

      {/* Recent Activity  */}
      <div className=''>
        <RecentActivity/>
      </div>

    </div>
  )
}

export default Dashboard




const StatCard = ({ icon: Icon, value, title, subtitle, bgColor, iconBgColor }) => (
  <div className={`${bgColor} p-6 rounded-lg space-y-3`}>
    <div className={`${iconBgColor} w-10 h-10 rounded-full flex items-center justify-center`}>
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div className="space-y-1">
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
      <p className="text-gray-700 font-medium">{title}</p>
      <p className="text-blue-600 text-sm">{subtitle}</p>
    </div>
  </div>
);

const stats = [
  {
    icon: Layout,
    value: "10",
    title: "Total Campaigns",
    subtitle: "(last 30 days)",
    bgColor: "bg-red-50",
    iconBgColor: "bg-red-400"
  },
  {
    icon: Send,
    value: "10",
    title: "Campaigns Sent",
    subtitle: "(last 30 days)",
    bgColor: "bg-orange-50",
    iconBgColor: "bg-orange-400"
  },
  {
    icon: MousePointer,
    value: "985",
    title: "Total Clicks",
    subtitle: "(last 30 days)",
    bgColor: "bg-green-50",
    iconBgColor: "bg-green-400"
  },
  {
    icon: Mail,
    value: "732",
    title: "Total Opens",
    subtitle: "(last 30 days)",
    bgColor: "bg-purple-50",
    iconBgColor: "bg-purple-400"
  }
];