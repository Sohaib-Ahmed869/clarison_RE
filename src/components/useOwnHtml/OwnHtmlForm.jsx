import React from 'react';

const OwnHtmlForm = ({ ownHtml, setOwnHtml, onNext }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation to ensure HTML is not empty
        if (!ownHtml || ownHtml.trim() === '') {
            alert('Please enter HTML source code');
            return;
        }
        onNext();
    };

    return (
        <div className="w-full max-w-4xl py-4 mx-auto px-4">
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                {/* Title */}
                <h2 className="text-lg font-medium text-[#4C4C4D] mb-4">
                    HTML Source Code
                </h2>

                {/* Textarea */}
                <div className="w-full mb-6">
                    <textarea
                        value={ownHtml}
                        onChange={(e) => setOwnHtml(e.target.value)}
                        placeholder="Paste your code here..."
                        className="w-full h-64 p-4 border border-gray-200 rounded-2xl 
                                 focus:outline-none focus:ring-2  
                                 focus:border-transparent resize-none
                                 placeholder-gray-400"
                        spellCheck="false"
                    />
                </div>

                {/* Next Step Button */}
                <button
                    type="submit"
                    className="px-10 py-2 bg-purple-600 text-white rounded-lg 
                             font-medium hover:bg-purple-700 transition-colors
                             focus:outline-none focus:ring-2 focus:ring-primary 
                             focus:ring-offset-2 "
                >
                    Next Step
                </button>
            </form>
        </div>
    );
};

export default OwnHtmlForm;