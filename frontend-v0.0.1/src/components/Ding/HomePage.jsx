import React from "react";
import './styles/HomePage.css';
import LocationPre from "./LocationPresentation";
import Aside from "./Aside";
const Homepage = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="aside">
                    <Aside />
                </div>
                <div className="nav">
                    <div className="titles">
                        ثبت ورود و خروج
                    </div>
                    <div className="LocationTitle">
                        به شعبه اپال خوش آمدید
                    </div>

                </div>
                <div className="LoationSection">
                    <LocationPre />
                </div>
                    <div className="buttonsAndtime">
                        <div className="timeShow">
                            <p>ورورد در ساعت 9:10</p>
                            <p>خروج در ساعت 12:00</p>
                        </div> 
                        <div className="ButtonsSection">
                            <div className="entrance">ورورد</div>
                            <div className="exit">خروج</div>
                        </div>
                    </div>
            </div>
        </React.Fragment>
    )
}
export default Homepage;



//  https://www.google.com/maps/embed/v1/MAP_MODE?key=YOUR_API_KEY&parameters