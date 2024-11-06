import React from 'react'
import ImageUpload from '../../components/uploadOwnFlyer/ImageUpload'
import { Outlet } from 'react-router-dom'
import OwnHtmlForm from '../../components/useOwnHtml/OwnHtmlForm'
import OwnHtmlPreview from '../../components/useOwnHtml/OwnHtmlPreview'
import FlyerBuilderTemplate1 from '../../components/designOwnFlyer/singlePropery/templateNo1/FlyerBuilderTemplate1'
import FlyerBuilderTemplate2 from '../../components/designOwnFlyer/singlePropery/templateNo2/FlyerBuilderTemplate2'
import FlyerBuilderTemplate3 from '../../components/designOwnFlyer/singlePropery/templateNo3/FlyerBuilderTemplate3'
import FlyerBuilderTemplate4 from '../../components/designOwnFlyer/singlePropery/templateNo4/FlyerBuilderTemplate4'
import FlyerBuilderTemplate5 from '../../components/designOwnFlyer/singlePropery/templateNo5/FlyerBuilderTemplate5'
import FlyerBuilderMultipleTemplate1 from '../../components/designOwnFlyer/multipleProperty/templateNo1/FlyerBuilderMultipleTemplate1'


const Dashboard = () => {
  return (
    <div>
      <Outlet/>
      {/* <ImageUpload/> */}
      {/* <OwnHtmlForm/> */}
      {/* <OwnHtmlPreview/> */}
      {/* <FlyerBuilderTemplate1/> */}
      {/* <FlyerBuilderTemplate2/> */}
      {/* <FlyerBuilderTemplate3/> */}
      {/* <FlyerBuilderTemplate4/> */}
      {/* <FlyerBuilderTemplate5/> */}
      {/* <FlyerBuilderMultipleTemplate1/> */}
    </div>
  )
}

export default Dashboard
