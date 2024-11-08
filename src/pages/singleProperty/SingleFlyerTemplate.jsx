import React from 'react';
import { useParams } from 'react-router-dom';

import FlyerBuilderTemplate1 from '../../components/designOwnFlyer/singlePropery/templateNo1/FlyerBuilderTemplate1';
import FlyerBuilderTemplate2 from '../../components/designOwnFlyer/singlePropery/templateNo2/FlyerBuilderTemplate2';
import FlyerBuilderTemplate3 from '../../components/designOwnFlyer/singlePropery/templateNo3/FlyerBuilderTemplate3';
import FlyerBuilderTemplate4 from '../../components/designOwnFlyer/singlePropery/templateNo4/FlyerBuilderTemplate4';

const SingleFlyerTemplate = () => {
  const { templateId } = useParams(); // Get the template ID from the URL

  // Render the appropriate flyer builder based on the templateId
  switch (templateId) {
    case 'template1':
      return <FlyerBuilderTemplate1 />;
    case 'template2':
      return <FlyerBuilderTemplate2 />;
    case 'template3':
      return <FlyerBuilderTemplate3 />;
    case 'template4':
      return <FlyerBuilderTemplate4 />;
    default:
      return <div>Template not found</div>;
  }
};

export default SingleFlyerTemplate;
