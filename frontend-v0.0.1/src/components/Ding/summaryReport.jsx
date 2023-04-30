import React, { useState } from "react";
import './styles/summaryReports.css';
import Aside from "./Aside";
import { useNavigate } from "react-router-dom";
import { motorcycle } from "fontawesome";
const dateParser = (date) => {
    // date : yyyy/mm/dd
    let result;
    result += date.slice(0 , 4);
    result += " ";
    let month = date.slice(5 , 7);
    if (month === "01"){
        result += "فروردین"
    } else if(month === "02") {
        result += "اردیبهشت"
    } else if(month === "03") {
        result += "خرداد"
    } else if(month === "04") {
        result += "تیر"
    } else if(month === "05") {
        result += "مرداد"
    } else if(month === "06") {
        result += "شهریور"
    } else if(month === "07") {
        result += "مهر"
    } else if(month === "08") {
        result += "آبان"
    } else if(month === "09") {
        result += "آذر"
    } else if(month === "10") {
        result += "دی"
    } else if(month === "11") {
        result += "بهمن"
    } else if(month === "12") {
        result += "اسفند"
    } else {
        alert("خطا در کامپایل نرم افزار")
    }
}
const SummaryReport = () => {
    const [date , setDate] = useState(dateParser("1400/02/02"))
    const dateTypeSetter = (type) => {
        console.log("OK")
        const navigate = useNavigate();
        if (type === 1) {

        } else if (type === 2) {

        } else if (type === undefined) {
            navigate("/report");
        } else {
            alert("خطا هنگام کامپایل نرم افزار");
        }
    }
    { dateTypeSetter(undefined) }
    return (
        <React.Fragment>
            <div className="container">
                <div className="aside">
                    <Aside index={2} />
                </div>
                <div className="nav">
                    <div className="titles">
                        گزارش خلاصه
                    </div>
                </div>
                <div className="summaryReportSection">
                    <div className="userAndReportsSection">
                        <div className="reportTakerFullName">نام کارمند</div>
                        <div className="reportTakerFullNameValue">حسین خادم</div>
                        <div className="reportTakerFullName">تاریخ درخواست</div>
                        <div className="reportTakerFullNameValue">اردیبهشت/1400</div>
                    </div>

                    <div className="summaryReportDataRow">
                        <span className="summaryReportDataRowTitle">مجموع ساعات طول شیفت</span>
                        <span className="summaryReportDataRowData">00:00</span>
                    </div>
                    <div className="summaryReportDataRow">
                        <span className="summaryReportDataRowTitle">مجموع ساعات کارکرد</span>
                        <span className="summaryReportDataRowData">00:00</span>
                    </div>

                    <div className="summaryReportDataRow">
                        <span className="summaryReportDataRowTitle">مجموع ساعات تاخیر در ورود</span>
                        <span className="summaryReportDataRowData">00:00</span>
                    </div>

                    <div className="summaryReportDataRow">
                        <span className="summaryReportDataRowTitle">مجموع ساعات طول شیفت</span>
                        <span className="summaryReportDataRowData">00:00</span>
                    </div>

                    <div className="summaryReportDataRow">
                        <span className="summaryReportDataRowTitle">مجموع ساعات تعجیل در خروج</span>
                        <span className="summaryReportDataRowData">00:00</span>
                    </div>
                    <div className="summaryReportDataRow">
                        <span className="summaryReportDataRowTitle">مجموع ساعات غیبت</span>
                        <span className="summaryReportDataRowData">00:00</span>
                    </div>
                    <div className="summaryReportDataRow">
                        <span className="summaryReportDataRowTitle">مجموع ساعات اضافه کار</span>
                        <span className="summaryReportDataRowData">00:00</span>
                    </div>
                    <div className="summaryReportDataRow">
                        <span className="summaryReportDataRowTitle">مجموع ساعات ماموریت</span>
                        <span className="summaryReportDataRowData">00:00</span>
                    </div>
                    <div className="summaryReportDataRow">
                        <span className="summaryReportDataRowTitle">مجموع روز های ماموریت</span>
                        <span className="summaryReportDataRowData">00:00</span>
                    </div>
                    <div className="summaryReportDataRow">
                        <span className="summaryReportDataRowTitle">مجموع ساعات مرخصی ساعتی</span>
                        <span className="summaryReportDataRowData">00:00</span>
                    </div>
                    <div className="summaryReportDataRow" style={{borderBottom : "1px solid rgb(235, 237, 237)"}}>
                        <span className="summaryReportDataRowTitle">مجموع روز های مرخصی</span>
                        <span className="summaryReportDataRowData">00:00</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default SummaryReport;