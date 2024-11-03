import React, { useState } from 'react';

const ForSale = () => {
  const [selectedTypes, setSelectedTypes] = useState({
    office: false,
    dataCenters: false
  });

  const [formData, setFormData] = useState({
    state: '',
    county: '',
    zipCode: '',
    buildingSize: '',
    askingPrice: '',
    capRate: '',
    buildingClass: []
  });

  const [showPopups, setShowPopups] = useState({
    buildingSize: false,
    askingPrice: false,
    capRate: false,
    buildingClass: false
  });

  const propertyTypes = [
    { 
      name: 'Office', 
      id: 'office',
      subTypes: ['Self Storage', 'Data Centers', 'Student Housing']
    },
    { name: 'Retail', id: 'retail' },
    { name: 'Industrial', id: 'industrial' },
    { name: 'Multi Family', id: 'multiFamily' },
    { name: 'Hospitality', id: 'hospitality' },
    { name: 'Medical', id: 'medical' },
    { name: 'Mixed Use', id: 'mixedUse' },
    { name: 'Self Storage', id: 'selfStorage' },
    { name: 'Data Centers', id: 'dataCenters' },
    { name: 'Student Housing', id: 'studentHousing' },
    { name: 'Senior Housing', id: 'seniorHousing' },
    { name: 'Special Purpose', id: 'specialPurpose' },
    { name: 'Land', id: 'land' }
  ];

  const togglePopup = (field) => {
    setShowPopups(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleBuildingClass = (className) => {
    setFormData(prev => ({
      ...prev,
      buildingClass: prev.buildingClass.includes(className)
        ? prev.buildingClass.filter(c => c !== className)
        : [...prev.buildingClass, className]
    }));
  };

  const handleTypeSelect = (typeId) => {
    setSelectedTypes(prev => ({
      ...prev,
      [typeId]: !prev[typeId]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-semibold text-center text-[#151D48] mb-8">
          For Sale: Please Enter Property Details Below
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Property Types Section */}
          <div className="bg-white rounded-lg p-4">
            <div className="mb-4">
              <h2 className="text-lg font-medium mb-2">Property Types</h2>
              <button className="text-sm text-blue-600 hover:text-blue-800">
                Select All
              </button>
            </div>

            <div className="space-y-3">
              {propertyTypes.map((type) => (
                <div key={type.id} className="ml-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedTypes[type.id] || false}
                      onChange={() => handleTypeSelect(type.id)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm">{type.name}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Form Fields Section */}
          <div className="lg:col-span-3 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* State Field */}
              <div>
                <label className="block text-sm font-medium text-[#001C46] mb-1">
                  State <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  value={formData.state}
                  onChange={(e) => setFormData({...formData, state: e.target.value})}
                >
                  <option value="">Select State</option>
                </select>
              </div>

              {/* County Field */}
              <div>
                <label className="block text-sm font-medium text-[#001C46] mb-1">
                  County <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  value={formData.county}
                  onChange={(e) => setFormData({...formData, county: e.target.value})}
                >
                  <option value="">Select County</option>
                </select>
              </div>

              {/* Zip Code Field */}
              <div>
                <label className="block text-sm font-medium text-[#001C46] mb-1">
                  Zip Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  value={formData.zipCode}
                  onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                />
              </div>

              {/* Building Size Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-[#001C46] mb-1">
                  Building Size <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  value={formData.buildingSize}
                  onClick={() => togglePopup('buildingSize')}
                  readOnly
                />
                {showPopups.buildingSize && (
                  <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span>Hide</span>
                      <button onClick={() => togglePopup('buildingSize')} className="text-gray-500">
                        ✕
                      </button>
                    </div>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                      />
                      <span>Enter Building Size</span>
                    </label>
                  </div>
                )}
              </div>

              {/* Asking Price Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-[#001C46] mb-1">
                  Asking Price <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  value={formData.askingPrice}
                  onClick={() => togglePopup('askingPrice')}
                  readOnly
                />
                {showPopups.askingPrice && (
                  <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span>Contact for Price</span>
                      <button onClick={() => togglePopup('askingPrice')} className="text-gray-500">
                        ✕
                      </button>
                    </div>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                      />
                      <span>Enter Price</span>
                    </label>
                  </div>
                )}
              </div>

              {/* Cap Rate Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-[#001C46] mb-1">
                  Cap Rate %
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  value={formData.capRate}
                  onClick={() => togglePopup('capRate')}
                  readOnly
                />
                {showPopups.capRate && (
                  <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span>Hide</span>
                      <button onClick={() => togglePopup('capRate')} className="text-gray-500">
                        ✕
                      </button>
                    </div>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                      />
                      <span>Enter Cap Rate</span>
                    </label>
                  </div>
                )}
              </div>

              {/* Building Class Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-[#001C46] mb-1">
                  Building Class
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  value={formData.buildingClass.join(', ')}
                  onClick={() => togglePopup('buildingClass')}
                  readOnly
                />
                {showPopups.buildingClass && (
                  <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg p-4">
                    {['Class A', 'Class B', 'Class C'].map((className) => (
                      <label key={className} className="flex items-center space-x-2 mb-2">
                        <input
                          type="checkbox"
                          checked={formData.buildingClass.includes(className)}
                          onChange={() => handleBuildingClass(className)}
                          className="rounded border-gray-300"
                        />
                        <span>{className}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Next Button */}
            <div className="flex justify-center mt-8">
              <button
                type="button"
                className="px-14 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForSale;