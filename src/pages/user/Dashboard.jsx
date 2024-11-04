import React from 'react'
import ImageUpload from '../../components/uploadOwnFlyer/ImageUpload'
import { Outlet } from 'react-router-dom'
import OwnHtmlForm from '../../components/useOwnHtml/OwnHtmlForm'

const Dashboard = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default Dashboard
