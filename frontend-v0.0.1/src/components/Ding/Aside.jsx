import React from "react";
import './styles/Asidestyles.css';
import './styles/all.css';
const open = () =>{
 document.getElementById('hide').style.display = 'block';
}
const close = () => {
    document.getElementById('hide').style.display = 'none';
}
const Aside = () => {
    return (<React.Fragment>
        <div className="header">
            داشبورد
        </div>
        <div className="menu">
            <ul>
                <li><a href="#"><i class="fa-solid fa-users-viewfinder icon"></i><span className="linktext">ثبت ورود و خروج</span></a></li>
                <li><a href="#"><i class="fas fa-chart-bar icon"></i><span className="linktext">گزارش</span></a></li>
                <li><a href="#"><i class="fas fa-server icon"></i><span className="linktext">درخواست ها</span></a></li>
                <li className="hideli"><a href="#"><i class="fa-solid fa-clock icon"></i><span className="linktext">شیفت های من</span></a></li>
                <li className="hideli"><a href="#"><i class="fa-sharp fa-solid fa-user-tie icon"></i><span className="linktext">پشتیبانی</span></a></li>
                <li className="hideli"><a href="#"><i class="fa-sharp fa-solid fa-microchip icon"></i><span className="linktext">تنظیمات</span></a></li>
                <li><div className="other"><a href="#" onClick={open}><i class="fa-solid fa-ellipsis-vertical icon"></i><span className="other-text" >سایر</span></a>
                    <div id="hide" >
                        <ul>
                            <li className="small-menu-item"><a href="#"><i class="fa-solid fa-clock icon"></i><span className="linktext">شیفت های من</span></a></li>
                            <li className="small-menu-item"><a href="#"><i class="fa-sharp fa-solid fa-user-tie icon"></i><span className="linktext">پشتیبانی</span></a></li>
                            <li className="small-menu-item"><a href="#"><i class="fa-sharp fa-solid fa-microchip icon"></i><span className="linktext">تنظیمات</span></a></li> 
                            <li className="small-menu-item"><a href="#" onClick={close}><i class="fa-sharp fa-solid fa-square-xmark icon"></i><span className="linktext">بستن</span></a></li>  
                        </ul>
                    </div>
                </div></li>
            </ul>
        </div>
        <div className="footer CopyRight">
            &copy; Safiran Rayehehsaz Mandeghar<br />
            v0.0.1
        </div></React.Fragment>)
}

export default Aside