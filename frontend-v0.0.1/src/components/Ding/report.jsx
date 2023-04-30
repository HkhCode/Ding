import axios from "axios";
import React, { useState } from "react";
import Aside from "./Aside";
import './styles/report.css';
import { Link, useNavigate } from "react-router-dom";


const baseUrl = "http://localhost:5015/api/";

const selectTimeType = (type) => {


    // 1 => monthly , 2 => custom


    let monthlyTimeTypeElement = document.getElementById("monthlyTimeType");
    let customTimeTypeElement = document.getElementById("custoTimeType");
    let monthlyReportTitle = document.getElementById("montlyReportTitle");

    let customTimeTypeSection = document.getElementById("customTypeSection");
    let monthlyTimeTypeSection = document.getElementById("monthlyTimeTypeSection");
    if (type === 1) {
        monthlyTimeTypeElement.classList.add("activeTimeType");
        customTimeTypeElement.classList.remove("activeTimeType");
        customTimeTypeSection.classList.add("hidden");
        monthlyTimeTypeSection.classList.remove("hidden");
        monthlyReportTitle.classList.remove("hidden");
    } else if (type === 2) {
        monthlyTimeTypeElement.classList.remove("activeTimeType");
        customTimeTypeElement.classList.add("activeTimeType");
        customTimeTypeSection.classList.remove("hidden");
        monthlyTimeTypeSection.classList.add("hidden");
        monthlyReportTitle.classList.add("hidden");
    } else {
        alert("خطا هنگام کامپایل نرم افزار")
    }
}
const Reporting = () => {
    const [user, setUser] = useState({ username: null });
    const [reports, setReports] = useState([]);
    const navigate = useNavigate();
    const goToReports = () => {
        let starting = ""
        let ending = ""

        starting += document.getElementById('startYear').value;
        starting += "/";
        starting += document.getElementById("startMonths").value;
        starting += "/";
        starting += document.getElementById("startDay").value;

        ending += document.getElementById("endYear").value;
        ending += "/";
        ending += document.getElementById("endMonths").value;
        ending += "/";
        ending += document.getElementById("endDay").value;

        navigate('/showReports', { state: { start: starting, end: ending } })
    }
    const goToReportsSummary = () => {
        let starting = ""
        let ending = ""

        starting += document.getElementById('startYear').value;
        starting += "/";
        starting += document.getElementById("startMonths").value;
        starting += "/";
        starting += document.getElementById("startDay").value;

        ending += document.getElementById("endYear").value;
        ending += "/";
        ending += document.getElementById("endMonths").value;
        ending += "/";
        ending += document.getElementById("endDay").value;

        navigate('/showSummaryReport', { state: { start: starting, end: ending } })
    }
    React.useEffect(() => {
        axios.get(baseUrl + "usercontrolls").then(resp => { setUser(resp.data) })
    });
    return (<React.Fragment>
        <div className="container">

            <div className="nav">
                <div className="ReportingTitle">
                    گزارش
                </div>
            </div>
            <div className="aside">
                <Aside index={2} />
            </div>
            <div className="reportSection">
                <div className="nameSection">
                </div>
                <div className="dateSetting">
                    <p className="reportingUsernameSection">نام شما : {user.username}</p>
                    <div className="selectTimeType">
                        <span className="CustomDate" id="custoTimeType" onClick={() => { selectTimeType(2) }}>سفارشی</span>
                        <span className="MonthlyDate activeTimeType" id="monthlyTimeType" onClick={() => { selectTimeType(1) }}>ماهانه</span>
                    </div>
                    <div id="customTypeSection" className="hidden">
                        <span className="startingDate">
                            <p className="fromToDate">از تاریخ</p>
                            <div className="inputsSection">
                                <input type="number" name="day" id="startDay" placeholder="روز" />
                                <select id="startMonths" >
                                    <option value="01">فروردین</option>
                                    <option value="02">اردیبهشت</option>
                                    <option value="03">خرداد</option>
                                    <option value="04">تیر</option>
                                    <option value="05">مرداد</option>
                                    <option value="06">شهریور</option>
                                    <option value="07">مهر</option>
                                    <option value="08">آبان</option>
                                    <option value="09">آذر</option>
                                    <option value="10">دی</option>
                                    <option value="11">بهمن</option>
                                    <option value="12">اسفند</option>

                                </select>
                                <input type="number" id="startYear" name="year" placeholder="سال" />
                            </div>
                        </span>
                        <span className="startingDate"><p className="fromToDate">تا تاریخ</p>
                            <div className="inputsSection">
                                <input type="number" name="day" id="endDay" placeholder="روز" />
                                <select id="endMonths" >
                                    <option value="01">فروردین</option>
                                    <option value="02">اردیبهشت</option>
                                    <option value="03">خرداد</option>
                                    <option value="04">تیر</option>
                                    <option value="05">مرداد</option>
                                    <option value="06">شهریور</option>
                                    <option value="07">مهر</option>
                                    <option value="08">آبان</option>
                                    <option value="09">آذر</option>
                                    <option value="10">دی</option>
                                    <option value="11">بهمن</option>
                                    <option value="12">اسفند</option>
                                </select>
                                <input type="number" name="year" id="endYear" placeholder="سال" />
                            </div>
                        </span>
                    </div>
                    <p className="fromToDate" style={{textAlign : "center"}} id="montlyReportTitle">گزارش ماهانه</p>
                    <div id="monthlyTimeTypeSection">
                        <select id="monthlyMonths" >
                            <option value="01">فروردین</option>
                            <option value="02">اردیبهشت</option>
                            <option value="03">خرداد</option>
                            <option value="04">تیر</option>
                            <option value="05">مرداد</option>
                            <option value="06">شهریور</option>
                            <option value="07">مهر</option>
                            <option value="08">آبان</option>
                            <option value="09">آذر</option>
                            <option value="10">دی</option>
                            <option value="11">بهمن</option>
                            <option value="12">اسفند</option>
                        </select>
                        <input type="number" name="year" id="monthlyYears" placeholder="سال" />
                    </div></div>

            </div>
            <div id="reportingButtonsSection">
                <button className="summaryReport" onClick={() => { goToReportsSummary() }}>گزارش خلاصه</button>
                <button className="allReport" onClick={() => { goToReports() }}>گزارش تفضیلی</button>
            </div>
        </div>
    </React.Fragment>);

}

export default Reporting;