import React from 'react';
import { useNavigate } from 'react-router-dom';
import { agents } from '../../../constants/agents';


const AgentCard = ({ agent, onClickAdd , onClickView }) => {
  return (
    <div className="flex items-center justify-between w-full p-6 mb-4 bg-white rounded-lg">
      <div className="flex items-center gap-4">
        <img 
          src={agent.image} 
          alt={agent.firstName}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div className="flex flex-col">
          <h3 className="text-[#05004E] font-medium text-base">{agent.firstName} {agent.lastName}</h3>
          <div className="text-gray-500 text-sm">
            {agent.primaryRole} | {agent.phone} | <br />
            <br className="sm:hidden" /> {agent.email}
          </div>
        </div>
      </div>
      <button onClick={()=>onClickView(agent.id)} className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700">
        View Profile
      </button>
    </div>
  );
};

const MyAgents = () => {
  const router= useNavigate();

  const onClickView = (agentId) => {
    console.log("Add new agent");
    router(`/user/account-setting/agent/${agentId}/view`);
  };

  const onClickAdd = () => {
    console.log("Add new agent");
    router('/user/account-setting/add-agent');
  }

  return (
    <div className="p-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
        <h1 className="text-[#05004E] text-2xl lg:text-3xl font-semibold">
          Agents Details
        </h1>
        
        <div className="flex flex-wrap gap-4 items-center">
          <button onClick={onClickAdd} className="flex items-center gap-2 bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z" />
            </svg>
            Add New
          </button>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-violet-500 w-full sm:w-48"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {agents.map((agent, index) => (
          <AgentCard key={index} agent={agent} onClickAdd={onClickAdd} onClickView={onClickView} />
        ))}
      </div>
    </div>
  );
};

export default MyAgents;