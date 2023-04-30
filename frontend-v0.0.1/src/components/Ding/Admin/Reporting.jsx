import React from "react";
import '../styles/MainPanel.css';
import '../styles/all.css';
import AdminAside from "./AdminAside";
import '../styles/AdminReporting.css';
const openChooseUserDialog = () => {
    document.getElementsByClassName("ChooseUserBox")[0].style.display = "block";
}
const closeChooseUserDialog = () => {
    document.getElementsByClassName("ChooseUserBox")[0].style.display = "none";
}
const AdminReporting = () => {
    return (<div className="container">
        <AdminAside />
        <div className="navbar">
            <span className="userDetails"><img src="" /><span className="NameAndNumber">
                <div className="nameAndPhoneCenter">
                    09126283181 - حسین خادم
                </div>
            </span></span>
        </div>
        <div className="DetailsSection">
            <div className="ChooseUserBox">
                <span className="ChooseUserBoxCloseBtn" onClick={closeChooseUserDialog}>
                    <i class="fa-solid fa-circle-xmark"></i>
                </span>
                <table>
                    <thead>
                        <tr>
                            <th>شماره</th>
                            <th>نام</th>
                            <th>نام خانوادگی</th>
                            <th>شماره پرسنلی</th>
                            <th>کد ملی</th>
                            <th>شماره تماس</th>
                            <th>انتخاب</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>حسین</td>
                            <td>خادم</td>
                            <td>100</td>
                            <td>1000000</td>
                            <td>09123456789</td>
                            <td><input type="checkbox" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="employeesListSection">
                <div className="dateSelectingSection">
                    <div className="dateSelecting">
                        از تاریخ :
                        <input type="number" placeholder="روز" />
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
                        <input type="number" placeholder="سال" />
                    </div>
                    <div className="dateSelecting">
                        تا تاریخ :
                        <input type="number" placeholder="روز" />
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
                        <input type="number" placeholder="سال" />
                    </div>
                    <div className="monthlyReport">
                        <p>انتخاب ماهانه</p>
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
                        <input type="number" placeholder="سال" />
                    </div>
                </div>
                <button className="ChooseUser" onClick={openChooseUserDialog}>
                    <i class="fa-solid fa-user icon"></i>انتخاب کارمند
                </button>
                <button className="AdminSideTakeReport">
                    <i class="fa-solid fa-paste icon"></i> درخواست گزارش
                </button>
                <button className="AdminSideTakeReport">
                    <i class="fa-regular fa-calendar-days icon"></i>درخواست خلاصه گزارش
                </button>
                <button className="AdminSideTakeReport">
                    <i class="fa-solid fa-right-to-bracket icon"></i>درخواست خلاصه گزارش ورود و خروج
                </button>
                <button className="AdminSideTakeReport">
                    <i class="fa-solid fa-couch icon"></i>درخواست خلاصه گزارش مرخصی
                </button>
                <button className="AdminSideTakeReport">
                    <i class="fa-sharp fa-solid fa-list-check icon"></i>درخواست خلاصه گزارش ماموریت
                </button>
                <button className="AdminSideTakeReport">
                    <i class="fa-solid fa-border-all icon"></i>درخواست گزارش جامع
                </button>
            </div>
        </div>
    </div>);
}

export default AdminReporting;