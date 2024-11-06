import React from 'react'
import bannerMainImage from '../../assets/singleProperty/banner-main-image.png';
import bannerTopRightImage from '../../assets/singleProperty/banner-top-right-image.png';

const PropertyBanner = () => {
    return (
        <div className="relative w-full bg-blue-600 rounded-xl overflow-hidden -z-20">
            {/* Banner container with flex */}
            <div className="flex justify-between items-center relative flex-wrap ">
                {/* Left side with text */}
                <div className="relative z-10 px-8 py-1 md:py-1">
                    <h1 className="text-white text-2xl md:text-4xl lg:text-5xl  font-bold">
                        Select Your Template Below.
                    </h1>
                </div>

                {/* Right side with images */}
                <div className="flex-shrink-0  pr-6 ">
                    {/* Main large image */}
                    <img
                        src={bannerMainImage}
                        alt="Property Template"
                        className="w-60 md:w-80 lg:w-72 rounded-lg shadow-lg z-50 "
                    />

                    {/* Top right overlapping image */}
                    <div className="absolute top-0 right-0  -z-10">
                        <img
                            src={bannerTopRightImage}
                            alt="Property Template"
                            className="w-16 md:w-20 lg:w-28 rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PropertyBanner;
