import React from "react";
import '../styles/MainPanel.css';
import '../styles/all.css';
import { Link } from 'react-router-dom'
const open = () => {
    document.getElementById('companyList').style.display = 'block';
}
const close = () => {
    document.getElementById('companyList').style.display = 'none';
}
const showRequestTypes = () => {
    let options = document.getElementsByClassName("requestSecondaryOptions");
    for (let i = 0; i < options.length; i++) {
        options[i].style.display = "block";
    }
    document.getElementById("footer").style.marginTop = "143px";
}
const closeRequestTypes = () => {
    let options = document.getElementsByClassName("requestSecondaryOptions");
    for (let i = 0; i < options.length; i++) {
        options[i].style.display = "none";
    }
    document.getElementById("footer").style.marginTop = "280px";
}
const AdminAside = () => {
    return (
        <div className="aside">
            <div className="header">
                <p>شرکت فعال : شرکت 1</p>
                <div className="CompanySelector" onClick={open}>
                    تغییر شرکت
                </div>
                <div id="companyList" className="companyList">
                    <ul>
                        <li><i class="fa-solid fa-building icon"></i>شرکت 1</li>
                        <li><i class="fa-solid fa-building icon"></i>شرکت 2</li>
                        <li><i class="fa-solid fa-building icon"></i>
                            شرکت 3
                        </li>
                        <li onClick={close}><i class="fa-sharp fa-solid fa-square-xmark icon"></i>بستن</li>
                    </ul>
                </div>
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="/Admin"><i class="fa-solid fa-house icon"></i>خانه</Link></li>
                    <li><Link to="/Admin/Companies"><i class="fa-solid fa-money-bill-1 icon"></i>کسب و کار</Link></li>
                    <li><Link to="/Admin/emplyeeslist"><i class="fa-solid fa-users icon"></i>لیست کارمندان</Link></li>
                    <li><Link to="/Admin/shiftslist"><i class="fa-solid fa-clock icon"></i>لیست شیفت ها</Link></li>
                    <li><Link to="/Admin/reports"><i class="fa-solid fa-chart-column icon"></i>گزارش ها</Link></li>
                    <li><Link to="/admin/reporting"><i class="fa-solid fa-paste icon"></i>گزارش گیری</Link></li>
                    <div className="requestsListAdmin" onMouseEnter={showRequestTypes} onMouseLeave={closeRequestTypes}><Link to=""><i class="fa-solid fa-server icon"></i>لیست درخواست ها</Link>
                        <li className="requestSecondaryOptions"><Link to="/Admin/VacationRequests">مرخصی</Link></li>
                        <li className="requestSecondaryOptions"><Link to="/Admin/InAndOutRequests">ورود و خروج</Link></li>
                        <li className="requestSecondaryOptions"><Link to="/Admin/MissionRequests">ماموریت</Link></li></div>
                </ul>
            </div>
            <div className="footer" id="footer">خروج</div>
        </div>
    )
}

export default AdminAside;