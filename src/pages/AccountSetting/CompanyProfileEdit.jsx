import React, { useState } from 'react';
import companyProfilePhoto from "../../assets/accountSettings/company-profile-photo.png";

const CompanyProfileEdit = () => {
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
        fax: '',
        logo: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prevState => ({
                ...prevState,
                logo: file
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white mt-10">
            <form onSubmit={handleSubmit}>
                {/* Form Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Previous form fields remain the same */}
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
                            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                    </div>
                </div>

                {/* Logo Upload Section */}
                <div className="mt-14 ml-12">
                    <div className="flex items-center space-x-4">
                        <span className="text-blue-600 cursor-pointer" onClick={() => document.getElementById('logo-upload').click()}>
                            Upload Logo
                        </span>
                        <span className="text-gray-600">
                            Upload Your Company Logo
                        </span>
                    </div>
                    <input
                        type="file"
                        name="logo"
                        onChange={handleLogoChange}
                        accept="image/*"
                        className="hidden"
                        id="logo-upload"
                    />
                    {formData.logo && (
                        <div className="text-sm text-gray-600">
                            Selected file: {formData.logo.name}
                        </div>
                    )}
                </div>


                {/* Save Changes Button */}
                <div className="flex justify-center mt-12">
                    <button
                        type="submit"
                        className="px-14 py-3 bg-[#7F3DFF] text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CompanyProfileEdit;