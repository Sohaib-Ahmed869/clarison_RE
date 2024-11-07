import React from 'react';

const FlyerTemplate3Preview = ({ formData }) => {
    return (
        <div className="w-full max-w-md mx-auto bg-[#0c192a] pb-10 pt-5 text-white rounded-lg overflow-hidden shadow-lg">
            {/* Header Section */}
            <div className="text-center p-4">
                <h1 className="text-2xl font-bold">{formData.title || 'House In Miami'}</h1>
                <p className="text-lg font-light">{formData.subtitle || 'Amazing 4 Bedroom Pool Home'}</p>
            </div>

            {/* Main Images Section */}
            <div className="grid grid-cols-2 gap-1 p-2">
                {formData.mainImages && formData.mainImages.length > 0 ? (
                    formData.mainImages.map((img, index) => (
                        <div key={index} className="aspect-video">
                            {img.image ? (
                                <img
                                    src={img.image.preview}
                                    alt={`Property Image ${index + 1}`}
                                    className="w-full h-full object-cover rounded"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                                    Image {index + 1}
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="col-span-2 text-center text-gray-400">No images available</div>
                )}
            </div>

            {/* Property Title and Description */}
            <div className="text-center px-4 py-10  ">
                <h2 className="text-lg font-semibold">{formData.propertyTitle || '$200,000 | MLS # 10145490'}</h2>
                <p className="text-sm mt-1">{formData.propertyDetails || 'The extraordinary home has panoramic waterfront views in a tropical paradise setting. With the Southern and Eastern exposure, the sunrises and sunsets are exceptional.'}</p>
            </div>

            <div className="h-1 bg-white"></div>

            {/* Address Section
            <div className="text-center py-4">
                <p className="text-base font-medium">{formData.address || '123 Main Street'}</p>
                <p className="text-sm">{formData.city || 'Miami, Florida 33180'}</p>
            </div> */}

            {/* Bottom Section with Images and Contact Info */}
            <div className="flex justify-between items-center px-4 py-5 pt-8 gap-1">
                {/* Bottom Left Icon/Image */}
                <div className="w-12 h-12 bg-gray-300 rounded-md flex items-center justify-center text-gray-500">
                    {formData.bottomImages[0]?.image ? (
                        <img
                            src={formData.bottomImages[0].image.preview}
                            alt="Agent Icon"
                            className="w-full h-full object-cover rounded-full"
                        />
                    ) : (
                        <span>Icon</span>
                    )}
                </div>

                {/* Bottom Right Office Image */}
                <div className="w-12 h-12 bg-gray-300 rounded-md flex items-center justify-center text-gray-500">
                    {formData.bottomImages[1]?.image ? (
                        <img
                            src={formData.bottomImages[1].image.preview}
                            alt="Office Image"
                            className="w-full h-full object-cover rounded-full"
                        />
                    ) : (
                        <span>Office</span>
                    )}
                </div>

                {/* Contact Information */}
                <div className="text-center flex-1 px-4">
                    <p className="text-sm">{formData.bottomText || `
                   John Smith

(555) 253-7429

johnsmith@yourcompany.com

Your Company

(555) 214-4763 Ext 123

www.yourcompany.com

123 Street Miami, FL 33180
`}</p>

                </div>


            </div>
        </div>
    );
};

export default FlyerTemplate3Preview;
