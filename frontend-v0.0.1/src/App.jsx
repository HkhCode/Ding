import React from "react";
import HomePage from "./components/Ding/HomePage";
import { Routes, Route } from 'react-router-dom';
import MainPanel from "./components/Ding/Admin/MainPanel";
import Reporting from "./components/Ding/report";
import Request from "./components/Ding/requests";
import Home from "./components/Form Builder/Formbuilder.Home";
import FormbuilderProfile from "./components/Form Builder/Formbuilder.profile";
import FormbuilderTeam from "./components/Form Builder/Formbuilder.team";
import FormbuilderSettings from "./components/Form Builder/Formbuilder.settings";
import ShowAllReports from "./components/Ding/showAllReports";
import SummaryReport from "./components/Ding/summaryReport";
import EmployeesList from "./components/Ding/Admin/EmployeesList";
import Companies from "./components/Ding/Admin/Companies";
import AdminReports from "./components/Ding/Admin/AdminReports";
import AdminReporting from "./components/Ding/Admin/Reporting";
import VacationRequests from "./components/Ding/Admin/VacationRequests";
import MissionRequests from "./components/Ding/Admin/MissionRequests";
import InAndOutRequests from "./components/Ding/Admin/InAndOutRequests";
import AddShift from "./components/Ding/Admin/AddShift";
import Shift from "./components/Ding/Admin/AdminShift";
import ShiftsList from "./components/Ding/Admin/ShiftsList";
const App = () => {
    // return <HomePage/>     
    return(
        <>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/Admin" element={<MainPanel/>}/>
                <Route path="/report" element={<Reporting/>} />
                <Route path="/requests" element={<Request/>}/>
                <Route path="/showReports" element={<ShowAllReports/>}/>
                <Route path="/showSummaryReport" element={<SummaryReport/>}/>
                <Route path="/Admin/EmplyeesList" element={<EmployeesList/>}/>
                <Route path="/AddShift" element={<AddShift/>}/>
                <Route path="/Admin/Companies" element={<Companies/>}/>
                <Route path="/Admin/reports" element={<AdminReports/>}/>
                <Route path="/Admin/reporting" element={<AdminReporting/>}/>
                <Route path="/Admin/VacationRequests" element={<VacationRequests/>}/>
                <Route path="/Admin/MissionRequests" element={<MissionRequests/>}/>
                <Route path="/Admin/InAndOutRequests" element={<InAndOutRequests/>}/>
                <Route path="/Admin/shiftslist" element={<ShiftsList/>}/>
                <Route path="/Shifts" element={<Shift/>}/>
                <Route path="/formbuilder/" element={<Home/>}/>
                <Route path="/formbuilder/profile" element={<FormbuilderProfile/>}/>
                <Route path="/formbuilder/team" element={<FormbuilderTeam/>}/>
                <Route path="/formbuilder/settings" element={<FormbuilderSettings/>}/>
            </Routes>
        </>
    )
}
export default App;