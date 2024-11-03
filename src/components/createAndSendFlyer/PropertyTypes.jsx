import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const PropertyTypes = ({ propertyTypes, selectedPropertyTypes, setSelectedPropertyTypes }) => {
    const [expandedSections, setExpandedSections] = useState({});
    const [selectAll, setSelectAll] = useState(false);

    // Update selectAll state based on selectedPropertyTypes
    useEffect(() => {
        setSelectAll(selectedPropertyTypes.length === propertyTypes.length);
    }, [selectedPropertyTypes, propertyTypes]);

    const handleCheckboxChange = (id) => {
        setSelectedPropertyTypes((prev) => {
            if (prev.includes(id)) {
                return prev.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    const toggleSection = (sectionId) => {
        setExpandedSections((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
    };

    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedPropertyTypes([]); // Deselect all
        } else {
            setSelectedPropertyTypes(propertyTypes.map(type => type.id)); // Select all
        }
    };

    return (
        <div className="space-y-2">
            <h2 className="font-medium text-xl text-[#001C46] mb-1">Property Types</h2>
            <button
                className="text-sm text-blue-600 hover:text-blue-700 mb-2"
                onClick={handleSelectAll}
            >
                {selectAll ? 'Deselect All' : 'Select All'}
            </button>

            <div className="space-y-4">
                {propertyTypes.map((type) => (
                    <div key={type.id} className="text-sm">
                        <div className="flex items-center justify-between">
                            <div className="">
                                <input
                                    type="checkbox"
                                    id={type.id}
                                    checked={selectedPropertyTypes.includes(type.id)}
                                    onChange={() => handleCheckboxChange(type.id)}
                                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <label htmlFor={type.id} className="ml-2 text-[#001C46]">{type.label}</label>
                            </div>

                            {type.subTypes.length > 0 && (
                                <button onClick={() => toggleSection(type.id)} className="p-0.5 hover:bg-gray-100 rounded">
                                    {expandedSections[type.id] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                </button>
                            )}
                        </div>

                        {/* Subtypes */}
                        {expandedSections[type.id] && type.subTypes.map((subType, index) => (
                            <div key={index} className="ml-6 mt-1 flex items-center">
                                <input
                                    type="checkbox"
                                    id={`${type.id}-${index}`}
                                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <label htmlFor={`${type.id}-${index}`} className="ml-2 text-[#001C46]">{subType}</label>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PropertyTypes;
