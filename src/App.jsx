import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import UserLayout from "./components/layout/UserLayout";
import Dashboard from "./pages/user/Dashboard";
import CreateSendFlyer from "./pages/user/CreateSendFlyer";
import MySchedule from "./pages/user/MySchedule";
import TargetedAudience from "./pages/user/MyTargetedAudience";
import CompanyProfile from "./pages/AccountSetting/companyInfo/CompanyProfile";
import CompanyProfileEdit from "./pages/AccountSetting/companyInfo/CompanyProfileEdit";
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
import MultipleProperty from "./pages/multipleProperty/MultipleProperty";
import SingleFlyerTemplate from "./pages/singleProperty/SingleFlyerTemplate";
import MultipleFlyerTemplate from "./pages/multipleProperty/MultipleFlyerTemplate";
import AgentsDetails from "./pages/AccountSetting/myAgents/MyAgents";
import AddAgent from "./pages/AccountSetting/myAgents/AddAgent";
import ViewAgentDetails from "./pages/AccountSetting/myAgents/ViewAgentDetails";
import MyAgents from "./pages/AccountSetting/myAgents/MyAgents";
import DateTimeSchedule from "./components/common/DateTimeSchedule";
import PricingStructure from "./pages/AccountSetting/mySubscription/PricingStructure";
import MyCurrentPlan from "./pages/AccountSetting/mySubscription/MyCurrentPlan";
import OwnHtml from "./pages/OwnHtml";
import FlyerUpload from "./pages/FlyerUpload";
import Login from "./components/auth/Login";
import AuthLayout from "./pages/AuthLayout";
import SignUp from "./components/auth/SignUp";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/"  >

          <Route path="auth" element={<AuthLayout />} >
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>

          <Route path="" element={<UserLayout />}>
            <Route path="" element={<Navigate to="/dashboard" />} />
            <Route path="dashboard">
              <Route path="" element={<Dashboard />} />
              <Route path="for-sale" element={<ForSale />} />
              <Route path="sale-form" element={<ForSaleForm />} />
              <Route path="for-lease" element={<ForLease />} />
              <Route path="auctions" element={<Auctions />} />
              <Route path="properties-wanted" element={<PropertiesWanted />} />
            </Route>

            <Route path="create-send-flyer" element={<CreateSendFlyer />}>
              {/* <Route path="dashboard" element={<Dash2 />} /> */}
              <Route path="" element={<MainDash />} />
            </Route>

            <Route path="flyer"  >
              <Route path="" element={<Dash2 />} />
              <Route path="schedule-later" element={<DateTimeSchedule />} />
            </Route>

            <Route path="single-property">
              <Route path="" element={<SingleProperty />} />
              {/* Using dynamic route parameter here */}
              <Route path="template/:templateId"  >
                <Route path="" element={<SingleFlyerTemplate />} />
                <Route path="schedule-later" element={<DateTimeSchedule />} />
              </Route>
            </Route>
            <Route path="multiple-property">
              <Route path="" element={<MultipleProperty />} />
              {/* Using dynamic route parameter here */}
              <Route path="template/:templateId" >
                <Route path="" element={<MultipleFlyerTemplate />} />
                <Route path="schedule-later" element={<DateTimeSchedule />} />
              </Route>

            </Route>

            <Route path="own-html" element={<OwnHtml />} />
            <Route path="upload-flyer" element={<FlyerUpload />} />

            <Route path="my-schedule-flyer" element={<MySchedule />} />
            <Route
              path="my-schedule-flyer/update"
              element={<UpdateMySchedule />}
            />
            <Route path="my-targeted-audience" element={<TargetedAudience />}>
              <Route path="filter-audience" element={<FilterAudience />} />
              <Route
                path="select-market"
                element={
                  <SelectMarket titleText={"Select the Markets/Submarkets"} />
                }
              />
            </Route>

            <Route path="my-saved-work" element={<MySavedWork />} />
            <Route path="clarison-support" element={<ClarisonRESupport />} />
            <Route path="account-setting" element={<AccountSetting />}>
              <Route index element={<Navigate to="my-agents" replace />} />
              <Route path="company-profile" element={<CompanyProfile />} />
              <Route
                path="company-profile/company-profile-edit"
                element={<CompanyProfileEdit />}
              />
              <Route path="my-agents" element={<MyAgents />} />
              <Route path="add-agent" element={<AddAgent />} />
              <Route path="agent/:id/view" element={<ViewAgentDetails />} />
              <Route path="company-details" element={<CompanyProfile />} />
              <Route path="company-details/edit" element={<CompanyProfileEdit />} />
              <Route path="my-subscriptions" element={<MyCurrentPlan />} />
              <Route path="pricing-structure" element={<PricingStructure />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
