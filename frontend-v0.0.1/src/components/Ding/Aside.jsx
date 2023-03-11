import React from "react";
import './styles/Asidestyles.css'
const Aside = () => {
    return (<React.Fragment>
        <div className="header">
            داشبورد
        </div>
        <div className="menu">
            <ul>
                <li><a href="#">ثبت ورود و خروج</a></li>
                <li><a href="#">گزارش</a></li>
                <li><a href="#">درخواست ها</a></li>
                <li><a href="#">شیفت های من</a></li>
                <li><a href="#">پشتیبانی</a></li>
                <li><a href="#">تنظیمات</a></li>
            </ul>
        </div>
        <div className="footer CopyRight">
            &copy; Safiran Rayehehsaz Mandeghar<br />
            v0.0.1
        </div></React.Fragment>)
}

export default Aside