import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import imageUploadIcon from '../../../../assets/uploadOwnFlyer/image-plus.png';
import template2Preview from '../../../../assets/singleProperty/template2-preview.png';
import FlyerTemplate2Preview from './FlyerTemplate2Preview';

const FlyerBuilderTemplate2 = () => {
    const [formData, setFormData] = useState({
        title: '',
        mainImage: null,
        subImages: [
            { id: 'sub1', image: null },
            { id: 'sub2', image: null },
            { id: 'sub3', image: null },
        ],
        subtitle: '',
        details: '',
        bottomImages: [
            { id: 'bottom1', image: null },
            { id: 'bottom2', image: null }
        ],
        bottomDetails: ''
    });


    // Handle form submission
    const handleSubmitForm = () => {
        console.log('form data submitted: ', formData);
    };

    const handleDraft = () => {
        console.log('form data saved as draft: ', formData);
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleImageUpload = (e, imageType, imageId = null) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (imageType === 'main') {
                    setFormData(prev => ({
                        ...prev,
                        mainImage: { file, preview: reader.result }
                    }));
                } else if (imageType === 'sub') {
                    setFormData(prev => ({
                        ...prev,
                        subImages: prev.subImages.map(img =>
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

    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-50 min-h-screen">
                {/* Left Column - Form */}
                <div className="space-y-6 p-8 ">
                    <h1 className="text-2xl font-bold text-center text-indigo-900 ">Single Property</h1>

                    {/* Title Input */}
                    <div className="bg-white rounded-lg border p-4">
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => handleInputChange('title', e.target.value)}
                            placeholder="Click here to add title"
                            className="w-full p-2 text-gray-700 focus:outline-none text-center border rounded-lg"
                        />
                    </div>

                    {/* Main Image Upload */}
                    <div
                        className="bg-white rounded-lg border p-4 cursor-pointer"
                        onClick={() => document.getElementById('mainImageUpload').click()}
                    >
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center">
                            {formData.mainImage ? (
                                <img
                                    src={formData.mainImage.preview}
                                    alt="Main"
                                    className="max-h-48 object-contain"
                                />
                            ) : (
                                <>
                                    <img src={imageUploadIcon} alt="Upload" className="w-12 h-12 mb-2" />
                                    <p className="text-sm text-gray-500">Click to upload image</p>
                                </>
                            )}
                        </div>
                        <input
                            id="mainImageUpload"
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e, 'main')}
                        />
                    </div>

                    {/* Sub Images */}
                    <div className="grid grid-cols-3 gap-4">
                        {formData.subImages.map((img) => (
                            <div
                                key={img.id}
                                className="bg-white rounded-lg border p-4 cursor-pointer"
                                onClick={() => document.getElementById(`subImage-${img.id}`).click()}
                            >
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center">
                                    {img.image ? (
                                        <img
                                            src={img.image.preview}
                                            alt="Sub"
                                            className="max-h-20 object-contain"
                                        />
                                    ) : (
                                        <img src={imageUploadIcon} alt="Upload" className="w-8 h-8" />
                                    )}
                                </div>
                                <input
                                    id={`subImage-${img.id}`}
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={(e) => handleImageUpload(e, 'sub', img.id)}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Subtitle */}
                    <div className="bg-white rounded-lg border p-4">
                        <input
                            type="text"
                            value={formData.subtitle}
                            onChange={(e) => handleInputChange('subtitle', e.target.value)}
                            placeholder="Click here to add title"
                            className="w-full p-2 text-gray-700 focus:outline-none text-center border rounded-lg"
                        />
                    </div>

                    {/* Details */}
                    <div className="bg-white rounded-lg border p-4">
                        <textarea
                            value={formData.details}
                            onChange={(e) => handleInputChange('details', e.target.value)}
                            placeholder="Click here to add details"
                            className="w-full p-2 text-gray-700 focus:outline-none min-h-[100px] border rounded-lg resize-none"
                        />
                    </div>

                    {/* Bottom Section */}
                    <div className="grid grid-cols-3 gap-4">
                        {/* Bottom Left Image */}
                        <div
                            className="bg-white rounded-lg border p-4 cursor-pointer"
                            onClick={() => document.getElementById('bottomImage-1').click()}
                        >
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center">
                                {formData.bottomImages[0].image ? (
                                    <img
                                        src={formData.bottomImages[0].image.preview}
                                        alt="Bottom"
                                        className="max-h-20 object-contain"
                                    />
                                ) : (
                                    <img src={imageUploadIcon} alt="Upload" className="w-8 h-8" />
                                )}
                            </div>
                            <input
                                id="bottomImage-1"
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, 'bottom', 'bottom1')}
                            />
                        </div>

                        {/* Bottom Center Details */}
                        <div className="bg-white rounded-lg border p-4">
                            <textarea
                                value={formData.bottomDetails}
                                onChange={(e) => handleInputChange('bottomDetails', e.target.value)}
                                placeholder="Click here to add details"
                                className="w-full h-full p-2 text-gray-700 focus:outline-none resize-none border rounded-lg"
                            />
                        </div>

                        {/* Bottom Right Image */}
                        <div
                            className="bg-white rounded-lg border p-4 cursor-pointer"
                            onClick={() => document.getElementById('bottomImage-2').click()}
                        >
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center">
                                {formData.bottomImages[1].image ? (
                                    <img
                                        src={formData.bottomImages[1].image.preview}
                                        alt="Bottom"
                                        className="max-h-20 object-contain"
                                    />
                                ) : (
                                    <img src={imageUploadIcon} alt="Upload" className="w-8 h-8" />
                                )}
                            </div>
                            <input
                                id="bottomImage-2"
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, 'bottom', 'bottom2')}
                            />
                        </div>
                    </div>

                    {/* Save Button */}
                    <button onClick={handleDraft} className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Save as draft
                    </button>
                </div>

                {/* Right Column - Preview */}
                <div className="space-y-6">
                    {/* Preview will be implemented later */}
                    <div className="h-full flex items-start pt-12 justify-center text-gray-500 ">
                        {/* <img src={template2Preview} alt="Template 2 Preview" className=" object-contain" /> */}
                        <FlyerTemplate2Preview formData={formData} />
                    </div>
                </div>

            </div>
            {/* Action Buttons */}
            <div className="flex justify-center items-center space-x-4 w-full  max-w-4xl mx-auto py-5  pb-10">
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

export default FlyerBuilderTemplate2;