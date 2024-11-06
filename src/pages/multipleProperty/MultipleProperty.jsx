import React, { useState } from 'react';
import PropertyBanner from '../../components/designOwnFlyer/PropertyBanner';
import template1 from '../../assets/multipleProperty/template1.png';

const TemplateCard = ({ template, handleUseTemplate }) => {
  return (
    <div className="bg-[#F2F2F2] rounded-lg shadow-md h-fit p-4 flex flex-col items-center">
      <div className="relative h-fit mb-4">
        <img 
          src={template.templatePreview} 
          alt={template.templateName}
          className="w-full h-full object-contain  rounded-lg"
        />
      </div>
      <button 
        className=" hover:text-white bg-white text-black px-8 py-2 rounded-md hover:bg-secondary transition-colors w-full "
        onClick={()=>handleUseTemplate(template.id)}
      >
        Use Template
      </button>
    </div>
  );
};

const MultipleProperty = () => {
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const handleUseTemplate = (templateId) => {
        console.log('Selected Template ID:', templateId);
        setSelectedTemplate(templateId);
    };

    return (
        <div className="mx-auto p-6">
            <PropertyBanner />

            <div className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto h-screen overflow-auto ">
                    {multiplePropertyTemplates.map((template) => (
                        <TemplateCard 
                            key={template.id} 
                            template={template} 
                            handleUseTemplate={handleUseTemplate}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const multiplePropertyTemplates = [
    {
        id: '1',
        templateName: 'Template 1',
        templatePreview: template1,
    },

];

export default MultipleProperty;