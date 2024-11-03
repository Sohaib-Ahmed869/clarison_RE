import React from 'react'
import MainDash from '../createSendFlyer/MainDash'
import Dash2 from '../createSendFlyer/Dash2'

import CompanyProfile from '../AccountSetting/CompanyProfile'
import CompanyProfileEdit from '../AccountSetting/CompanyProfileEdit'
import ForSaleForm from '../createSendFlyer/ForSaleForm'
import ForSale from '../createSendFlyer/ForSale'
import ForLease from '../createSendFlyer/ForLease'
import Auctions from '../createSendFlyer/Auctions'
import { Outlet } from 'react-router-dom'


const CreateSendFlyer = () => {
  return (
    <div>
      {/* <MainDash/> */}
      {/* <Dash2/> */}
      {/* <ForSaleForm /> */}
      {/* <ForSale/> */}
      {/* <ForLease/> */}
      {/* <Auctions /> */}

      {/* --> Account settings  */}
      {/* <CompanyProfile/> */}
      {/* <CompanyProfileEdit /> */}
      <Outlet/>
    </div>
  )
}

export default CreateSendFlyer
