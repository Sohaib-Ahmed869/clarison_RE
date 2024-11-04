import React, { useEffect, useState } from 'react';
import PropertyTypes from '../../components/createAndSendFlyer/PropertyTypes';
import PropertiesWantedBuy from '../../components/createAndSendFlyer/PropertiesWantedBuy';
import PropertiesWantedLease from '../../components/createAndSendFlyer/PropertiesWantedLease';


const PropertiesWanted = () => {
    const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
    const [activeTab, setActiveTab] = useState('buy'); // 'buy' or 'lease'


    const propertyTypes = [
        { id: 'office', label: 'Office', subTypes: ['Self Storage', 'Data Centers', 'Student Housing'] },
        { id: 'retail', label: 'Retail', subTypes: [] },
        { id: 'industrial', label: 'Industrial', subTypes: [] },
        { id: 'multiFamily', label: 'Multi Family', subTypes: [] },
        { id: 'hospitality', label: 'Hospitality', subTypes: [] },
        { id: 'medical', label: 'Medical', subTypes: [] },
        { id: 'mixedUse', label: 'Mixed Use', subTypes: [] },
        { id: 'selfStorage', label: 'Self Storage', subTypes: [] },
        { id: 'dataCenters', label: 'Data Centers', subTypes: [] },
        { id: 'studentHousing', label: 'Student Housing', subTypes: [] },
        { id: 'seniorHousing', label: 'Senior Housing', subTypes: [] },
        { id: 'specialPurpose', label: 'Special Purpose', subTypes: [] },
        { id: 'land', label: 'Land', subTypes: [] },
    ];

    return (
        <div className="mx-auto p-6">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Sidebar */}
                <div className="w-full md:w-64 bg-[#F2F5FA] py-8 px-5 rounded-lg">
                    <PropertyTypes
                        propertyTypes={propertyTypes}
                        selectedPropertyTypes={selectedPropertyTypes}
                        setSelectedPropertyTypes={setSelectedPropertyTypes}
                    />
                </div>

                {/* Main Form */}
                <div className="flex-1">
                    <h1 className="text-2xl text-center font-semibold text-[#151D48] mb-8">
                        Submit Requirements for Buying/Selling Properties
                    </h1>

                    {/* Tab Container */}
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex bg-[#2762F8] bg-opacity-[8%] rounded-full p-1">
                            <button
                                onClick={() => setActiveTab('lease')}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200  ${activeTab === 'lease'
                                    ? 'bg-secondary text-white shadow'
                                    : ' hover:text-gray-800 text-[#001C46]'
                                    }`}
                            >
                                Lease
                            </button>
                            <button
                                onClick={() => setActiveTab('buy')}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === 'buy'
                                    ? 'bg-secondary text-white shadow'
                                    : ' hover:text-gray-800'
                                    }`}
                            >
                                Buy
                            </button>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="mt-6">
                        {activeTab === 'buy' ?
                            <PropertiesWantedBuy selectedPropertyTypes={selectedPropertyTypes} />
                            :
                            <PropertiesWantedLease selectedPropertyTypes={selectedPropertyTypes} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertiesWanted;