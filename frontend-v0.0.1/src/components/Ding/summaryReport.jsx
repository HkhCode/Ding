import React from "react";
import './styles/summaryReports.css';
import Aside from "./Aside";
import { useNavigate } from "react-router-dom";


const SummaryReport = () => {
    const dateTypeSetter = (type) => {
        console.log("OK")
        const navigate = useNavigate();
        if(type === 1){
    
        } else if(type === 2){
    
        } else if(type === undefined){
            navigate("/report");
        } else {
            alert("خطا هنگام کامپایل نرم افزار");
        }
    }
    {dateTypeSetter(undefined)}
    return (
        <React.Fragment>
            <div className="container">
                <div className="aside">
                    <Aside index={2}/>
                </div>
                <div className="nav">
                    <div className="titles">
                        گزارش خلاصه
                    </div>
                </div>
                <div className="summaryReportSection">
                    <div className="reportTakerFullName">نام کارمند</div>
                    <div className="reportTakerFullNameValue">حسین خادم</div>
                    <div className="reportTakerFullName">تاریخ درخواست</div>
                    <div className="reportTakerFullNameValue">1400/2/2</div><hr />
                    <div className="summaryReportDataRow">
                        <span className="summaryReportDataRowTitle">مجموع ساعات طول شیفت</span>
                        <span className="summaryReportDataRowData">00:00</span>
                    </div>
                    <div className="summaryReportDataRow">
                        <span className="summaryReportDataRowTitle">مجموع ساعات طول شیفت</span>
                        <span className="summaryReportDataRowData">00:00</span>
                    </div>

                    <div className="summaryReportDataRow">
                        <span className="summaryReportDataRowTitle">مجموع ساعات طول شیفت</span>
                        <span className="summaryReportDataRowData">00:00</span>
                    </div>

                    <div className="summaryReportDataRow">
                        <span className="summaryReportDataRowTitle">مجموع ساعات طول شیفت</span>
                        <span className="summaryReportDataRowData">00:00</span>
                    </div>

                    <div className="summaryReportDataRow">
                        <span className="summaryReportDataRowTitle">مجموع ساعات طول شیفت</span>
                        <span className="summaryReportDataRowData">00:00</span>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}
export default SummaryReport;