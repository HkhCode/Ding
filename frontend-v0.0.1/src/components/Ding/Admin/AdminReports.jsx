import React, { useState } from "react";
import '../styles/MainPanel.css';
import '../styles/all.css';
import NavBar from "./NavBar";
import AdminAside from "./AdminAside";
import '../styles/EmployeesList.css';
const AdminReports = () => {
    const[reports , setReports] = useState([
        {
            fullName : "حسین خادم",
            requestDate : "1400-2-2",
            doneDate : "1400-2-2",
            startDate: "1400-2-2",
            endDate : "1400-2-2",
            reporttType : "تفضیلی",
            reportStatus : "بررسی شده",
            reportCSVFile: [],
            reportExcelFile:[],
            reporttPDFFile : []
        },
        {
            fullName : "کارمند تست",
            requestDate : "1400-2-2",
            doneDate : "1400-2-2",
            startDate: "1400-2-2",
            endDate : "1400-2-2",
            reporttType : "تفضیلی",
            reportStatus : "بررسی شده",
            reportCSVFile: [],
            reportExcelFile:[],
            reporttPDFFile : []
        },
        {
            fullName : "کارمند 1",
            requestDate : "1400-2-2",
            doneDate : "1400-2-2",
            startDate: "1400-2-2",
            endDate : "1400-2-2",
            reporttType : "تفضیلی",
            reportStatus : "بررسی شده",
            reportCSVFile: [],
            reportExcelFile:[],
            reporttPDFFile : []
        },
    ])
    return (<div className="container">
        <AdminAside />
        <div className="navbar">
            <span className="userDetails"><img src="" /><span className="NameAndNumber">
                <div className="nameAndPhoneCenter">
                    09126283181 - حسین خادم
                </div>
            </span></span>
        </div>
        <div className="navSection">
            <NavBar />
        </div>
        <div className="DetailsSection">
            <div className="employeesListSection">
                <table>
                    <thead>
                        <tr>
                            <th>شماره</th>
                            <th>نام کارمند</th>
                            <th>تاریخ درخواست</th>
                            <th>تاریخ انجام</th>
                            <th>تاریخ شروع</th>
                            <th>تاریخ پایان</th>
                            <th>نوع گزارش</th>
                            <th>وضعیت</th>
                            <th>نام مدیر</th>
                            <th>View</th>
                            <th>PDF</th>
                            <th>Excel</th>
                            <th>CSV</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reports.map((item) => {
                                let count = (reports.indexOf(item))+1
                                return(
                                    <tr>
                                        <td>{count}</td>
                                        <td>{item.fullName}</td>
                                        <td>{item.requestDate}</td>
                                        <td>{item.doneDate}</td>
                                        <td>{item.startDate}</td>
                                        <td>{item.endDate}</td>
                                        <td>{item.reporttType}</td>
                                        <td>{item.reportStatus}</td>
                                        <td>حسین خادم</td>
                                        <td><i class="fa-solid fa-eye"></i></td>
                                        <td><i class="fa-solid fa-file-pdf"></i></td>
                                        <td><i class="fa-solid fa-file-excel"></i></td>
                                        <td><i class="fa-solid fa-file-csv"></i></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>)
}

export default AdminReports;