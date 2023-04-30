import React from "react";
import AdminAside from "./AdminAside";
import NavBar from "./NavBar";
import '../styles/MainPanel.css';
import '../styles/all.css';
import '../styles/EmployeesList.css';
const VacationRequests = () => {
    return(
        <div className="container">
        <AdminAside/>
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
                            <th>تاریخ ارسال درخواست</th>
                            <th>تاریخ درخواستی</th>
                            <th>تاریخ بررسی</th>
                            <th>نوع</th>
                            <th>وضعیت</th>
                            <th>پیام</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>حسین خادم</td>
                            <td>1400-2-2</td>
                            <td>1400-2-2</td>
                            <td>1400-2-2</td>
                            <td>مرخصی استحقاقی</td>
                            <td>بررسی شده</td>
                            <td>مشاهده</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>حسین خادم</td>
                            <td>1400-2-2</td>
                            <td>1400-2-2</td>
                            <td>1400-2-2</td>
                            <td>مرخصی استحقاقی</td>
                            <td>بررسی شده</td>
                            <td>مشاهده</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>حسین خادم</td>
                            <td>1400-2-2</td>
                            <td>1400-2-2</td>
                            <td>1400-2-2</td>
                            <td>مرخصی استحقاقی</td>
                            <td>بررسی شده</td>
                            <td>مشاهده</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>حسین خادم</td>
                            <td>1400-2-2</td>
                            <td>1400-2-2</td>
                            <td>1400-2-2</td>
                            <td>مرخصی استحقاقی</td>
                            <td>بررسی شده</td>
                            <td>مشاهده</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>حسین خادم</td>
                            <td>1400-2-2</td>
                            <td>1400-2-2</td>
                            <td>1400-2-2</td>
                            <td>مرخصی استحقاقی</td>
                            <td>بررسی شده</td>
                            <td>مشاهده</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
}

export default VacationRequests;