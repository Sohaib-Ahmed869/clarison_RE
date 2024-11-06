import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import template1Preview from '../../../../assets/multipleProperty/template1-preview.png';

const FlyerBuilderMultipleTemplate1 = () => {
    const [formData, setFormData] = useState({
        title: '',
        properties: [
            { id: 'prop1', image: null, details: '' },
            { id: 'prop2', image: null, details: '' },
            { id: 'prop3', image: null, details: '' },
            { id: 'prop4', image: null, details: '' }
        ],
        bottomSection: {
            image: null,
            details: '',
            signature: ''
        }
    });

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    const handleInputChange = (field, value, propertyId = null) => {
        if (propertyId) {
            setFormData(prev => ({
                ...prev,
                properties: prev.properties.map(prop =>
                    prop.id === propertyId ? { ...prop, details: value } : prop
                )
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [field]: value
            }));
        }
    };

    const handleImageUpload = (e, propertyId = null) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (propertyId) {
                    setFormData(prev => ({
                        ...prev,
                        properties: prev.properties.map(prop =>
                            prop.id === propertyId ? { ...prop, image: { file, preview: reader.result } } : prop
                        )
                    }));
                } else {
                    setFormData(prev => ({
                        ...prev,
                        bottomSection: {
                            ...prev.bottomSection,
                            image: { file, preview: reader.result }
                        }
                    }));
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDraft = () => {
        console.log('Form data saved as draft:', formData);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-50 min-h-screen">
            {/* Left Column - Form */}
            <div className="space-y-6 p-8 bg-white">
                <h1 className="text-2xl font-bold text-center text-indigo-900 mb-8">Multiple Property</h1>

                {/* Title Input */}
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        placeholder="Click here to add title"
                        className="w-full p-2 text-gray-700 focus:outline-none text-center border rounded-lg"
                    />
                </div>

                {/* Property Sections */}
                {formData.properties.map((property) => (
                    <div key={property.id} className="grid grid-cols-2 gap-4">
                        <div
                            className="bg-white rounded-lg shadow-sm p-4 cursor-pointer"
                            onClick={() => document.getElementById(`image-${property.id}`).click()}
                        >
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center h-32">
                                {property.image ? (
                                    <img
                                        src={property.image.preview}
                                        alt="Property"
                                        className="max-h-full object-contain"
                                    />
                                ) : (
                                    <ImageIcon className="w-8 h-8 text-gray-400" />
                                )}
                            </div>
                            <input
                                id={`image-${property.id}`}
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, property.id)}
                            />
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-4">
                            <textarea
                                value={property.details}
                                onChange={(e) => handleInputChange('details', e.target.value, property.id)}
                                placeholder="Click here to add details"
                                className="w-full h-32 p-2 text-gray-700 focus:outline-none resize-none border rounded-lg"
                            />
                        </div>
                    </div>
                ))}

                {/* Bottom Section */}
                <div className="grid grid-cols-5 gap-4">
                    <div
                        className="col-span-1 bg-white rounded-lg shadow-sm p-4 cursor-pointer"
                        onClick={() => document.getElementById('bottom-image').click()}
                    >
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center h-24">
                            {formData.bottomSection.image ? (
                                <img
                                    src={formData.bottomSection.image.preview}
                                    alt="Bottom"
                                    className="max-h-full object-contain"
                                />
                            ) : (
                                <ImageIcon className="w-6 h-6 text-gray-400" />
                            )}
                        </div>
                        <input
                            id="bottom-image"
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e)}
                        />
                    </div>
                    <div className="col-span-2 bg-white rounded-lg shadow-sm p-4">
                        <textarea
                            value={formData.bottomSection.details}
                            onChange={(e) => handleInputChange('bottomSection', {
                                ...formData.bottomSection,
                                details: e.target.value
                            })}
                            placeholder="Click here to add details"
                            className="w-full h-24 p-2 text-gray-700 focus:outline-none resize-none border rounded-lg"
                        />
                    </div>
                    <div className="col-span-2 bg-white rounded-lg shadow-sm p-4">
                        <textarea
                            value={formData.bottomSection.signature}
                            onChange={(e) => handleInputChange('bottomSection', {
                                ...formData.bottomSection,
                                signature: e.target.value
                            })}
                            placeholder="Click here to add signature"
                            className="w-full h-24 p-2 text-gray-700 focus:outline-none resize-none border rounded-lg"
                        />
                    </div>
                </div>

                {/* Save Button */}
                <button
                    onClick={handleDraft}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Save as draft
                </button>
            </div>

           
                {/* Right Column - Preview */}
                <div className="space-y-6">
                    {/* Preview will be implemented later */}
                    <div className="h-full flex items-center justify-center text-gray-500">
                        <img src={template1Preview} alt="Template 2 Preview" className=" object-contain" />
                    </div>
                </div>

            {/* Action Buttons */}
            <div className="col-span-2 flex justify-center items-center space-x-4 max-w-4xl mx-auto py-5 pb-10">
                <button className="px-6 w-1/2 py-2 border rounded-md text-sm hover:bg-gray-50">
                    Cancel
                </button>
                <button className="px-6 w-1/2 py-2 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700">
                    Next
                </button>
            </div>
        </div>
    );
};

export default FlyerBuilderMultipleTemplate1;