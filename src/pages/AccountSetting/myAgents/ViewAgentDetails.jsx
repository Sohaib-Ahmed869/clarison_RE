import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { agents } from "../../../constants/agents";

const ViewAgentDetails = () => {
    const { id } = useParams();
    const agent = agents.find(a => a.id === id) || {
        firstName: 'Brooklyn',
        lastName: 'Simmons',
        email: 'BrooklynSimmons@gmail.com',
        role: 'Real Estate Broker',
        city: 'Miami',
        state: 'Florida',
        timeZone: 'Eastern Daylight Time',
        language: 'English',
        phone: '+1 (234) 123 123',
        profileImage: ''
    };

    const [formData, setFormData] = useState({
        firstName: agent.firstName || '',
        lastName: agent.lastName || '',
        role: agent.primaryRole || '',
        email: agent.email || '',
        city: agent.city || '',
        state: agent.state || '',
        timeZone: agent.timeZone || '',
        language: agent.language || '',
        phone: agent.phone || '',
        image: agent.image || ''
    });

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
            <div className="flex flex-col items-start mb-8">
                <img
                    src={formData.image}
                    alt="Agent Profile"
                    className="w-24 h-24 rounded-full object-cover mb-4"
                />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600">
                        First Name
                    </label>
                    <input
                        type="text"
                        value={formData.firstName}
                        disabled
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md"
                    />
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600">
                        Last Name
                    </label>
                    <input
                        type="text"
                        value={formData.lastName}
                        disabled
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md"
                    />
                </div>

                {/* Primary Role */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600">
                        Primary Role
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            value={formData.role}
                            disabled
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input
                        type="email"
                        value={formData.email}
                        disabled
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md"
                    />
                </div>

                {/* City */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600">
                        City
                    </label>
                    <input
                        type="text"
                        value={formData.city}
                        disabled
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md"
                    />
                </div>

                {/* State */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600">
                        State
                    </label>
                    <input
                        type="text"
                        value={formData.state}
                        disabled
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md"
                    />
                </div>

                {/* Time Zone */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600">
                        Time Zone
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            value={formData.timeZone}
                            disabled
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Language */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600">
                        Language
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            value={formData.language}
                            disabled
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Phone */}
                <div className="space-y-2 md:col-span-2">
                    <label className="block text-sm font-medium text-gray-600">
                        Phone
                    </label>
                    <input
                        type="tel"
                        value={formData.phone}
                        disabled
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md"
                    />
                </div>
            </div>

            {/* Continue Button */}
            <div className="flex justify-center mt-8">
                <button
                    type="button"
                    className="px-8 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default ViewAgentDetails;