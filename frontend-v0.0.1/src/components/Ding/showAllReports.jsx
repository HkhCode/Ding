import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Aside from "./Aside";
import './styles/showAllReports.css';
const months = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
const weekDays = ["شنبه" , "یک شنبه" , "دوشنبه" , "سه شنبه" , "چهارشنبه" , "پنج شنبه" , "جمعه"];
const baseUrl = "http://localhost:5015/api/";
const ShowAllReports = () => {
    const navigate = useNavigate();
    const [preferentialReports, setPreferentialReports] = useState([{
        date: "1400/02/02",
        inHour: "12:00",
        outHour: "14:00",
        workedTime: "02:00"
    }, {
        date: "1400/03/02",
        inHour: "12:00",
        outHour: "14:00",
        workedTime: "02:00"
    }, {
        date: "1400/04/02",
        inHour: "12:00",
        outHour: "14:00",
        workedTime: "02:00"
    }, {
        date: "1400/05/02",
        inHour: "12:00",
        outHour: "14:00",
        workedTime: "02:00"
    },
    ]);
    const location = useLocation();
    const startDate = location.state.start;
    const endDate = location.state.end;
    React.useEffect(() => {
        axios.get(baseUrl + 'inandout' /*,{
            startDate : "2023-04-26",
            endDate : "2023-04-28" ,
            userId : 3,
            userName : "Hosein"
          }*/).then(resp => console.log(resp.data))
    }, [])
    return (<React.Fragment>
        <div className="container">

            <div className="nav">
                <div className="ReportingTitle">
                    گزارش تفضیلی
                </div>
            </div>
            <div className="aside">
                <Aside index={2} />
            </div>

            <div className="reportPartsContainer">
                <div className="showAllReportsUserDetails">
                    <p> <span style={{ fontWeight: "bold" }}>نام : </span> <span style={{ float: "left" }}> حسین خادم</span></p>
                    <p> <span style={{ fontWeight: "bold" }}>تاریخ : </span> <span style={{ float: "left" }}>1400-2-2</span></p>
                </div>
                {
                    preferentialReports.length == 0 ? <h1>No DATA</h1> : preferentialReports.map((item) => {
                        return (<div className="reportPart">
                            <div className="ReportDate">
                                <p>{weekDays[item.date.slice(8)-1]} {parseInt(item.date.slice(8, 10))} {months[parseInt(item.date.slice(5, 7)) - 1]} {item.date.slice(0, 4)}</p>
                                <p></p>
                            </div>
                            <div className="startAndEndDate">
                                <p>ورود : {item.inHour}</p>
                                <p>
                                    خروج : {item.outHour}
                                </p>
                            </div>
                            <div className="arrowButtonSection">
                                {">"}
                            </div>
                            <div className="sumWorkingHour">
                                <p>مجموع ساعات کاری  </p>
                                <p>{item.workedTime}</p>
                            </div>

                        </div>)
                    })

                }
            </div>
        </div>
    </React.Fragment>
    );
}

export default ShowAllReports;