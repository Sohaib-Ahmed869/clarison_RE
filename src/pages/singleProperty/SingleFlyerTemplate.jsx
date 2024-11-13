import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import FlyerBuilderTemplate1 from '../../components/designOwnFlyer/singlePropery/templateNo1/FlyerBuilderTemplate1';
import FlyerBuilderTemplate2 from '../../components/designOwnFlyer/singlePropery/templateNo2/FlyerBuilderTemplate2';
import FlyerBuilderTemplate3 from '../../components/designOwnFlyer/singlePropery/templateNo3/FlyerBuilderTemplate3';
import FlyerBuilderTemplate4 from '../../components/designOwnFlyer/singlePropery/templateNo4/FlyerBuilderTemplate4';
import FlyerBuilderTemplate5 from '../../components/designOwnFlyer/singlePropery/templateNo5/FlyerBuilderTemplate5';
import ProgressBar from '../../components/common/ProgressBar';
import SelectStates from '../../components/common/SelectStates';
import SelectArea from '../../components/common/SelectArea';
import ScheduleLater from '../../components/common/ScheduleLater';

const SingleFlyerTemplate = () => {
  const { templateId } = useParams();
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([
    'Template Editing',
    'State Selection',
    'Area Selection',
    'Schedule Date',
  ]);
  const router = useNavigate();

  useEffect(() => {
    switch (templateId) {
      case 'template1':
        setSelectedTemplate(<FlyerBuilderTemplate1 handleNext={handleNext} handleCancel={handleCancel} />);
        break;
      case 'template2':
        setSelectedTemplate(<FlyerBuilderTemplate2 handleNext={handleNext} handleCancel={handleCancel} />);
        break;
      case 'template3':
        setSelectedTemplate(<FlyerBuilderTemplate3 handleNext={handleNext} handleCancel={handleCancel} />);
        break;
      case 'template4':
        setSelectedTemplate(<FlyerBuilderTemplate4 handleNext={handleNext} handleCancel={handleCancel} />);
        break;
      case 'template5':
        setSelectedTemplate(<FlyerBuilderTemplate5 handleNext={handleNext} handleCancel={handleCancel} />);
        break;
      default:
        setSelectedTemplate(<div>Template not found</div>);
    }
  }, [templateId]);

  const handleNext = () => {
    if (currentStep === steps.length - 1) {
      // setCurrentStep(0);
      return;
    }
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
    router(`/user/single-property/template/${templateId}/schedule-later`);
  }

  return (
    <div className='flex flex-col overflow-hidden'>
      <div className="">
        <ProgressBar steps={steps} currentStep={currentStep} />
        {currentStep === 0 && selectedTemplate}
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
      <div className="flex w-1/2 self-center justify-center mt-5 space-x-4">
        <button onClick={handleCancel} className="px-6 w-1/2 py-2 border border-gray-200 rounded-md text-sm hover:bg-gray-50">
          Cancel
        </button>
        <button onClick={handleNext} className="px-6 py-2 w-1/2 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700">
          Next
        </button>
      </div>
    </div>
  );
};

export default SingleFlyerTemplate;
