import React, { useState } from 'react';
import { timeZones } from '../../../constants/timeZones';

const AddAgent = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        primaryRole: '',
        email: '',
        city: '',
        state: '',
        timeZone: '',
        language: '',
        phone: '',
        profilePicture: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prevState => ({
                ...prevState,
                profilePicture: file
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
            <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#001C46]">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#001C46]">
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                        />
                    </div>

                    {/* Primary Role */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#001C46]">
                            Primary Role
                        </label>
                        <select
                            name="primaryRole"
                            value={formData.primaryRole}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 appearance-none"
                        >
                            <option value="">Select Role</option>
                            <option value="agent">Real Estate Agent</option>
                            <option value="broker">Broker</option>
                            <option value="manager">Manager</option>
                        </select>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#001C46]">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                        />
                    </div>

                    {/* City */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#001C46]">
                            City
                        </label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                        />
                    </div>

                    {/* State */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#001C46]">
                            State
                        </label>
                        <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                        />
                    </div>

                    {/* Time Zone */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#001C46]">
                            Time Zone
                        </label>
                        <select
                            name="timeZone"
                            value={formData.timeZone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 appearance-none"
                        >
                            <option value="">Select Time Zone</option>
                            {timeZones.map((zone, index) => (
                                <option key={index} value={zone.value}>{zone.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* Language */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#001C46]">
                            Language
                        </label>
                        <select
                            name="language"
                            value={formData.language}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 appearance-none"
                        >
                            <option value="">Select Language</option>
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                        </select>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2 md:col-span-2">
                        <label className="block text-sm font-medium text-[#001C46]">
                            Phone
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                        />
                    </div>
                </div>

                {/* Profile Picture Upload */}
                <div className="mt-8">
                    <div className="flex items-center space-x-4">
                        <span
                            className="text-blue-600 cursor-pointer"
                            onClick={() => document.getElementById('profile-picture-upload').click()}
                        >
                            Upload Picture
                        </span>
                        <span className="text-gray-600">
                            Upload Your Profile Picture
                        </span>
                    </div>
                    <input
                        type="file"
                        id="profile-picture-upload"
                        onChange={handleImageUpload}
                        accept="image/*"
                        className="hidden"
                    />
                    {formData.profilePicture && (
                        <div className="mt-2 text-sm text-gray-600">
                            Selected file: {formData.profilePicture.name}
                        </div>
                    )}
                </div>

                {/* Add Profile Button */}
                <div className="flex justify-center mt-10">
                    <button
                        type="submit"
                        className="px-14 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                    >
                        Add Profile
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddAgent;