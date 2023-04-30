import React from "react";
import AdminAside from "./AdminAside";
import NavBar from "./NavBar";
import '../styles/EmployeesList.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const showWorkFlow = (workFlowCode) => {
    console.log("OK")
    if(workFlowCode === 1) {return "فروشنده"}
    else if(workFlowCode === 2) {return "مدیر میانی"}
    else if(workFlowCode === 3) {return "منشی دفتر"}
    else if(workFlowCode === 4) {return "واحد کامپیوتر"}
    else if(workFlowCode === 5) {return "منابع انسانی"}
    else if(workFlowCode === 6) {return "مدیریت"}
    else {return "واحد شغلی تعریف نشده"}
}
const EmployeesList = () => {
    const [employeesData , setEmployeesData] = useState([
        {
            fullname : "حسین خادم",
            status : 1 , 
            workflowtitle : "فروشنده" , 
        },
        {
            fullname : "حسین خادم",
            status : 1 , 
            workflowtitle : "مدیر میانی" , 
        },
        {
            fullname : "حسین خادم",
            status : 1 , 
            workflowtitle : "مدیر میانی" , 
        },
        {
            fullname : "حسین خادم",
            status : 1 , 
            workflowtitle : "واحد کامپیوتر" , 
        },
    ])
    const navigate = useNavigate();
    return (
        <div className="container">
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
                    <h2>لیست کارمندان</h2>
                    <button className="addEmployee" onClick={()=> {navigate()}}>
                        افزودن کارمند
                    </button>
                    <table>
                        <thead>
                            <tr>
                                <th>شماره</th>
                                <th>نام و نام خانوادگی</th>
                                <th>وضعیت</th>
                                <th>جایگاه شغلی</th>
                                <th>مشخصات کارمند</th>
                                <th>ویرایش</th>
                                <th>حذف کارمند</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            </tr>
                            {employeesData.map(item => {
                                return <React.Fragment>
                                    <tr>
                                        <td>{employeesData.indexOf(item)+1}</td>
                                        <td>{item.fullname}</td>
                                        <td>{item.status == 1 ? "فعال" : "غیر فعال"}</td>
                                        <td>{item.workflowtitle}</td>
                                    <td>مشاهده</td>
                                    <td>ویرایش</td>
                                    <td>حذف</td>
                                    </tr>
                                </React.Fragment>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmployeesList;