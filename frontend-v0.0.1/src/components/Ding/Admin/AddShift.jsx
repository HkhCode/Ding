import React, { useState } from "react";
import '../styles/AddShift.css';
import Aside from "../Aside";
import "../styles/HomePage.css";
const closeAddNewShiftBox = () => {
    let addNewShiftBox = document.getElementById("AddNewShiftBox");
    addNewShiftBox.style.display = "none";
}
const openAddNewShiftBox = () => {
    let addNewShiftBox = document.getElementById("AddNewShiftBox");
    addNewShiftBox.style.display = "block";
}
const openTheClosedDay = (checkboxId, rowId) => {
    let checkbox = document.getElementById(checkboxId);
    let targetRow = document.getElementById(rowId);
    if (checkbox.checked) {
        targetRow.style.backgroundColor = "rgb(84, 214, 84)";
    } else {
        targetRow.style.backgroundColor = "rgb(255, 106, 106)";
    }
}
const showAddDescriptionsBox = (mode) => {
    if(mode === 1){
        document.getElementById("AddDesForClosedDay").style.display = "block";
    }
    else if(mode === 2){
        document.getElementById("AddDesForClosedDay").style.display = "none";
    }
}
const openAddShiftBox = (toggleCheckboxId, moduleIds) => {
    const toggleCheckbox = document.getElementById(toggleCheckboxId);
    const items = moduleIds.map(id => document.getElementById(id));

    if (toggleCheckbox.checked) {
        items.forEach(item => item.classList.remove("hidden"));
    } else {
        items.forEach(item => item.classList.add("hidden"));
    }
};
const AddShift = () => {
    const [days, setDays] = useState([
        {
            rowGeneratedId: "test1",
            checkboxGeneratedId: "check1",
            name: "شنبه",
            date: "1400/2/2",
            start: "8:00",
            end: "17:00",
            duration: "8:00",
            intervalIn: "8:15",
            moreWorkStart: "17:00",
            intervalOut: "17:15",
            moreWorkDuration: "00:00",
            nDayOfWorking: 30,
            dayTitle: "انقلاب اسلامی",
            details: "",
            status: "بررسی شده"
        },
        {
            rowGeneratedId: "test2",
            checkboxGeneratedId: "check2",
            name: "یک شنبه",
            date: "1400/2/2",
            start: "8:00",
            end: "17:00",
            duration: "8:00",
            intervalIn: "8:15",
            moreWorkStart: "17:00",
            intervalOut: "17:15",
            moreWorkDuration: "00:00",
            nDayOfWorking: 30,
            dayTitle: "انقلاب اسلامی",
            details: "",
            status: "بررسی شده"
        },
        {
            rowGeneratedId: "test3",
            checkboxGeneratedId: "check3",
            name: "دو شنبه",
            date: "1400/2/2",
            start: "8:00",
            end: "17:00",
            duration: "8:00",
            intervalIn: "8:15",
            moreWorkStart: "17:00",
            intervalOut: "17:15",
            moreWorkDuration: "00:00",
            nDayOfWorking: 30,
            dayTitle: "انقلاب اسلامی",
            details: "",
            status: "بررسی شده"
        },
        {
            rowGeneratedId: "test4",
            checkboxGeneratedId: "check4",
            name: "سه شنبه",
            date: "1400/2/2",
            start: "8:00",
            end: "17:00",
            duration: "8:00",
            intervalIn: "8:15",
            moreWorkStart: "17:00",
            intervalOut: "17:15",
            moreWorkDuration: "00:00",
            nDayOfWorking: 30,
            dayTitle: null,
            details: "",
            status: "بررسی شده"
        },
        {
            rowGeneratedId: "test5",
            checkboxGeneratedId: "check5",
            name: "چهار شنبه",
            date: "1400/2/2",
            start: "8:00",
            end: "17:00",
            duration: "8:00",
            intervalIn: "8:15",
            moreWorkStart: "17:00",
            intervalOut: "17:15",
            moreWorkDuration: "00:00",
            nDayOfWorking: 30,
            dayTitle: null,
            details: "",
            status: "بررسی شده"
        },
        {
            rowGeneratedId: "test6",
            checkboxGeneratedId: "check6",
            name: "پنج شنبه",
            date: "1400/2/2",
            start: "8:00",
            end: "17:00",
            duration: "8:00",
            intervalIn: "8:15",
            moreWorkStart: "17:00",
            intervalOut: "17:15",
            moreWorkDuration: "00:00",
            nDayOfWorking: 30,
            dayTitle: null,
            details: "",
            status: "بررسی شده"
        },
        {
            rowGeneratedId: "test7",
            checkboxGeneratedId: "check7",
            name: "جمعه",
            date: "1400/2/2",
            start: "8:00",
            end: "17:00",
            duration: "8:00",
            intervalIn: "8:15",
            moreWorkStart: "17:00",
            intervalOut: "17:15",
            moreWorkDuration: "00:00",
            nDayOfWorking: 30,
            dayTitle: null,
            details: "",
            status: "بررسی شده"
        },
    ])
    const markTheClosedDays = (daysObjects) => {
        daysObjects.forEach(item => {
            const element = document.getElementById(item.rowGeneratedId);
            if (element) { // Check if the element exists
                element.style.backgroundColor = "red !important";
            }
        });
    }

    return (
        <React.Fragment>
            <div className="container">
                <div className="aside">
                    <Aside index={4}/>
                </div>
                <div className="addDescriptionShiftBox" id="AddDesForClosedDay">
                    <div className="addDescriptionShiftBoxTitle">
                        افزودن توضیحات
                    </div>
                    <textarea cols="60" rows="5"/>
                    <button className="addShiftAddFileBtn">افزودن ضمیمه</button>
                    <button className="addShiftSaveBtn">ارسال</button>
                    <button className="addShiftCloseBtn" onClick={() => showAddDescriptionsBox(2)}>بستن</button>
                </div>
                <div className="nav">
                    <div className="titles">
                                            افزودن شیفت

                    </div>
                </div>
                <div className="DetailsSection">
                    <div className="employeesListSection">
                        <h2>افزودن شیفت جدید</h2>
                        <br />
                        <br />
                        <div className="AddShiftBox" id="AddNewShiftBox">
                            <div className="AddShiftBoxTitle">
                                <p>تعیین شیفت</p>
                                <p><span>شنبه</span><span>1400/2/2</span></p>
                            </div>
                            <span className="startShiftTimeSection">
                                <p>ساعت پایان : </p>
                                <input type="text" />
                            </span>
                            <span className="startShiftTimeSection">
                                <p>ساعت شروع : </p>
                                <input type="text" />
                            </span>
                            <span className="startShiftTimeSection" style={{ display: "none" }}>
                                <p>ساعت پایان : </p>
                                <input type="text" />
                            </span>
                            <span className="startShiftTimeSection" style={{ display: "none" }}>
                                <p>ساعت شروع : </p>
                                <input type="text" />
                            </span>
                            <span className="startShiftTimeSection">
                                <p>طول شیفت : </p>
                                <input type="text" disabled value="8:00" id="ShiftDiurationCheckBox" />
                            </span>
                            <span className="startShiftTimeSection">
                                <p>ساعت شروع کسر کار : </p>
                                <input type="text" disabled value="8:15" />
                            </span>
                            <p className="ShiftDurationTitle"><input type="checkbox" id="MoreWorkCheckBox" onChange={() => { openAddShiftBox("MoreWorkCheckBox", ["MoreWorkTimeStart", "MoreWorkTimeEnd"]) }} /> اضافه کار دارد ؟</p>
                            <span className="startShiftTimeSection hidden" id="MoreWorkTimeStart">
                                <p>ساعت شروع اضافه کار : </p>
                                <input type="text" />
                            </span>
                            <span className="startShiftTimeSection hidden" id="MoreWorkTimeEnd">
                                <p>ساعت پایان اضافه کار : </p>
                                <input type="text" />
                            </span>
                            <p className="ShiftDurationTitle"><input type="checkbox" id="MoreWorkBeforeStart" onChange={() => { openAddShiftBox("MoreWorkBeforeStart", ["MoreWorkBeforeStartStartTime", "MoreWorkBeforeStartEndTime"]) }} /> اضافه کاری قبل کار دارد ؟</p>
                            <span className="startShiftTimeSection hidden" id="MoreWorkBeforeStartStartTime">
                                <p>ساعت پایان : </p>
                                <input type="text" />
                            </span>
                            <span className="startShiftTimeSection hidden" id="MoreWorkBeforeStartEndTime">
                                <p>ساعت شروع : </p>
                                <input type="text" />
                            </span>
                            <p className="ShiftDurationTitle"><input type="checkbox" id="JobranWorkTime" onChange={() => { openAddShiftBox("JobranWorkTime", ["compensationTimeInput"]) }} /> جبران تاخیر کار دارد ؟ </p>
                            <input type="text" className="hidden" id="compensationTimeInput" />
                            <button className="closeAddShiftBoxBtn" id="ClosingAddShiftBox" onClick={closeAddNewShiftBox}>بستن</button>
                            <button className="saveAddShiftBoxBtn">ذخیره</button>
                        </div>

                        <table className="AddShiftsTable">
                            <thead>
                                <tr>
                                    <th>ثبت شیفت</th>
                                    <th>روز</th>
                                    <th>تاریخ</th>
                                    <th>ساعت شروع</th>
                                    <th>ساعت پایان</th>
                                    <th>طول شیفت</th>
                                    <th>فرجه ورود</th>
                                    <th>شروع اضافه کاری</th>
                                    <th>فرجه خروج</th>
                                    <th>اضافه کاری</th>
                                    <th>روز همکاری</th>
                                    <th>مناسبت</th>
                                    <th>توضیحات</th>
                                    <th>وضعیت</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    days.map((item) => {
                                        return (<tr
                                            id={item.rowGeneratedId}
                                            style={
                                                item.dayTitle !== null ? { backgroundColor: "rgb(255, 106, 106)" } : null
                                            }
                                        >
                                            <td className="setWorkingTimeForShift" onClick={openAddNewShiftBox}>تعیین ساعت کاری</td>
                                            <td className="shiftDaysColumn">{item.name}</td>
                                            <td className="shiftDaysColumn">{item.date}</td>
                                            <td>{item.start}</td>
                                            <td>{item.end}</td>
                                            <td>{item.duration}</td>
                                            <td>{item.intervalIn}</td>
                                            <td>{item.moreWorkStart}</td>
                                            <td>{item.intervalOut}</td>
                                            <td>{item.moreWorkDuration}</td>
                                            <td>{item.nDayOfWorking}</td>
                                            <td>{
                                                item.dayTitle === null ? "-" : item.dayTitle
                                                /*item.dayTitle*/
                                            }</td>
                                            <td className="moreWorkOnVacationSection">
                                                {
                                                    item.dayTitle === null ? "توضیحاتی وجود ندارد" : (<React.Fragment><input type="checkbox" id={item.checkboxGeneratedId} onChange={() => { openTheClosedDay(item.checkboxGeneratedId, item.rowGeneratedId);  showAddDescriptionsBox(1)}} /><span>کار در روز تعطیل ؟</span></React.Fragment>)
                                                }
                                            </td>
                                            <td>{item.status}</td>
                                        </tr>)
                                    })
                                }
                            </tbody>
                        </table>
                        <button className="saveShift">ذخیره</button>
                    </div>
                </div>
            </div>
            {
                markTheClosedDays(days)
            }
        </React.Fragment>
    )
}
export default AddShift;