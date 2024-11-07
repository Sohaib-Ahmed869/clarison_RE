import React from 'react';

const FlyerTemplate2Preview = ({ formData }) => {
  return (
    <div className="w-full max-w-md mx-auto font-sans bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Title Section */}
      <div className="bg-[#606262] italic text-white py-5 text-center text-4xl font-semibold ">
        {formData.title || 'House of the Week'}
      </div>

      {/* Main Image */}
      <div className='min-h-52'>
        {formData.mainImage ? (
          <img
            src={formData.mainImage.preview}
            alt="Main"
            className="w-full h-64 object-cover"
          />
        ) : (
          <div className="w-full h-52 bg-gray-300 flex items-center justify-center">
            <p>No main image</p>
          </div>
        )}
      </div>


      {/* Sub Images */}
      <div className="flex justify-around py-4 pb-1 pt-[2px] gap-[1px]">
        {formData.subImages.map((img) => (
          <div key={img.id} className="w-1/3 rounded overflow-hidden">
            {img.image ? (
              <img
                src={img.image.preview}
                alt="Sub"
                className="w-full h-24 object-cover"
              />
            ) : (
              <div className="w-full h-24 bg-gray-300 flex items-center justify-center">
                <p>No image</p>
              </div>
            )}
          </div>
        ))}
      </div>


      {/* Subtitle Section */}
      <div className="p-4 bg-[#336799] text-white pb-1 text-md font-bold text-center">
        {formData.subtitle || '4 Bed 2.5 Bath 3500 sf Family Home '}
      </div>

      {/* Details Section */}
      <div className="px-4 bg-[#336799] text-sm text-center text-white pt-0 p-3">
        {formData.details || 'Deep water canal, views of bay from this superb updated 3 bedroom home. Pergo floors throughout Living, Dining & Kitchen areas. Brick wall encases Wood Burning Fireplace in Living room.\n$430,000'}
      </div>



      {/* Agent Info */}
      <div className="flex items-center justify-between px-2 py-4">
        <div className="flex items-center">
          <div className="max-w-24 min-w-24 h-24 rounded-md overflow-hidden mr-3">
            {formData.bottomImages[0].image ? (
              <img
                src={formData.bottomImages[0].image.preview}
                alt="Agent"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <p>No image</p>
              </div>
            )}
          </div>
          <div>
            <p className="text-sm text-gray-600">{formData.bottomDetails || `
            Lucy Green
            ABC Realty
            Phone: 989-362-4547
        `}</p>
          </div>
        </div>
        <div className="min-w-14 max-w-14 h-14 ">
          {formData.bottomImages[1].image ? (
            <img
              src={formData.bottomImages[1].image.preview}
              alt="Company Logo"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 rounded-full p-1 flex items-center justify-center">
              <p>No logo</p>
            </div>
          )}
        </div>
      </div>
      <div className="bg-[#3a85de] h-3"></div>
    </div>
  );
};

export default FlyerTemplate2Preview;
