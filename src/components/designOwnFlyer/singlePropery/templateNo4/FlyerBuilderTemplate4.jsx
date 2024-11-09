import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import template4Preview from '../../../../assets/singleProperty/template4-preview.png';
import FlyerTemplate4Preview from './FlyerTemplate4Preview';

const FlyerBuilderTemplate4 = () => {
    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        mainImage: null,
        sideImages: [
            { id: 'side1', image: null },
            { id: 'side2', image: null },
        ],
        centerImage: null,
        title2: '',
        middleImages: [
            { id: 'middle1', image: null },
            { id: 'middle2', image: null },
        ],
        details1: '',
        details2: '',
        bottomImages: [
            { id: 'bottom1', image: null },
            { id: 'bottom2', image: null },
            { id: 'bottom3', image: null },
            { id: 'bottom4', image: null },
        ],
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        console.log("formData", formData);
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
                    }
                    ));
                }
                else if (imageType === 'middle') {
                    setFormData(prev => ({
                        ...prev,
                        middleImages: prev.middleImages.map(img =>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 ">
                {/* Left Column - Form */}
                <div className="space-y-6 p-10 bg-white">
                    <h1 className="text-xl font-bold text-center text-indigo-900">Single Property</h1>

                    {/* Title and Subtitle */}
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

                    {/* Main Image */}
                    <ImageUploadBox id="mainImageUpload" image={formData.mainImage} type="main" />

                    {/* Side Images */}
                    <div className="grid grid-cols-2 gap-4">
                        {formData.sideImages.map(img => (
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

                    {/* Center Image */}
                    <ImageUploadBox id="centerImageUpload" image={formData.centerImage} type="center" size="medium" />

                    <div className="grid grid-cols-2 gap-1">
                        {/* Secondary Title and Middle Images */}
                        <input
                            type="text"
                            value={formData.title2}
                            onChange={(e) => handleInputChange('title2', e.target.value)}
                            placeholder="Click here to add title"
                            className="w-full p-3 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <div className="grid grid-cols-2 gap-4">
                            {formData.middleImages.map(img => (
                                <ImageUploadBox
                                    key={img.id}
                                    id={`middleImage-${img.id}`}
                                    image={img.image}
                                    type="middle"
                                    imageId={img.id}
                                    size="small"
                                />
                            ))}
                        </div>

                        {/* Details Fields */}
                        <input
                            type="text"
                            value={formData.details1}
                            onChange={(e) => handleInputChange('details1', e.target.value)}
                            placeholder="Click here to add details"
                            className="w-full p-3 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                            type="text"
                            value={formData.details2}
                            onChange={(e) => handleInputChange('details2', e.target.value)}
                            placeholder="Click here to add details"
                            className="w-full p-3 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                    </div>

                    {/* Bottom Images */}
                    <div className="grid grid-cols-4 gap-2">
                        {formData.bottomImages.map(img => (
                            <ImageUploadBox
                                key={img.id}
                                id={`bottomImage-${img.id}`}
                                image={img.image}
                                type="bottom"
                                imageId={img.id}
                                size="small"
                            />
                        ))}
                    </div>


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
                        {/* <img src={template4Preview} alt="Template 2 Preview" className=" object-contain" /> */}
                        <FlyerTemplate4Preview formData={formData} />
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default FlyerBuilderTemplate4;