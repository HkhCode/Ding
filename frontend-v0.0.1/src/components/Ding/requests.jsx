import axios from "axios";
import e from "cors";
import React, { useState } from "react";
import Aside from "./Aside";
import './styles/requests.css';
const submitVacationRequest = () => {
    let year = document.getElementById("vacationRequestYear").value;
    let month = document.getElementById("vacationRequestMonth").value;
    let day = document.getElementById("vacationRequestDay").value;
    let description = document.getElementById("vacationRequestDes").value;
    let type = document.getElementById("vacationType").value;
    axios.post("http://localhost:5015/api/request/VacationRequest" , {
        userId : 3,
        createdDate : Date.now,
        requstedDate : year+"-"+month+"-"+day+"T00:00:00Z",
        description : description,
        type : type
    }).then(alert("درخواست شما با موفقیت ثبت شد"))
}
const submitMissionRequest = () => {
    let year = document.getElementById("missionRequestYear").value;
    let month = document.getElementById("missionRequestMonth").value;
    let day = document.getElementById("missionRequestDay").value;
    let description = document.getElementById("missionRequestDes").value;
    axios.post("http://localhost:5015/api/request/missionrequest" , {
        userId : 3,
        createdDate : Date.now,
        requstedDate : year+"-"+month+"-"+day+"T00:00:00Z",
        description : description,
    }).then(alert("درخواست شما با موفقیت ثبت شد"))
}
const submitInAndOutRequest = () => {
    let year = document.getElementById("InAndOutRequestYear").value;
    let month = document.getElementById("InAndOutRequestMonth").value;
    let day = document.getElementById("InAndOutRequestDay").value;
    let description = document.getElementById("InAndOutDes").value;
    let type;
    let hour = document.getElementById("InAndOutHour").value;
    let minute = document.getElementById("InAndOutMinute").value;
    if(document.getElementById("InAndOutRadioIN").checked) {
        type = 1;
    } else if(document.getElementById("InAndOutRadioOUT").checked) {
        type = 2;
    } else {
        alert("خطا هنگام کامپایل نرم افزار");
    }
    axios.post("http://localhost:5015/api/request/InAndOutRequest" , {
        userId : 3,
        createdDate : Date.now,
        requstedDate : year+"-"+month+"-"+day+"T00:00:00Z",
        description : description,
        type : type,
        time : hour+":"+minute
    }).then(alert("درخواست شما با موفقیت ثبت شد"));
}
const Request = () => {
    const [inAndOutRequests , setInAndOutRequests] = useState([{username : "حسین خادم" , date : "1400-2-2" , type:"استحقاقی" , status : "بررسی شده"},
    {username : "حسین خادم" , date : "1400-2-2" , type:"استحقاقی" , status : "بررسی شده"},
    {username : "حسین خادم" , date : "1400-2-2" , type:"استحقاقی" , status : "بررسی شده"},])
    const [missionRequests , setMissionRequests] = useState([{username : "حسین خادم" , status : "بررسی شده" ,date : "1400-2-2"},
    {username : "حسین خادم" , status : "بررسی شده" ,date : "1400-2-3"},
    {username : "حسین خادم" , status : "بررسی شده" ,date : "1400-2-4"},])
    const [vacationOutRequest , setVacationOutRequest] = useState([{username : "حسین خادم" , date : "1400-2-2" ,title : "ورود ساعت 14" ,status: "بررسی شده"},
    {username : "حسین خادم" , date : "1400-2-3" ,title : "ورود ساعت 14" ,status: "بررسی شده"},
    {username : "حسین خادم" , date : "1400-2-4" ,title : "ورود ساعت 14" ,status: "بررسی شده"},
{username : "حسین خادم" , date : "1400-2-5" ,title : "ورود ساعت 14" ,status: "بررسی شده"},])
    return (
        <React.Fragment>
            <div className="container">
                <div className="aside">
                    <Aside index={3}/>
                </div>
                <div className="showRequestsHistory" id="showVacationRequestsBox">
                    <i class="fa-solid fa-circle-xmark" onClick={()=>document.getElementById("showVacationRequestsBox").style.display="none"}></i>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    شماره
                                </th>
                                <th>نام کارمند</th>
                                <th>تاریخ</th>
                                <th>عنوان</th>
                                <th>وضعیت</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                vacationOutRequest.map((item)=> {
                                    return(
                                        <tr>
                                            <td>
                                                {vacationOutRequest.indexOf(item)+ 1}
                                            </td>
                                            <td>{item.username}</td>
                                            <td>{item.date}</td>
                                            <td>{item.title}</td>
                                            <td>{item.status}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="showRequestsHistory" id="showMissionRequestsBox">
                    <i class="fa-solid fa-circle-xmark" onClick={()=>document.getElementById("showMissionRequestsBox").style.display="none"}></i>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    شماره
                                </th>
                                <th>نام کارمند</th>
                                <th>وضعیت</th>
                                <th>تاریخ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                missionRequests.map((item)=> {
                                    return(
                                        <tr>
                                            <td>
                                                {missionRequests.indexOf(item)+ 1}
                                            </td>
                                            <td>{item.username}</td>
                                            <td>{item.status}</td>
                                            <td>{item.date}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="showRequestsHistory" id="showMissionRequestsBox">
                    <i class="fa-solid fa-circle-xmark" onClick={()=>document.getElementById("showMissionRequestsBox").style.display="none"}></i>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    شماره
                                </th>
                                <th>نام کارمند</th>
                                <th>وضعیت</th>
                                <th>تاریخ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                missionRequests.map((item)=> {
                                    return(
                                        <tr>
                                            <td>
                                                {missionRequests.indexOf(item)+ 1}
                                            </td>
                                            <td>{item.username}</td>
                                            <td>{item.status}</td>
                                            <td>{item.date}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="showRequestsHistory" id="showInAndOutRequestsBox">
                    <i class="fa-solid fa-circle-xmark" onClick={()=>document.getElementById("showInAndOutRequestsBox").style.display="none"}></i>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    شماره
                                </th>
                                <th>نام کارمند</th>
                                <th>وضعیت</th>
                                <th>تاریخ</th>
                                <th>نوع</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                inAndOutRequests.map((item)=> {
                                    return(
                                        <tr>
                                            <td>
                                                {inAndOutRequests.indexOf(item)+ 1}
                                            </td>
                                            <td>{item.username}</td>
                                            <td>{item.status}</td>
                                            <td>{item.date}</td>
                                            <td>{item.type}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="nav">
                    <div className="title">درخواست ها</div>
                </div>
                <div className="requestSection">
                    <div className="typeSection">
                        ثبت درخواست
                    </div>
                    <div className="part">
                        <p> مرخصی</p>
                        <span>نوع مرخصی<select id="vacationType">
                            <option value="1">استحقاقی (باحقوق)</option>    
                            <option value="2">بدون حقوق</option>
                            <option value="3">استعلاجی</option>
                            <option value="4">تشویقی</option>
                        </select></span><br/>
                        <textarea cols="30" rows="5" className="explanations" placeholder="توضیحات" id="vacationRequestDes"></textarea><br/>
                        <div className="inputsSection">
                                <input type="number" name="day" id="vacationRequestDay" placeholder="روز" />
                                <select id="vacationRequestMonth" className="monthSelectRequests">
                                    <option value="01">فروردین</option>
                                    <option value="02">اردیبهشت</option>
                                    <option value="03">خرداد</option>
                                    <option value="04">تیر</option>
                                    <option value="05">مرداد</option>
                                    <option value="06">شهریور</option>
                                    <option value="07">مهر</option>
                                    <option value="08">آبان</option>
                                    <option value="09">آذر</option>
                                    <option value="10">دی</option>
                                    <option value="11">بهمن</option>
                                    <option value="12">اسفند</option>

                                </select>
                                <input type="number" id="vacationRequestYear" name="year" placeholder="سال" />
                            </div>
                        <button className="requestSubmit" onClick={submitVacationRequest}>ارسال</button>
                        <button className="requestSubmit" onClick={()=>document.getElementById("showVacationRequestsBox").style.display="block"}>مشاهده سوابق</button>
                    </div>
                    <div className="part">
                        <p>ماموریت</p>
                        <br/>
                        <textarea cols="30" rows="5" className="explanations" placeholder="توضیحات" id="missionRequestDes"></textarea><br/>
                        <div className="inputsSection">
                                <input type="number" name="day" id="missionRequestDay" placeholder="روز" />
                                <select id="missionRequestMonth" className="monthSelectRequests">
                                    <option value="01">فروردین</option>
                                    <option value="02">اردیبهشت</option>
                                    <option value="03">خرداد</option>
                                    <option value="04">تیر</option>
                                    <option value="05">مرداد</option>
                                    <option value="06">شهریور</option>
                                    <option value="07">مهر</option>
                                    <option value="08">آبان</option>
                                    <option value="09">آذر</option>
                                    <option value="10">دی</option>
                                    <option value="11">بهمن</option>
                                    <option value="12">اسفند</option>

                                </select>
                                <input type="number" id="missionRequestYear" name="year" placeholder="سال" />
                            </div>
                        <button className="requestSubmit" onClick={submitMissionRequest}>ارسال</button>
                        <button className="requestSubmit" onClick={()=>document.getElementById("showMissionRequestsBox").style.display="block"}>مشاهده سوابق</button>
                    </div>
                    <div className="part" >
                        <p>ورود و خروج</p>
                        <span className="inAndOut"><input id="InAndOutRadioIN" type="radio" name="inout" value="in"/>ورود</span>
                        <span className="inAndOut"><input id="InAndOutRadioOUT" type="radio" name="inout" value="out"/>خروج</span>
                        <br/>
                        <textarea cols="30" rows="5" id="InAndOutDes" className="explanations" placeholder="توضیحات"></textarea><br/>
                        <div className="inputsSection">
                                <input type="number" name="day" id="InAndOutRequestDay" placeholder="روز" />
                                <select id="InAndOutRequestMonth" className="monthSelectRequests">
                                    <option value="01">فروردین</option>
                                    <option value="02">اردیبهشت</option>
                                    <option value="03">خرداد</option>
                                    <option value="04">تیر</option>
                                    <option value="05">مرداد</option>
                                    <option value="06">شهریور</option>
                                    <option value="07">مهر</option>
                                    <option value="08">آبان</option>
                                    <option value="09">آذر</option>
                                    <option value="10">دی</option>
                                    <option value="11">بهمن</option>
                                    <option value="12">اسفند</option>

                                </select>
                                <input type="number" id="InAndOutRequestYear" name="year" placeholder="سال" /><br/>
                                <input type="number" placeholder="ساعت" className="InAndOutRequestTimeHour" id="InAndOutHour"/>
                                <input type="number" placeholder="دقیقه" id="InAndOutMinute"/>
                            </div>
                        <button className="requestSubmit" onClick={submitInAndOutRequest}>ارسال</button>
                        <button className="requestSubmit" onClick={()=>document.getElementById("showInAndOutRequestsBox").style.display="block"}>مشاهده سوابق</button>
                   </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Request;