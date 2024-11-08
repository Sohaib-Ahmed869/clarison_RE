import React from 'react';
import { useParams } from 'react-router-dom';

import FlyerBuilderMultipleTemplate1 from '../../components/designOwnFlyer/multipleProperty/templateNo1/FlyerBuilderMultipleTemplate1';

const MultipleFlyerTemplate = () => {
  const { templateId } = useParams(); // Get the template ID from the URL

  // Render the appropriate flyer builder based on the templateId
  switch (templateId) {
    case 'template1':
      return <FlyerBuilderMultipleTemplate1 />;
    default:
      return <div>Template not found</div>;
  }
};

export default MultipleFlyerTemplate;
