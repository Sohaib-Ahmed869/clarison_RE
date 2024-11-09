import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import UserLayout from "./components/layout/UserLayout";
import Dashboard from "./pages/user/Dashboard";
import CreateSendFlyer from "./pages/user/CreateSendFlyer";
import MySchedule from "./pages/user/MySchedule";
import TargetedAudience from "./pages/user/MyTargetedAudience";
import CompanyProfile from "./pages/AccountSetting/companyInfo/CompanyProfile";
import CompanyProfileEdit from "./pages/AccountSetting/companyInfo/CompanyProfileEdit";
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
import MultipleProperty from "./pages/multipleProperty/MultipleProperty";
import OwnHtmlForm from "./components/useOwnHtml/OwnHtmlForm";
import ImageUpload from "./components/uploadOwnFlyer/ImageUpload";
import FlyerBuilderTemplate1 from "./components/designOwnFlyer/singlePropery/templateNo1/FlyerBuilderTemplate1";
import FlyerBuilderTemplate2 from "./components/designOwnFlyer/singlePropery/templateNo2/FlyerBuilderTemplate2";
import FlyerBuilderTemplate3 from "./components/designOwnFlyer/singlePropery/templateNo3/FlyerBuilderTemplate3";
import FlyerBuilderTemplate4 from "./components/designOwnFlyer/singlePropery/templateNo4/FlyerBuilderTemplate4";
import SingleFlyerTemplate from "./pages/singleProperty/SingleFlyerTemplate";
import MultipleFlyerTemplate from "./pages/multipleProperty/MultipleFlyerTemplate";
import AgentsDetails from "./pages/AccountSetting/myAgents/MyAgents";
import AddAgent from "./pages/AccountSetting/myAgents/AddAgent";
import ViewAgentDetails from "./pages/AccountSetting/myAgents/ViewAgentDetails";
import MyAgents from "./pages/AccountSetting/myAgents/MyAgents";
import DateTimeSchedule from "./components/common/DateTimeSchedule";

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

          <Route path="single-property" >
            <Route path="" element={<SingleProperty />} />
            {/* Using dynamic route parameter here */}
            <Route path="template/:templateId"  >
              <Route path="" element={<SingleFlyerTemplate />} />
              <Route path="schedule-later" element={<DateTimeSchedule />} />
            </Route>
          </Route>
          <Route path="multiple-property" >
            <Route path="" element={<MultipleProperty />} />
            {/* Using dynamic route parameter here */}
            <Route path="template/:templateId" >
              <Route path="" element={<MultipleFlyerTemplate />} />
              <Route path="schedule-later" element={<DateTimeSchedule />} />
            </Route>

          </Route>
          <Route path="own-html" element={<OwnHtmlForm />} />
          <Route path="upload-flyer" element={<ImageUpload />} />


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
            <Route path="agents-details" element={<MyAgents />} />
            <Route path="add-agent" element={<AddAgent />} />
            <Route path="agent/:id/view" element={<ViewAgentDetails />} />
            <Route path="company-details" element={<CompanyProfile />} />
            <Route path="company-details/edit" element={<CompanyProfileEdit />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
