import React from "react";
import '../styles/MainPanel.css';
import '../styles/all.css';
import NavBar from "./NavBar";
const open = () => {
    document.getElementById('companyList').style.display = 'block';
}
const close = () => {
    document.getElementById('companyList').style.display = 'none';
}
const MainPanel = () => {
    return(
        <React.Fragment>
            <div className="container">
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
                            <li><a href="#">کسب و کار</a></li>
                            <li>لیست کارمندان</li>
                            <li>لیست شیفت ها</li>
                            <li>گزارش ها</li>
                            <li>گزارش گیری</li>
                            <li>لیست درخواست ها</li>
                            <li>لیست دستگاه ها</li>
                        </ul>
                    </div>
                    <div className="footer">خروج</div>
                </div>
                <div className="navbar">
                    <span className="userDetails"><img src=""/><span className="NameAndNumber">
                        <div>
                            +989126283181    
                        </div>    
                        <div>
                            حسین خادم
                        </div>
                    </span></span>
                </div>
            </div>
            <NavBar/>
        </React.Fragment>
    )
}

export default MainPanel;