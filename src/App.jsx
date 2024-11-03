import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "./components/layout/UserLayout";
import Dashboard from "./pages/user/Dashboard";
import CreateSendFlyer from "./pages/user/CreateSendFlyer";
import MySchedule from "./pages/user/MySchedule";
import TargetedAudience from "./pages/user/MyTargetedAudience";
import CompanyProfile from "./pages/AccountSetting/CompanyProfile";
import CompanyProfileEdit from "./pages/AccountSetting/CompanyProfileEdit";
import MyTargetedAudience from "./pages/user/MyTargetedAudience";
import MySavedWork from "./pages/user/MySavedWork";
import ClarisonRESupport from "./pages/user/ClarisonRESupport";
import AccountSetting from "./pages/user/AccountSetting";
import MainDash from "./pages/createSendFlyer/MainDash";
import ForSale from "./pages/createSendFlyer/ForSaleForm";
import ForSaleForm from "./pages/createSendFlyer/ForSaleForm";
import ForLease from "./pages/createSendFlyer/ForLease";
import Auctions from "./pages/createSendFlyer/Auctions";
import Dash2 from "./pages/createSendFlyer/Dash2";

const App = () => {
  return (
    <>
      <Routes>
        {/* User Routes Start  */}
        <Route path="/user" element={<UserLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="create-send-flyer" element={<CreateSendFlyer />} >
            <Route path="dashboard" element={<MainDash />} />
            <Route path="for-sale" element={<ForSale />} />
            <Route path="sale-form" element={<ForSaleForm />} />
            <Route path="for-lease" element={<ForLease />} />
            <Route path="auctions" element={<Auctions />} />
            <Route path="property" element={<Dash2 />} />
          </Route>
          <Route path="my-schedule-flyer" element={<MySchedule />} />
          <Route path="my-targeted-audience" element={<MyTargetedAudience />} />
          <Route path="my-saved-work" element={<MySavedWork />} />
          <Route path="clarison-support" element={<ClarisonRESupport />} />
          <Route path="account-setting" element={<AccountSetting />} >
            <Route path="company-profile" element={<CompanyProfile />} />
            <Route path="company-profile-edit" element={<CompanyProfileEdit />} />
          </Route>
        </Route>

        {/* User Routes End  */}
      </Routes>
    </>
  );
};

export default App;
