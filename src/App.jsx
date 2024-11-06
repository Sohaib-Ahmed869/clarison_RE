import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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
import ForSale from "./pages/createSendFlyer/ForSale";
import ForLease from "./pages/createSendFlyer/ForLease";
import Auctions from "./pages/createSendFlyer/Auctions";
import Dash2 from "./pages/createSendFlyer/Dash2";
import UpdateMySchedule from "./pages/user/UpdateMySchedule";
import ForSaleForm from "./pages/createSendFlyer/ForSaleForm";
import PropertiesWanted from "./pages/createSendFlyer/PropertiesWanted";
import FilterAudience from "./components/common/FilterAudience";
import SelectMarket from "./components/common/SelectMarket";
import SingleProperty from "./pages/singleProperty/SingleProperty";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/user/dashboard" />} />
        <Route path="/user" element={<UserLayout />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="" element={<MainDash />} />
            <Route path="for-sale" element={<ForSale />} />
            <Route path="sale-form" element={<ForSaleForm />} />
            <Route path="for-lease" element={<ForLease />} />
            <Route path="auctions" element={<Auctions />} />
            <Route path="properties-wanted" element={<PropertiesWanted />} />
          </Route>

          <Route path="create-send-flyer" element={<CreateSendFlyer />}>
            <Route path="dashboard" element={<Dash2 />} />
          </Route>

          <Route path="single-property" element={<SingleProperty/>} />


          <Route path="my-schedule-flyer" element={<MySchedule />} />
          <Route
            path="my-schedule-flyer/update"
            element={<UpdateMySchedule />}
          />
          <Route path="my-targeted-audience" element={<TargetedAudience />}>
            <Route path="filter-audience" element={<FilterAudience />} />
            <Route path="select-market" element={<SelectMarket titleText={"Select the Markets/Submarkets"} />} />
          </Route>

          <Route path="my-saved-work" element={<MySavedWork />} />
          <Route path="clarison-support" element={<ClarisonRESupport />} />
          <Route path="account-setting" element={<AccountSetting />}>
            <Route path="company-profile" element={<CompanyProfile />} />
            <Route
              path="company-profile-edit"
              element={<CompanyProfileEdit />}
            />
          </Route>
        </Route>
        {/* User Routes End */}
      </Routes>
    </>
  );
};

export default App;
