import React from "react";
import '../styles/Details.css';
const Details = () => {
    return (
        <React.Fragment>
            <div className="DetailsBox">
                <div className="cell">
                    <span className="optionRight"><h1>سفیران رایحه ساز ماندگار</h1>نام شرکت</span>
                    <span className="optionMiddle"><h1>1400/2/2</h1>تاریخ امروز</span>
                    <span className="optionLeft"><h1>1400/2/2</h1>تاریخ آخرین رسیدگی</span>
                </div>
                <div className="cell">
                    <span className="MidoptionRight"><h1>150</h1>تعداد کارمندان</span>
                    <span className="MidoptionMiddle"><h1>100</h1>کارمندان فعال</span>
                    <span className="MidoptionLeft"><h1>50</h1>کارمندان غیرفعال</span>
                </div>
                <div className="cell">
                    <span className="optionRight"><h1>170</h1>تعداد کل درخواست</span>
                    <span className="optionMiddle"><h1>40</h1>درخواست های جدید</span>
                    <span className="optionLeft"><h1>130</h1><p>درخواست های رسیدگی نشده</p>
                        <table className="mainPanelRequestsTabel">
                            <thead>
                                <tr>
                                    <th className="mainPnaelOptionsTableTh">واحد کامپیوتر</th>
                                    <th className="mainPnaelOptionsTableTh">مدیر منابع انسانی</th>
                                    <th className="mainPnaelOptionsTableTh">منشی دفتر مرکزی</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="mainPnaelOptionsTableTd">12</td>
                                    <td className="mainPnaelOptionsTableTd">28</td>
                                    <td className="mainPnaelOptionsTableTd">30</td>
                                </tr>
                            </tbody>
                        </table>
                    </span>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Details;