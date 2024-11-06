import React from 'react'

const FlyerBuilderTemplate2 = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-50 min-h-screen">
            {/* Left Column - Form */}
            <div className="space-y-6">
            </div>

            {/* Right Column - Preview */}
            <div className='space-y-6'>

            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
                <button className="px-6 py-2 border rounded-md text-sm hover:bg-gray-50">
                    Cancel
                </button>
                <button className="px-6 py-2 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700">
                    Next
                </button>
            </div>
        </div >


    )
}

export default FlyerBuilderTemplate2
