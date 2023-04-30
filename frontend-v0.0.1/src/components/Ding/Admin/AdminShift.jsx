import React from "react";
import '../styles/MainPanel.css';
import '../styles/all.css';
import NavBar from "./NavBar";
import AdminAside from "./AdminAside";
import '../styles/AdminShifts.css';
import { useNavigate } from "react-router-dom";


const Shift = () => {
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
                    <h2>لیست شیفت ها</h2>
                    <button onClick={()=> navigate('/AddShift')} className="AdminAddShiftBtn">افزودن شیفت</button>
                    <table>
                        <thead>
                            <tr>
                                <th>شماره</th>
                                <th>تیتر</th>
                                <th>مشاهده</th>
                                <th>ویرایش</th>
                                <th>حذف</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>دفتر مرکزی</td>
                                <td>مشاهده</td>
                                <td>ویرایش</td>
                                <td>حذف</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>دفتر مرکزی</td>
                                <td>مشاهده</td>
                                <td>ویرایش</td>
                                <td>حذف</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>دفتر مرکزی</td>
                                <td>مشاهده</td>
                                <td>ویرایش</td>
                                <td>حذف</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>دفتر مرکزی</td>
                                <td>مشاهده</td>
                                <td>ویرایش</td>
                                <td>حذف</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>دفتر مرکزی</td>
                                <td>مشاهده</td>
                                <td>ویرایش</td>
                                <td>حذف</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Shift;