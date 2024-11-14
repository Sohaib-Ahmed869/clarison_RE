import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import OwnHtmlForm from '../components/useOwnHtml/OwnHtmlForm';
import SelectStates from '../components/common/SelectStates';
import SelectArea from '../components/common/SelectArea';
import ScheduleLater from '../components/common/ScheduleLater';
import ProgressBar from '../components/common/ProgressBar';
import OwnHtmlPreview from '../components/useOwnHtml/OwnHtmlPreview';


const OwnHtml = () => {
    const [ownHtml, setOwnHtml] = useState('');
    const [showPreview, setShowPreview] = useState(false);


    const [currentStep, setCurrentStep] = useState(0);
    const [steps, setSteps] = useState([
        'Enter HTML Code',
        'State Selection',
        'Area Selection',
        'Schedule Date',
    ]);

    const router = useNavigate();


    const handleNext = () => {
        if (currentStep === steps.length - 1) {
            // setCurrentStep(0);
            return;
        }
        if (currentStep === 0 && showPreview === false) {
            console.log("html code is ", ownHtml);
            setShowPreview(true);
            return;
        }
        setShowPreview(false);
        setCurrentStep((prev) => prev + 1);
    }

    const handleBack = () => {
        setCurrentStep((prev) => prev - 1);
    }

    const handleCancel = () => {
        setCurrentStep(0);
    }


    const onClickScheduleLater = () => {
        console.log('Schedule Later');
        router(`/user/flyer/schedule-later`);
    }


    return (
        <div className='flex flex-col'>
            <div className="">
                <ProgressBar steps={steps} currentStep={currentStep} />
                {currentStep === 0 && (
                    showPreview ? <OwnHtmlPreview ownHtml={ownHtml} /> : <OwnHtmlForm ownHtml={ownHtml} setOwnHtml={setOwnHtml} />
                )}
                {currentStep === 1 && (
                    <>
                        <h1 className="text-xl sm:text-3xl text-center mb-4 w-full font-semibold text-secondary">
                            Filter your Audience
                        </h1>
                        <SelectStates />
                    </>
                )}
                {currentStep === 2 && <div>
                    <h1 className="text-xl sm:text-3xl text-center mb-4 w-full font-semibold text-secondary">
                        Select the Markets/Submarkets
                    </h1>
                    <SelectStates showMap={false} />
                    <SelectArea />
                </div>}
                {currentStep === 3 && <ScheduleLater onClickScheduleLater={onClickScheduleLater} />}
            </div>

            {/* Action Buttons */}
            {currentStep ? (
                <div className="flex w-1/2 self-center justify-center mt-5 space-x-4">
                    <button onClick={handleCancel} className="px-6 w-1/2 py-2 border border-gray-200 rounded-md text-sm hover:bg-gray-50">
                        Cancel
                    </button>
                    <button onClick={handleNext} className="px-6 py-2 w-1/2 bg-primary text-white rounded-md text-sm hover:bg-purple-700">
                        Next
                    </button>
                </div>
            ) : (
                <div className="flex items-center justify-center">
                    <button
                        onClick={handleNext}
                        className="px-10 py-2 bg-purple-600 text-white rounded-lg 
                             font-medium hover:bg-purple-700 transition-colors"
                    >
                        Next Step
                    </button>
                </div>
            )}
        </div>
    )
};

export default OwnHtml;
