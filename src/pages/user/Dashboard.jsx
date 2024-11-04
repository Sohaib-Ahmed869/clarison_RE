import React from 'react'
import ImageUpload from '../../components/uploadOwnFlyer/ImageUpload'
import { Outlet } from 'react-router-dom'
import OwnHtmlForm from '../../components/useOwnHtml/OwnHtmlForm'
import OwnHtmlPreview from '../../components/useOwnHtml/OwnHtmlPreview'
import FlyerBuilderTemplate1 from '../../components/designOwnFlyer/singlePropery/FlyerBuilderTemplate1'


const Dashboard = () => {
  return (
    <div>
      <Outlet/>
      {/* <ImageUpload/> */}
      {/* <OwnHtmlForm/> */}
      {/* <OwnHtmlPreview/> */}
      {/* <FlyerBuilderTemplate1/> */}
    </div>
  )
}

export default Dashboard
