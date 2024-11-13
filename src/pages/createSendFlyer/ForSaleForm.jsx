import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForSaleForm = () => {
  const [formData, setFormData] = useState({
    emailSubject: '',
    fromLine: '',
    replyAddress: '',
    flyerHeadline: '',
    hasMLS: 'yes',
    mlsNumber: '#123456'
  });
  const router = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleMLSChange = (value) => {
    setFormData(prevState => ({
      ...prevState,
      hasMLS: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    router('/user/flyer');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#ffffff]">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h1 className="text-2xl font-semibold text-center text-[#151D48] mb-8">
          Email Information
        </h1>

        {/* Email Subject Line */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#001C46]">
            Email Subject Line <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="emailSubject"
            value={formData.emailSubject}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
        </div>

        {/* From Line */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#001C46]">
            From Line <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fromLine"
            value={formData.fromLine}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
        </div>

        {/* Reply to Address */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#001C46]">
            Reply to Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="replyAddress"
            value={formData.replyAddress}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
        </div>

        {/* Flyer Headline */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#001C46]">
            Flyer Headline <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="flyerHeadline"
            value={formData.flyerHeadline}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
        </div>

        {/* MLS Number Section */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#001C46]">
              Do you have a MLS number? <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={formData.hasMLS === 'yes'}
                    onChange={() => handleMLSChange('yes')}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 border rounded ${formData.hasMLS === 'yes'
                    ? 'bg-[#2563eb] border-[#2563eb]'
                    : 'bg-white border-[#F1F1F3]'
                    }`}>
                    {formData.hasMLS === 'yes' && (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="ml-2">Yes</span>
              </label>

              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={formData.hasMLS === 'no'}
                    onChange={() => handleMLSChange('no')}
                    className="sr-only"
                  />

                  <div className={`w-4 h-4 border rounded ${formData.hasMLS === 'no'
                    ? 'bg-[#2563eb] border-[#2563eb]'
                    : 'bg-white border-[#F1F1F3]'
                    }`}>
                    {formData.hasMLS === 'no' && (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          {formData.hasMLS === 'yes' && (
            <input
              type="text"
              name="mlsNumber"
              value={formData.mlsNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#FCFCFD] border text-[#001C46] opacity-[58%] border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          )}
        </div>

        {/* Next Button */}
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="px-14 py-3 bg-primary text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForSaleForm;