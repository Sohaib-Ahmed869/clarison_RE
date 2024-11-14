import React, { useState, useRef, useEffect } from 'react';
import imagePlus from "../../assets/uploadOwnFlyer/image-plus.png";

const ImageUpload = ({ uploadedImage, setUploadImage, onNext }) => {
    const fileInputRef = useRef(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isDragging, setIsDragging] = useState(false);



    useEffect(() => {
        // Set initial preview URL if an uploaded image is passed as a prop
        if (uploadedImage) {
            const preview = URL.createObjectURL(uploadedImage);
            setPreviewUrl(preview);
    
            // Revoke the preview URL to avoid memory leaks
            return () => URL.revokeObjectURL(preview);
        }
    }, [uploadedImage]);


    const handleFileSelect = (file) => {
        if (file) { 
            // Check file type
            if (!file.type.startsWith('image/')) {
                alert('Please upload an image file');
                return;
            }

            // Check file size (5MB limit)
            if (file.size > 5 * 1024 * 1024) {
                alert('File size should be less than 5MB');
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviewUrl(e.target.result);
                setUploadImage(file);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        handleFileSelect(file);
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        handleFileSelect(file);
    };

    return (
        <div className="flex flex-col items-center pt-3 pb-8">
            <div
                className={`relative w-full max-w-md aspect-[3/4] rounded-xl border-2 border-dashed 
                    ${isDragging ? 'border-primary bg-purple-50' : 'border-gray-300'} 
                    transition-all duration-200 cursor-pointer hover:border-primary
                    ${previewUrl ? 'border-transparent hover:border-transparent' : ''}`}
                onClick={handleClick}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                {previewUrl ? (
                    <img
                        src={previewUrl}
                        alt="Uploaded flyer"
                        className="w-full h-full object-contain rounded-lg"
                    />
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                        <img
                            src={imagePlus}
                            alt="Upload icon"
                            className="w-16 h-16 mb-4"
                        />
                        <p className="text-sm text-gray-500">Click to upload flyer</p>
                    </div>
                )}

                <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileInput}
                />
            </div>

           
        </div>
    );
};

export default ImageUpload;