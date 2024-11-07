import React from 'react';

const FlyerMultipleTemplate1Preview = ({ formData }) => {
    return (
        <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg border border-gray-300 overflow-hidden">
            {/* Header */}
            <div className="bg-red-600 text-white p-4 text-center">
                <h1 className="text-3xl font-bold">{formData.title || 'Home for Sale'}</h1>
            </div>

            {/* Property Sections */}
            <div className="p-4 space-y-4">
                {formData.properties.map((property, index) => (
                    <div key={property.id} className="flex border-b border-gray-300 pb-4">
                        {/* Property Image */}
                        <div className="w-1/2 pr-2">
                            {property.image?.preview ? (
                                <img
                                    src={property.image.preview}
                                    alt={`Property ${index + 1}`}
                                    className="object-cover h-32 w-full border-2 border-gray-300 rounded-md"
                                />
                            ) : (
                                <div className="h-32 flex items-center justify-center bg-gray-200 text-gray-500 text-sm font-semibold rounded-md border-2 border-gray-300">
                                    Property Image
                                </div>
                            )}
                        </div>

                        {/* Property Details */}
                        {property.details ? (
                            <p className="text-xs mb-1">{property.details}</p>
                        ):
                        (
                            <>
                            <div className="w-1/2 pl-2 text-gray-700">
                            <p className="text-xs mb-1">This home was recently listed in Melissa Subdivision. This home was listed on October 20th 2022.</p>
                            <p className="text-lg font-bold text-red-600">SALES PRICE</p>
                            <p className="text-lg font-bold text-red-600">$600,000</p>
                            <ul className="text-xs space-y-1 mt-2">
                                <li>7 Days On Market</li>
                                <li>2,500 square ft</li>
                                <li>4 bedroom</li>
                                <li>3 bathroom</li>
                                <li>2 car garage</li>
                                <li>Pool</li>
                            </ul>
                        </div>
        </>
    )
}
                    </div >
                ))}
            </div >

    {/* Bottom Section */ }
    < div className = "flex p-4 bg-gray-100 border-t border-gray-300" >
                <div className="w-1/4">
                    {formData.bottomSection.image?.preview ? (
                        <img
                            src={formData.bottomSection.image.preview}
                            alt="Agent"
                            className="object-cover h-24 w-full border-2 border-gray-300 rounded-md"
                        />
                    ) : (
                        <div className="h-24 flex items-center justify-center bg-gray-200 text-gray-500 text-sm font-semibold rounded-md border-2 border-gray-300 text-center">
                            Agent Image
                        </div>
                    )}
                </div>
                <div className="w-3/4 pl-4 text-gray-700">
                    {/* Agent Details */}
                    <p className="text-xs">{formData.bottomSection.details || `
          Melissa Smith

Real Estate Agent
\n
Call or Chat me today to schedule a private tour!
\n
📞 123-456-7890
\n
📧 email@realestate.com
\n
🌐 www.realestate.com
          `}</p>

                </div>
                <p className="text-xs italic w-[30%]">{formData.bottomSection.signature || 'Call or Chat me today to schedule a private tour!'}</p>
            </div >
        </div >
    );
};

export default FlyerMultipleTemplate1Preview;
