import React, { useState } from 'react';
import companyProfilePhoto from "../../../assets/accountSettings/company-profile-photo.png";

const CompanyProfile = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        website: '',
        country: '',
        state: '',
        address: '',
        address2: '',
        city: '',
        zipCode: '',
        phone: '',
        fax: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white">
            <h1 className="text-2xl font-semibold text-center text-[#151D48] mb-8">
                My Company Profile
            </h1>

            <form onSubmit={handleSubmit}>
                {/* Profile Photo */}
                <div className="flex justify-start mb-8">
                    <img
                        src={companyProfilePhoto}
                        alt="Company Profile"
                        className="w-32 h-32 rounded-full object-cover"
                    />
                </div>

                {/* Form Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Company Name */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#001C46]">
                            Company Name
                        </label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="Royal Estate Developers"
                            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                    </div>

                    {/* Website */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#001C46]">
                            Website
                        </label>
                        <input
                            type="text"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder="www.royalestate.com"
                            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                    </div>

                    {/* Country */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#001C46]">
                            Country
                        </label>
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="United States"
                            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
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
                            placeholder="California"
                            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                    </div>

                    {/* Address */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#001C46]">
                            Address
                        </label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="1234 Sunset Boulevard"
                            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                    </div>

                    {/* Address 2 */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#001C46]">
                            Address 2
                        </label>
                        <input
                            type="text"
                            name="address2"
                            value={formData.address2}
                            onChange={handleChange}
                            placeholder="Suite 567"
                            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
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
                            placeholder="Angeles"
                            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                    </div>

                    {/* Zip code */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#001C46]">
                            Zip code
                        </label>
                        <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            placeholder="90026"
                            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#001C46]">
                            Phone
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 310 555 1234"
                            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                    </div>

                    {/* Fax */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#001C46]">
                            Fax
                        </label>
                        <input
                            type="tel"
                            name="fax"
                            value={formData.fax}
                            onChange={handleChange}
                            placeholder="+1 310 555 5678"
                            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                    </div>
                </div>

                {/* Edit Profile Button */}
                <div className="flex justify-center mt-8">
                    <button
                        type="submit"
                        className="px-14 py-3 bg-[#7F3DFF] text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                        Edit Profile
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CompanyProfile;
