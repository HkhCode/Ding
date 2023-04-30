import React from "react";
import './styles/Formbuilder.Navbar.css';
import { Link } from "react-router-dom";
const showMenu = (mode) => {
    if (mode ==1){
        document.getElementById('userMenu').style.display = 'block';
    }
    else if (mode == 2){
        document.getElementById('userMenu').style.display = 'none';
    }
}
const FormbuilderNavbar = () => {
    return (<React.Fragment>
        <div className="navbar">
            <div className="rightSide">فرم ساز</div>
            <div className="leftSide" onMouseOver={()=> showMenu(1)} onMouseLeave={()=>showMenu(2)}><Link to=""><i class="fa-solid fa-user"></i></Link></div>
            <div className="userMenu" onMouseOver={()=> showMenu(1)} onMouseLeave={()=>showMenu(2)} id="userMenu">
                <ul>
                    <li>
                        <div className="profileSection"><i class="fa-solid fa-user"></i><span className="profileData">حسین خادم<br/><span className="gmailSection">hkh.2003.1381@gmail.com</span> </span></div>
                    </li>
                    <li>
                        <Link to='/formbuilder/profile'><i class="fa-solid fa-address-card"></i>پروفایل</Link>
                    </li>
                    <li>
                        <Link to='/formbuilder'><i class="fa-solid fa-table-columns"></i>داشبورد</Link>
                    </li>
                    <li>
                        <Link to='/formbuilder/team'><i class="fa-solid fa-users"></i>اعضای تیم</Link>
                    </li>
                    <li>
                        <Link to='/formbuilder/settings'><i class="fa-solid fa-gear"></i>تنظیمات</Link>
                    </li>
                </ul>
            </div>
        </div>
    </React.Fragment>
    )
}

export default FormbuilderNavbar;