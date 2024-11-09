import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import FlyerBuilderMultipleTemplate1 from '../../components/designOwnFlyer/multipleProperty/templateNo1/FlyerBuilderMultipleTemplate1';
import SelectStates from '../../components/common/SelectStates';
import ScheduleLater from '../../components/common/ScheduleLater';
import SelectArea from '../../components/common/SelectArea';
import ProgressBar from '../../components/common/ProgressBar';

const MultipleFlyerTemplate = () => {
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
        setSelectedTemplate(<FlyerBuilderMultipleTemplate1 handleNext={handleNext} handleCancel={handleCancel} />);
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
    router(`/user/multiple-property/template/${templateId}/schedule-later`);
  }


  return (
    <div className='flex flex-col'>
      <div className="">
        <ProgressBar steps={steps} currentStep={currentStep} />
        {currentStep === 0 && selectedTemplate}
        {currentStep === 1 && <SelectStates />}
        {currentStep === 2 && <div>
          <SelectStates />
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
  )
};

export default MultipleFlyerTemplate;
