import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceRangeSlider = ({handleSliderChange,priceRange, minimumPrice,maximumPrice,label}) => {
 

    // Format price to display with commas and dollar sign
    const formatPrice = (price) => {
        return `$${price.toLocaleString()}`;
    };


    return (
        <div className="space-y-6 relative">
            <div className="space-y-2">
                <label className="block text-sm font-medium text-[#001C46]">
                    {label}
                </label>

                {/* Price display boxes */}
                <div className="flex justify-between mb-4">
                    <div className="bg-gray-50 rounded-lg px-4 py-2">
                        <div className="text-sm text-gray-600">Min:</div>
                        <div className="font-medium text-[#001C46]">
                            {formatPrice(priceRange.minPrice)}
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg px-4 py-2">
                        <div className="text-sm text-gray-600">Max:</div>
                        <div className="font-medium text-[#001C46]">
                            {formatPrice(priceRange.maxPrice)}
                        </div>
                    </div>
                </div>

                {/* Slider */}
                <div className="px-2 py-4">
                    <Slider
                        range
                        min={minimumPrice}
                        max={maximumPrice}
                        step={1000}
                        value={[priceRange.minPrice, priceRange.maxPrice]}
                        onChange={handleSliderChange}
                        trackStyle={[{ backgroundColor: '#2563EB' }]}
                        handleStyle={[
                            {
                                borderColor: '#2563EB',
                                backgroundColor: '#fff',
                                boxShadow: 'none',
                                width: 20,
                                height: 20,
                                marginTop: -8,
                            },
                            {
                                borderColor: '#2563EB',
                                backgroundColor: '#fff',
                                boxShadow: 'none',
                                width: 20,
                                height: 20,
                                marginTop: -8,
                            },
                        ]}
                        railStyle={{ backgroundColor: '#E5E7EB', height: 4 }}
                    />
                </div>
            </div>
        </div>
    );
};

export default PriceRangeSlider;