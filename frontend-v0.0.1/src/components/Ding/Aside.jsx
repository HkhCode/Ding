import React, { useEffect, useState } from "react";
import './styles/Asidestyles.css';
import './styles/all.css';
import { Link, useLocation } from "react-router-dom";
import logo from '../../logos/srmLogo.png';

const Aside = (props) => {
    const [isHidden , setIsHidden] = useState(true);
    const [selectedOption , setSelectedOption] = useState(props.index)
    const handleOpen = () => {
        setIsHidden(false);
    }
    const handleClose = () => {
        setIsHidden(true);
    }
    return (
        <React.Fragment>
            <img src={logo} className="srmLogoAside" alt="logo"/>
            <p className="dashboord">داشبورد</p>
            <div className="menu">
                <ul>
                    <li id="homePageLink"><Link to="/"><i className="fa-solid fa-users-viewfinder icon" style={selectedOption === 1 ? {color : "rgb(160,167,170)"} : null}></i><span className="linktext" style={selectedOption === 1 ? {color : "rgb(160,167,170)"} : null}>ثبت ورود و خروج</span></Link></li>
                    <li id="reportsLink"><Link to="/report"><i className="fas fa-chart-bar icon" style={selectedOption === 2 ? {color : "rgb(160,167,170)"} : null}></i><span className="linktext" style={selectedOption === 2 ? {color : "rgb(160,167,170)"} : null}>گزارش</span></Link></li>
                    <li id="requestsLink"><Link to="/requests"><i className="fas fa-server icon" style={selectedOption === 3 ? {color : "rgb(160,167,170)"} : null}></i><span className="linktext" style={selectedOption === 3 ? {color : "rgb(160,167,170)"} : null}>درخواست ها</span></Link></li>
                    <li className="hideli" id="shiftsLink"><Link to="/shifts"><i className="fa-solid fa-clock icon" style={selectedOption === 4 ? {color : "rgb(160,167,170)"} : null}></i><span className="linktext" style={selectedOption === 4 ? {color : "rgb(160,167,170)"} : null}>شیفت های من</span></Link></li>
                    <li className="hideli" id="reporting"><Link to="/supporting"><i className="fa-sharp fa-solid fa-user-tie icon" style={selectedOption === 5 ? {color : "rgb(160,167,170)"} : null}></i><span className="linktext" style={selectedOption === 5 ? {color : "rgb(160,167,170)"} : null}>پشتیبانی</span></Link></li>
                    <li className="hideli userSideAsideOption"><Link to="/settings"><i className="fa-sharp fa-solid fa-microchip icon" style={selectedOption === 6 ? {color : "rgb(160,167,170)"} : null}></i><span className="linktext" style={selectedOption === 6 ? {color : "rgb(160,167,170)"} : null}>تنظیمات</span></Link></li>
                    <li>
                        <div className="other">
                            <a href="#" onClick={handleOpen}><i className="fa-solid fa-ellipsis-vertical icon"></i><span className="other-text" >سایر</span></a>
                            <div id="hide" style={{display: isHidden ? 'none' : 'block'}}>
                                <ul>
                                    <li className="small-menu-item"><Link to="/shifts"><i className="fa-solid fa-clock icon"></i><span className="linktext">شیفت های من</span></Link></li>
                                    <li className="small-menu-item"><Link to="/supporting"><i className="fa-sharp fa-solid fa-user-tie icon"></i><span className="linktext">پشتیبانی</span></Link></li>
                                    <li className="small-menu-item"><Link to="/settings"><i className="fa-sharp fa-solid fa-microchip icon"></i><span className="linktext">تنظیمات</span></Link></li> 
                                    <li className="small-menu-item"><a href="#" onClick={handleClose}><i className="fa-sharp fa-solid fa-square-xmark icon"></i><span className="linktext">بستن</span></a></li>  
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="footer CopyRight">
                &copy; Safiran Rayehehsaz Mandeghar
            </div>
        </React.Fragment>
    )
}

export default Aside;
