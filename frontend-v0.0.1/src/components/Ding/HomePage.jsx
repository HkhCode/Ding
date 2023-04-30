import React, { useState, useEffect } from "react";
import './styles/HomePage.css';
import LocationPre from "./LocationPresentation";
import Aside from "./Aside";
import axios from "axios";
import Webcam from "react-webcam";
import { treeDecorated } from "fontawesome";
const baseUrl = "http://localhost:5015/api/branchcontrolls";
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      alert(position.coords.latitude, position.coords.longitude)
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
const Homepage = () => {
  const [location, setLocation] = useState([]);
  const [branch, setBranch] = useState({ name: "گیشا" });
  const [inAndOutHour, setInAndOutHour] = useState({ in: "--:--", out: "--:--" })
  const [time, setTime] = useState({ time24: { hour: { en: "1" }, minute: { en: "1" } }  , date : {other:{gregorian:{iso:{en:"2022-01-01"}}},day : {number : {en : "22"}} , year : {number : {en : "1400"}} , weekday : {name : "شنبه"} , month : {name : "اردیبهشت" , number:{en:"02"}}}});
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLocation([
          position.coords.latitude,
          position.coords.longitude
        ]);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };
  const InOutSetter = (mode) => {
    axios.post("http://localhost:5015/api/inandout", { UserId: 3, Username: "hosein", InOrOut: mode, Date: time.date.other.gregorian.iso.en /*"2023-04-27T15:35:21.330Z" */ , Time : time.time24.hour.en-1+":"+time.time24.minute.en}).then(resp => {
      if(resp.data.inOrOut === 1){
        alert("کاربر" + resp.data.username + "ورود شما در ساعت " + resp.data.time + "با موفقیت ثبت شد")
        let outed = inAndOutHour.out;
        setInAndOutHour({in : resp.data.time , out:outed})
      }
      else if(resp.data.inOrOut === 2)
      {
        alert("کاربر" + resp.data.username + "خروج شما در ساعت " + resp.data.time + "با موفقیت ثبت شد")
        let ined = inAndOutHour.in;
        setInAndOutHour({in:ined , out:resp.data.time});
      }
      else
      {
        alert(resp.data.inOrOut)
      }
    })
  }
  const checkInAndOutSettedTime = () => {
    axios.post("http://localhost:5015/api/inandout/CheckInAndOut" , {UserId : 3, date : time.date.other.gregorian.iso.en}).then(resp =>console.log(resp.data))
  }
  useEffect(() => {
    // checkInAndOutSettedTime();
    getLocation();
    axios.get("https://api.keybit.ir/time/?timezone=asia/tehran").then(resp => setTime(resp.data)).catch(reason => console.log(reason.toJSON()))
  }, []);
  return (
    <React.Fragment>
        <div className="aside">
          <Aside index={1} />
        </div>
        <div className="nav">
          <div className="titles">
            ثبت ورود و خروج
          </div>
          <div className="LocationTitle">
            <div className="timeAndDateSection">
              <span className="HomePageWeather">weather</span>
              <span className="HomePageBranch">به شعبه {branch.name} خوش آمدید</span>
              <span className="HomePageTime">
                {time.time24.minute.en} : {time.time24.hour.en - 1}
              </span>
            </div>
            <div className="timeAndDateSection">
              <span className="HomePageCity">تهران</span>
              <span className="HomePageDate">{time.date.weekday.name} {time.date.day.number.en} {time.date.month.name} {time.date.year.number.en}</span>
            </div>
          </div>
        </div>
        <Webcam />
        <div className="LoationSection">
          <LocationPre />
        </div>
        <div className="buttonsAndtime">
          <div className="timeShow">
            <p>ورود در ساعت {inAndOutHour.in}</p>
            <p>خروج در ساعت {inAndOutHour.out}</p>
          </div>
          <div className="ButtonsSection">
            <div className="entrance" onClick={() => { InOutSetter(1) }}>ورود</div>
            <div className="exit" onClick={() => { InOutSetter(2) }}>خروج</div>
          </div>
        </div>
    </React.Fragment>
  )
}
export default Homepage;