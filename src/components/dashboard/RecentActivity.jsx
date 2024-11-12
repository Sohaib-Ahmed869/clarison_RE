import React from 'react';
import { Send, MousePointer, Mail, Layout } from 'lucide-react';
import TopEBlasts from '../../components/dashboard/Topeblasts';
import recentActivityPersonProfile from "../../assets/dashboard/recent-activity-img.png";

const ActivityCard = ({ date, time, name, messages, isLast }) => (
  <div className="flex gap-4 mb-6 relative">
    {/* Timeline dot and line */}
    <div className="relative">
      <div className="w-10 h-10 rounded-full overflow-hidden relative z-10 bg-white">
        <img 
          src={recentActivityPersonProfile} 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>
      {/* Conditionally render timeline line */}
      {!isLast && (
        <div className="absolute top-10 bottom-0 left-1/2 w-[1px] bg-gray-700 -translate-x-1/2" />
      )}
    </div>

    {/* Content */}
    <div className="flex-1">
      {/* Date pill */}
      <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm mb-2">
        {date}
      </div>

      {/* Activity content */}
      <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <span className="text-sm text-gray-500">{time}</span>
        </div>
        {messages.map((message, idx) => (
          <p key={idx} className="text-gray-600 text-sm">
            {message}
          </p>
        ))}
      </div>
    </div>
  </div>
);

const RecentActivity = () => {
  const activities = [
    {
      date: "16/05/24",
      time: "05:35 PM",
      name: "Andry Smith",
      messages: ["A new campaign (regular) called 'number 1' has been created successfully!"]
    },
    {
      date: "16/05/24",
      time: "05:35 PM",
      name: "Andry Smith",
      messages: [
        "A new campaign (regular) called 'number 1' has been created successfully!",
        "A new campaign (regular) called 'number 1' has been created successfully!"
      ]
    },
    {
      date: "16/05/24",
      time: "05:35 PM",
      name: "Andry Smith",
      messages: ["A new campaign (regular) called 'number 1' has been created successfully!"]
    },
    {
      date: "16/05/24",
      time: "05:35 PM",
      name: "Andry Smith",
      messages: [
        "A new campaign (regular) called 'number 1' has been created successfully!",
        "A new campaign (regular) called 'number 1' has been created successfully!"
      ]
    }
  ];

  return (
    <div className="bg-[#fafbfc] p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Recent activity</h2>
      <div className="max-w-6xl">
        {activities.map((activity, index) => (
          <ActivityCard
            key={index}
            date={activity.date}
            time={activity.time}
            name={activity.name}
            messages={activity.messages}
            isLast={index === activities.length - 1} // Pass isLast prop
          />
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
