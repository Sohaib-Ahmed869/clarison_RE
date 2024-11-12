import React from 'react';
import { Send, MousePointer, Mail, Layout } from 'lucide-react';

const TopEBlastCard = ({ number, name, popularity, opens }) => (
  <div className="flex items-center py-4 border-b border-gray-100">
    <div className="w-12 text-gray-400">
      {number.toString().padStart(2, '0')}
    </div>
    <div className="flex-1">
      <p className="text-gray-700 font-medium">{name}</p>
    </div>
    <div className="flex-1 px-4">
      <div className="flex items-center gap-2">
        <div className="flex-1 bg-gray-100 rounded-full h-2">
          <div 
            className="bg-blue-500 h-full rounded-full" 
            style={{ width: `${popularity}%` }}
          />
        </div>
      </div>
    </div>
    <div className="w-16">
      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
        {opens}
      </span>
    </div>
  </div>
);

const TopEBlasts = () => {
  const eblasts = [
    { id: 1, name: "Texas Decor Store", popularity: 90, opens: 70 },
    { id: 2, name: "Houston Venue Comm.", popularity: 75, opens: 65 },
    { id: 3, name: "Jack and Spa Com.", popularity: 60, opens: 54 },
    { id: 4, name: "Chicago Grills Comm.", popularity: 45, opens: 36 }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Top eBlasts</h2>
      
      <div className="text-sm mb-2">
        <div className="flex items-center text-gray-400">
          <div className="w-12">#</div>
          <div className="flex-1">Name</div>
          <div className="flex-1 px-4">Popularity</div>
          <div className="w-16">No. of Opens</div>
        </div>
      </div>

      <div>
        {eblasts.map((eblast) => (
          <TopEBlastCard
            key={eblast.id}
            number={eblast.id}
            name={eblast.name}
            popularity={eblast.popularity}
            opens={eblast.opens}
          />
        ))}
      </div>
    </div>
  );
};

export default TopEBlasts;