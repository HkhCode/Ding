import React, { useState } from "react";
import '../styles/MainPanel.css';
import '../styles/all.css';
import NavBar from "./NavBar";
import AdminAside from "./AdminAside";
import '../styles/Companies.css';
import { Link, useNavigate } from "react-router-dom";


const Companies = () => {
    const navigate = useNavigate();
    const [currentCompany , setCurrentCompany] = useState(null);
    const [cities, setCities] = useState([{ id: "1", name: "رباط کریم" }, { id: "2", name: "شهریار" }, { id: "3", name: "اسلامشهر" }])
    const [countries, setCountries] = useState([{ id: "1", name: "تهران" }, { id: "2", name: "البرز" }, { id: "3", name: "تبریز" }])
    const [bussinessTypes, setBussinessTypes] = useState([{ id: "1", name: "آبمیوه و بستنی" }, { id: "2", name: "فروشگاه لباس" }, { id: "3", name: "کارخانه" }])
    const [companies, setCompanies] = useState([{
        Title: "بارگلو",
        country: "تهران",
        city: "تهران",
        bussinessType: "برند لوازم ارایشی",
        submitDate: "1400-2-2",
    }])
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
            <div className="companiesSection">
                <div className="editCompanyBox" id="editCompanyBox">
                    <div className="editCompanyBoxHeader">
                        <p>ویرایش کسب و کار</p>
                    </div>
                    <label>نام کسب و کار</label>
                    <input type="text" placeholder={currentCompany} id="bussinessName" />
                    <label>
                        نوع کسب و کار
                    </label>
                    <select>
                        {
                            bussinessTypes.map((item) => <option value={item.id}>{item.name}</option>)
                        }
                    </select>
                    <label>
                        استان
                    </label>
                    <select>
                        {
                            countries.map((item) => <option value={item.id}>{item.name}</option>)
                        }
                    </select>
                    <label>
                        شهر
                    </label>
                    <select>
                        {
                            cities.map((item) => <option value={item.id}>{item.name}</option>)
                        }
                    </select>
                    <button className="openEditCompanyBox">
                        ذخیره
                    </button>
                    <button className="closeEditCompanyBox" onClick={() => document.getElementById("editCompanyBox").style.display = "none"}>
                        بستن
                    </button>
                </div>
                <div className="editCompanyManager" id="editCompanyManager">
                    <div className="editCompanyBoxHeader">
                        <p>بررسی شماره</p>
                    </div>
                    <input type="text" placeholder="09XXXXXXXXX"/>
                    <button className="openEditCompanyBox">
                        ذخیره
                    </button>
                    <button className="closeEditCompanyBox" onClick={() => document.getElementById("editCompanyManager").style.display = "none"}>
                        بستن
                    </button>
                </div>
                <div className="editCompanyManager" id="editCompanyManagerStatus">
                    <div className="editCompanyBoxHeader">
                        <p>تغییر وضعیت مدیر</p>
                    </div>
                    <p>آیا مایل به تغییر وضعیت مدیر هستید ؟</p>
                    <button className="openEditCompanyBox">
                        بله
                    </button>
                    <button className="closeEditCompanyBox" onClick={() => document.getElementById("editCompanyManagerStatus").style.display = "none"}>
                        خیر
                    </button>
                </div>
                <h2>لیست کسب و کار ها</h2>
                <table>
                    <thead>
                        <tr>
                            <th>
                                شماره
                            </th>
                            <th>
                                تیتر
                            </th>
                            <th>
                                استان
                            </th>
                            <th>
                                شهر
                            </th>
                            <th>نوع تجارت</th>
                            <th>
                                تاریخ ثبت
                            </th>
                            <th>
                                شیفت ها
                            </th>
                            <th>
                                کارمندان
                            </th>

                            <th>
                                ویرایش
                            </th>
                            <th>
                                تغییر مدیر
                            </th>
                            <th>
                                مدیر کارمند
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            companies.map((item) => {
                                let count = companies.indexOf(item) + 1
                                return (
                                    <tr>
                                        <td>
                                            {count}
                                        </td>
                                        <td>
                                            {item.Title}
                                        </td>
                                        <td>
                                            {item.country}
                                        </td>
                                        <td>{item.city}</td>
                                        <td>
                                            {item.bussinessType}
                                        </td>
                                        <td>
                                            {item.submitDate}
                                        </td>
                                        <td><p onClick={() => navigate("/Admin/shifts")}>مشاهده</p></td>
                                        <td><p onClick={() => navigate("/Admin/EmplyeesList", { state: { currentCompany: item.Title } })}>مشاهده</p></td>
                                        <td><p onClick={() => {setCurrentCompany(item.Title)
                                            document.getElementById("editCompanyBox").style.display = "block";
                                        }}>ویرایش</p></td>
                                        <td><p onClick={() => document.getElementById("editCompanyManager").style.display = "block"}>تغییر مدیر</p></td>
                                        <td><p onClick={() => document.getElementById("editCompanyManagerStatus").style.display = "block"}>خیر</p></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>);
}
export default Companies;