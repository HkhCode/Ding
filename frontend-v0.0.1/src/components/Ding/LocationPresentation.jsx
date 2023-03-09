import React from "react";
import "./styles/LocationPre.css";
const LocationPre = () => {
    return <React.Fragment>
        <div className="LocationTitle">
            اپال
        </div>
        <div className="mapSection">

        </div>
        <div className="timeShow">
            <p>ورورد در ساعت 9:10</p>
            <p>خروج در ساعت 12:00</p>
        </div>
        <div className="ButtonsSection">
            <div className="entrance">ورورد</div>
            <div className="exit">خروج</div>
        </div>
    </React.Fragment>
}

export default LocationPre;