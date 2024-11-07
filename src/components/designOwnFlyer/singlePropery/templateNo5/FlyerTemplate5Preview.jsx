import React from 'react';

const FlyerTemplate5Preview = ({ formData }) => {
  return (
    <div className="border p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      {/* Title and Subtitle */}
      <div className="bg-[#305982] text-white p-4 rounded-t-lg text-center">
        <h1 className="text-2xl font-bold">{formData.title || '24633 Fairmont Drive'}</h1>
        <p className="text-sm">{formData.subtitle || 'San Francisco, CA, 94103'}</p>
      </div>

      {/* Main Image */}
      <div className="w-full m-1 min-h-52 bg-gray-300 rounded-md flex items-center justify-center">
         {formData.mainImage ? (
            <img src={formData.mainImage.preview} alt={`Main Image`} className="w-full h-64 object-cover rounded-md" />
          ) : (
            `Main Image`
          )}
      </div>

      {/* Side Images */}
      <div className="flex gap-2 mt-4">
        {formData.sideImages.map((sideImage, index) => (
          <div key={index} className="w-full h-32 bg-gray-300 rounded-md flex items-center justify-center">
          {sideImage.image ? (
            <img src={sideImage.image.preview} alt={`Bottom ${index + 1}`} className="w-full h-full object-cover rounded-md" />
          ) : (
            `Side Image ${index + 1}`
          )}
        </div>
        ))}
      </div>

      {/* Description and Bulleted List */}
      <div className="mt-4 p-4">
        <h2 className="text-lg font-semibold">{formData.title2 || 'lorem ipsum dolor sit amet'}</h2>
        <p className="text-gray-700 mt-2">{formData.details || `
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.
Et harum quidem rerum facilis est et expedita distinctio.
`}</p>
       
      </div>
    </div>
  );
};

export default FlyerTemplate5Preview;
