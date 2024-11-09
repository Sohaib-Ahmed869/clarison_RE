import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import template5Preview from '../../../../assets/singleProperty/template5-preview.png';
import FlyerTemplate5Preview from './FlyerTemplate5Preview';

const FlyerBuilderTemplate5 = () => {
    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        mainImage: null,
        sideImages: [
            { id: 'side1', image: null },
            { id: 'side2', image: null }
        ],
        title2: '',
        details: '',
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        console.log('formData:', formData);
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
                } else if (imageType === 'side') {
                    setFormData(prev => ({
                        ...prev,
                        sideImages: prev.sideImages.map(img =>
                            img.id === imageId ? { ...img, image: { file, preview: reader.result } } : img
                        )
                    }));
                } else if (imageType === 'center') {
                    setFormData(prev => ({
                        ...prev,
                        centerImage: { file, preview: reader.result }
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

    const handleSaveAsDraft = () => {
        console.log('Saving as draft:', formData);
    };

    const ImageUploadBox = ({ id, image, type, imageId = null, size = 'large' }) => (
        <div
            className={`border rounded-lg bg-white cursor-pointer ${size === 'large' ? 'p-6' : 'p-3'}`}
            onClick={() => document.getElementById(id).click()}
        >
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center">
                {image ? (
                    <img
                        src={image.preview}
                        alt="Uploaded"
                        className={`object-contain ${size === 'large' ? 'max-h-32' : 'max-h-16'}`}
                    />
                ) : (
                    <>
                        <ImageIcon className={`${size === 'large' ? 'w-12 h-12' : 'w-8 h-8'} text-gray-400`} />
                        <p className="text-sm text-gray-500 mt-2">Click to upload image</p>
                    </>
                )}
            </div>
            <input
                id={id}
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, type, imageId)}
            />
        </div>
    );

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p- ">
                {/* Left Column - Form */}
                <div className="space-y-6 p-12 bg-white">
                    <h1 className="text-2xl font-bold text-center text-indigo-900">Single Property</h1>

                    {/* Title Inputs */}
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        placeholder="Click here to add title"
                        className="w-full p-3 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="text"
                        value={formData.subtitle}
                        onChange={(e) => handleInputChange('subtitle', e.target.value)}
                        placeholder="Click here to add subtitle"
                        className="w-full p-3 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    {/* Main Image Upload */}
                    <ImageUploadBox
                        id="mainImageUpload"
                        image={formData.mainImage}
                        type="main"
                    />

                    {/* Side Images */}
                    <div className="grid grid-cols-2 gap-4">
                        {formData.sideImages.map((img) => (
                            <ImageUploadBox
                                key={img.id}
                                id={`sideImage-${img.id}`}
                                image={img.image}
                                type="side"
                                imageId={img.id}
                                size="medium"
                            />
                        ))}
                    </div>

                  

                    {/* Second Title and Details */}
                    <input
                        type="text"
                        value={formData.title2}
                        onChange={(e) => handleInputChange('title2', e.target.value)}
                        placeholder="Click here to add title"
                        className="w-full p-3 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <textarea
                        value={formData.details}
                        onChange={(e) => handleInputChange('details', e.target.value)}
                        placeholder="Click here to add details"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[100px] resize-none"
                    />

                 

                    {/* Save as Draft Button */}
                    <button
                        onClick={handleSaveAsDraft}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Save as draft
                    </button>
                </div>

                {/* Right Column - Preview */}
                <div className="space-y-6">
                    {/* Preview will be implemented later */}
                    <div className="h-full flex items-center justify-center text-gray-500">
                        {/* <img src={template5Preview} alt="Template 2 Preview" className=" object-contain" /> */}
                        <FlyerTemplate5Preview formData={formData} />
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default FlyerBuilderTemplate5;