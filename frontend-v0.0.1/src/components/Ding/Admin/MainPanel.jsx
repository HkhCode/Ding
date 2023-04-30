import React from "react";
import '../styles/MainPanel.css';
import '../styles/all.css';
import NavBar from "./NavBar";
import Details from "./Details";

import AdminAside from "./AdminAside";

const MainPanel = () => {
    return (
        <React.Fragment>
            <div className="container">
                <AdminAside/>
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
                    <Details />
                </div>
            </div>
            


        </React.Fragment>
    )
}

export default MainPanel;