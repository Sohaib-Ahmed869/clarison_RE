import React from 'react';

const OwnHtmlForm = ({ ownHtml, setOwnHtml}) => {
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Basic validation to ensure HTML is not empty
    //     if (!ownHtml || ownHtml.trim() === '') {
    //         alert('Please enter HTML source code');
    //         return;
    //     }
    //     onNext();
    // };

    return (
        <div className="w-full max-w-4xl py-4 mx-auto px-4">
            <form className="flex flex-col items-center">
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

               
            </form>
        </div>
    );
};

export default OwnHtmlForm;