import React from 'react';

const FlyerTemplate4Preview = ({ formData }) => {
  return (
    <div className="bg-red-700 p-6 text-white rounded-lg max-w-md mx-auto space-y-4">
      {/* Title and Subtitle */}
      <div className="text-center">
        <h2 className="text-2xl font-bold">{formData.title || 'Open House In Dallas'}</h2>
        <p>{formData.subtitle || 'Amazing 4 Bedroom Pool Home'}</p>
      </div>

      {/* Main Image */}
      <div className="w-full">
        {formData.mainImage?.preview ? (
          <img src={formData.mainImage.preview} alt="Main" className="w-full h-56 object-cover rounded-md" />
        ) : (
          <div className="w-full h-56 bg-gray-300 rounded-md flex items-center justify-center text-gray-700">
            Main Image
          </div>
        )}
        <p className="text-center mt-2">$200,000 | MLS #10145490</p>
      </div>

      {/* Side Images */}
      <div className="grid grid-cols-2 gap-2">
        {formData.sideImages.map((img, index) => (
          <div key={index} className="w-full h-28">
            {img.image?.preview ? (
              <img src={img.image.preview} alt={`Side ${index + 1}`} className="w-full h-full object-cover rounded-md" />
            ) : (
              <div className="w-full h-full bg-gray-300 rounded-md flex items-center justify-center text-gray-700">
                Side {index + 1}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Center Image */}
      <div className="w-full h-32 my-4">
        {formData.centerImage?.preview ? (
          <img src={formData.centerImage.preview} alt="Center" className="w-full h-full object-cover rounded-md" />
        ) : (
          <div className="w-full h-full bg-gray-300 rounded-md flex items-center justify-center text-gray-700">
            Center Image
          </div>
        )}
      </div>

      {/* Property Details */}
      <div className="space-y-2">
        <div className="grid grid-cols-2 ">
          <div>
            <p className="font-semibold">{formData.title2 || `123 Main Street \n Chicago, Texas 75001`}</p>
            <p></p>
            <p className="text-sm">
              {formData.details1 || 'The extraordinary home has panoramic water front views in a tropical paradise setting.'}
            </p>
          </div>
          {/* Agent Details */}
          {/* Agent Details */}
          <div className="flex items-center flex-col mt-4">
            {/* Middle Images (Icons) */}
            <div className="flex space-x-2">
                <div  className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
                  {formData.middleImages[0].image?.preview ? (
                    <img
                      src={formData.middleImages[0].image.preview}
                      alt={`Agent Icon 1`}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span>Icon</span>
                  )}
                </div>
                <div  className="w-16 h-12 bg-gray-300 rounded-md flex items-center justify-center text-gray-500">
                  {formData.middleImages[1].image?.preview ? (
                    <img
                      src={formData.middleImages[1].image.preview}
                      alt={`Agent Icon 1`}
                      className="w-full h-full object-cover "
                    />
                  ) : (
                    <span>Icon</span>
                  )}
                </div>
            </div>

            <div className="text-sm space-y-1 mt-2">
              <p className="text-center">
                {formData.details2 || `John Smith\nYour Company\n(555) 214-765 Ext 123\njohnsmith@yourcompany.com\n123 Street Miami, FL 33180`}
              </p>
            </div>
          </div>
          
        </div>
      </div>



      {/* Bottom Images */}
      <div className="grid grid-cols-4 gap-2 mt-4">
        {formData.bottomImages.map((img, index) => (
          <div key={index} className="w-full h-20">
            {img.image?.preview ? (
              <img src={img.image.preview} alt={`Bottom ${index + 1}`} className="w-full h-full object-cover rounded-md" />
            ) : (
              <div className="w-full h-full bg-gray-300 rounded-md flex items-center justify-center text-gray-700">
                Bottom {index + 1}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

  );
};

export default FlyerTemplate4Preview;
