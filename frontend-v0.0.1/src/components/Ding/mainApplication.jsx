import React from "react";
import './styles/mainApplicationStyles.css';
import LocationPre from "./LocationPresentation";
import pointericon from "../../icons/pointer.png";
import closeicon from "../../icons/close.png";
const MainApplication = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="aside">
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
                </div>
                <div className="nav">
                    <div className="titles">
                        ثبت ورود و خروج
                    </div>
                </div>
                <div className="LoationSection">
                    <LocationPre/>
                </div>

            </div>
        </React.Fragment>
    )
}
export default MainApplication;