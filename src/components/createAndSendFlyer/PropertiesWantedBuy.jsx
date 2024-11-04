import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, Eye } from 'lucide-react';
import PriceRangeSlider from './PriceRangeSlider';


const PropertiesWantedBuy = ({ selectedPropertyTypes }) => {
    const [formData, setFormData] = useState({
        state: '',
        county: '',
        zipCode: '',
        lookingFor: '', 
        buildingSize: '',
        capRate: '',
        priceRange: {
            minPrice: 50000,
            maxPrice: 80000
        },
        buildingClass: [],
        propertyType: [],
    });

    const [showBuildingSizeDropdown, setShowBuildingSizeDropdown] = useState(false);
    const [showCapRateDropdown, setShowCapRateDropdown] = useState(false);
    const [showBuildingClassDropdown, setShowBuildingClassDropdown] = useState(false);
    
    const router = useNavigate();


    // Handle slider change
    const handleSliderChange = (values) => {
        setFormData(prevState => ({
            ...prevState,
            priceRange: {
                minPrice: values[0],
                maxPrice: values[1]
            }
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const toggleBuildingSizeDropdown = () => {
        setShowBuildingSizeDropdown(prev => !prev);
    };
    const toggleAskingPriceDropdown = () => {
        setShowAskingPriceDropdown(prev => !prev);
    };
    const toggleCapRateDropdown = () => {
        setShowCapRateDropdown(prev => !prev);
    };
    const toggleBuildingClassDropdown = () => {
        setShowBuildingClassDropdown(prev => !prev);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        router('/user/dashboard/sale-form');
    };


    const handleClassChange = (className) => {
        setFormData(prevState => ({
            ...prevState,
            buildingClass: className
        }));
    };


    const handleBuildingSizeChange = (size) => {
        setFormData(prevState => ({
            ...prevState,
            buildingSize: size,
        }));
    };



    const handleCapRateChange = (capRate) => {
        setFormData(prevState => ({
            ...prevState,
            capRate: capRate,
        }));
    };

    useEffect(() => {
        setFormData(prevState => ({
            ...prevState,
            propertyType: selectedPropertyTypes
        }));
    }, [selectedPropertyTypes]);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* State */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#001C46]">
                        State <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                        required
                    >
                        <option value="">Select State</option>
                        {/* Add state options */}
                    </select>
                </div>

                {/* County */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#001C46]">
                        County <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="county"
                        value={formData.county}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                        required
                    >
                        <option value="">Select County</option>
                        {/* Add county options */}
                    </select>
                </div>

                {/* Zip Code */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#001C46]">
                        Zip Code <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                        required
                    />
                </div>

                {/* Looking For */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#001C46]">
                        Looking For
                    </label>
                    <select
                        name="county"
                        value={formData.lookingFor}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    >
                        <option value=""></option>
                        {/* Add county options */}
                    </select>
                </div>

                {/* Building Size */}
                <div className="space-y-2 relative  ">
                    <label className="block text-sm font-medium text-[#001C46]">
                        Building Size <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="flex items-center ">
                            <input
                                type="text"
                                name="buildingSize"
                                value={formData.buildingSize}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                disabled
                            />
                            <button
                                type="button"
                                className="absolute right-2 px-2 py-1 text-sm "
                                onClick={toggleBuildingSizeDropdown}
                            >
                                {showBuildingSizeDropdown ? <ChevronUp /> : <ChevronDown />}
                            </button>
                        </div>
                    </div>
                    <div className="absolute z-50 right-0 ">
                        {showBuildingSizeDropdown && (
                            <BuildingSizeInput onChange={handleBuildingSizeChange} />
                        )}
                    </div>
                </div>


                {/* Price Range */}
                <div className="space-y-2 relative">
                    <div className="relative">
                        <PriceRangeSlider label={"Price Range"} minimumPrice={50000} maximumPrice={80000} handleSliderChange={handleSliderChange} priceRange={formData.priceRange} />
                       </div>
                </div>

                {/* Cap Rate */}
                <div className="space-y-2 relative">
                    <label className="block text-sm font-medium text-[#001C46]">
                        Cap Rate % <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="flex items-center">
                            <input
                                type="text"
                                name="capRate"
                                value={formData.capRate}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                disabled
                            />
                            <button
                                type="button"
                                className="absolute right-2 px-2 py-1 text-sm"
                                onClick={toggleCapRateDropdown}
                            >
                                {showCapRateDropdown ? <ChevronUp /> : <ChevronDown />}
                            </button>
                        </div>
                    </div>
                    <div className="absolute z-50 right-0 ">
                        {showCapRateDropdown && (
                            <CapRateInput onChange={handleCapRateChange} />
                        )}
                    </div>
                </div>

                {/* Building Class */}
                <div className="space-y-2 relative">
                    <label className="block text-sm font-medium text-[#001C46]">
                        Building Class<span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="flex items-center">
                            <input
                                type="text"
                                name="buildingClass"
                                value={formData.buildingClass}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                disabled
                            />
                            <button
                                type="button"
                                className="absolute right-2 px-2 py-1 text-sm "
                                onClick={toggleBuildingClassDropdown}
                            >
                                {showBuildingClassDropdown ? <ChevronUp /> : <ChevronDown />}
                            </button>
                        </div>
                    </div>
                    <div className="absolute z-50  right-0">
                        {showBuildingClassDropdown && <ClassSelection onClassChange={handleClassChange} />}
                    </div>
                </div>

            </div>

            {/* Next Button */}
            <div className="flex justify-center mt-12">
                <button
                    type="submit"
                    className="px-14 py-3 bg-[#7747FF] text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    onClick={handleSubmit}
                >
                    Next
                </button>
            </div>
        </>

    )
}

export default PropertiesWantedBuy


const BuildingSizeInput = ({ onChange }) => {
    const [selectedOption, setSelectedOption] = useState('enter');  // 'enter' or 'hide'

    return (
        <div className="bg-[#F2F5FA] rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600"
                        checked={selectedOption === 'hide'}
                        onChange={() => setSelectedOption('hide')}
                    />
                    <span className="text-gray-900 font-medium">Hide</span>
                </div>
                <Eye className="w-5 h-5 text-gray-600" />
            </div>
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600"
                    checked={selectedOption === 'enter'}
                    onChange={() => setSelectedOption('enter')}
                />
                <label className="text-gray-900">Enter Building Size</label>
            </div>
            <div className="mt-2">
                <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 p-2"
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </div>
    );
};

const CapRateInput = ({ onChange }) => {
    const [selectedOption, setSelectedOption] = useState('enter');  // 'enter' or 'hide'

    return (
        <div className="bg-[#F2F5FA] rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600"
                        checked={selectedOption === 'hide'}
                        onChange={() => setSelectedOption('hide')}
                    />
                    <span className="text-gray-900 font-medium">Hide</span>
                </div>
                <Eye className="w-5 h-5 text-gray-600" />
            </div>
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600"
                    checked={selectedOption === 'enter'}
                    onChange={() => setSelectedOption('enter')}
                />
                <label className="text-gray-900">Enter Cap Rate</label>
            </div>
            <div className="mt-2">
                <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 p-2"
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </div>
    );
};


const ClassSelection = ({ onClassChange }) => {
    const classes = ['Class A', 'Class B', 'Class C'];

    return (
        <div className="p-4 bg-[#F2F5FA] rounded-md shadow">
            {classes.map((className, index) => (
                <div key={index} className="flex items-center mb-2">
                    <input
                        type="checkbox"
                        id={className}
                        name="buildingClass"
                        value={className}
                        onChange={() => onClassChange(className)}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor={className} className="ml-2 text-[#001C46]">{className}</label>
                </div>
            ))}
        </div>
    );
};
