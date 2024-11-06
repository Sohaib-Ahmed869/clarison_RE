import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import template3Preview from '../../../../assets/singleProperty/template3-preview.png';

const FlyerBuilderTemplate3 = () => {
    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        mainImages: [
            { id: 'main1', image: null },
            { id: 'main2', image: null },
            { id: 'main3', image: null },
            { id: 'main4', image: null }
        ],
        propertyTitle: '',
        propertyDetails: '',
        bottomImages: [
            { id: 'bottom1', image: null },
            { id: 'bottom2', image: null }
        ],
        bottomText: ''
    });


    // Handle form submission
    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
    };



    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleImageUpload = (e, imageType, imageId) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (imageType === 'main') {
                    setFormData(prev => ({
                        ...prev,
                        mainImages: prev.mainImages.map(img =>
                            img.id === imageId ? { ...img, image: { file, preview: reader.result } } : img
                        )
                    }));
                } else if (imageType === 'bottom') {
                    setFormData(prev => ({
                        ...prev,
                        bottomImages: prev.bottomImages.map(img =>
                            img.id === imageId ? { ...img, image: { file, preview: reader.result } } : img
                        )
                    }));
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSaveDraft = () => {
        console.log('Saving draft:', formData);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                {/* Left Column - Form */}
                <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h1 className="text-2xl font-bold text-center text-indigo-900 mb-6">Single Property</h1>

                        {/* Title Input */}
                        <div className="mb-6">
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => handleInputChange('title', e.target.value)}
                                placeholder="Click here to add title"
                                className="w-full p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-center"
                            />
                        </div>

                        {/* Subtitle */}
                        <div className="mb-6">
                            <input
                                type="text"
                                value={formData.subtitle}
                                onChange={(e) => handleInputChange('subtitle', e.target.value)}
                                placeholder="Click here to add subtitle"
                                className="w-full p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-center"
                            />
                        </div>

                        {/* Main Images Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            {formData.mainImages.map((img) => (
                                <div
                                    key={img.id}
                                    onClick={() => document.getElementById(`image-${img.id}`).click()}
                                    className="aspect-video border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 transition-colors"
                                >
                                    {img.image ? (
                                        <img
                                            src={img.image.preview}
                                            alt="Property"
                                            className="w-full h-full object-cover rounded"
                                        />
                                    ) : (
                                        <>
                                            <ImageIcon className="w-8 h-8 text-gray-400 mb-2" />
                                            <p className="text-sm text-gray-500">Click to upload image</p>
                                        </>
                                    )}
                                    <input
                                        id={`image-${img.id}`}
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageUpload(e, 'main', img.id)}
                                        className="hidden"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Property Title */}
                        <div className="mb-6">
                            <input
                                type="text"
                                value={formData.propertyTitle}
                                onChange={(e) => handleInputChange('propertyTitle', e.target.value)}
                                placeholder="Click here to add title"
                                className="w-full p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-center"
                            />
                        </div>

                        {/* Property Details */}
                        <div className="mb-6">
                            <textarea
                                value={formData.propertyDetails}
                                onChange={(e) => handleInputChange('propertyDetails', e.target.value)}
                                placeholder="Click here to add details"
                                className="w-full p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[100px] resize-none"
                            />
                        </div>

                        {/* Bottom Section */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {/* Bottom Left Image */}
                            <div
                                onClick={() => document.getElementById('bottom-image-1').click()}
                                className="aspect-square border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 transition-colors"
                            >
                                {formData.bottomImages[0].image ? (
                                    <img
                                        src={formData.bottomImages[0].image.preview}
                                        alt="Bottom"
                                        className="w-full h-full object-cover rounded"
                                    />
                                ) : (
                                    <>
                                        <ImageIcon className="w-6 h-6 text-gray-400 mb-2" />
                                        <p className="text-xs text-gray-500">Click to upload</p>
                                    </>
                                )}
                                <input
                                    id="bottom-image-1"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageUpload(e, 'bottom', 'bottom1')}
                                    className="hidden"
                                />
                            </div>

                            {/* Bottom Text */}
                            <div>
                                <textarea
                                    value={formData.bottomText}
                                    onChange={(e) => handleInputChange('bottomText', e.target.value)}
                                    placeholder="Click here to add details"
                                    className="w-full h-full p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                                />
                            </div>

                            {/* Bottom Right Image */}
                            <div
                                onClick={() => document.getElementById('bottom-image-2').click()}
                                className="aspect-square border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 transition-colors"
                            >
                                {formData.bottomImages[1].image ? (
                                    <img
                                        src={formData.bottomImages[1].image.preview}
                                        alt="Bottom"
                                        className="w-full h-full object-cover rounded"
                                    />
                                ) : (
                                    <>
                                        <ImageIcon className="w-6 h-6 text-gray-400 mb-2" />
                                        <p className="text-xs text-gray-500">Click to upload</p>
                                    </>
                                )}
                                <input
                                    id="bottom-image-2"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageUpload(e, 'bottom', 'bottom2')}
                                    className="hidden"
                                />
                            </div>
                        </div>

                        {/* Save Draft Button */}
                        <button
                            onClick={handleSaveDraft}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                            Save as draft
                        </button>
                    </div>
                </div>

                {/* Right Column - Preview */}
                <div className="space-y-6">
                    {/* Preview will be implemented later */}
                    <div className="h-full flex items-center justify-center text-gray-500">
                        <img src={template3Preview} alt="Template 2 Preview" className=" object-contain" />
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center items-center space-x-4 max-w-4xl mx-auto py-5 pb-10">
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

export default FlyerBuilderTemplate3;