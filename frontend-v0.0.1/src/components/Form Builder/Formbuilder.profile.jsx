import React from "react";
import FormbuilderNavbar from "./Formbuilder.Navbar";
import FormbuilderAside from "./Formbuilder.Aside";
import './styles/Formbuilder.profile.css';
const showSetPasswordSection = (isChcked) => {
    if (isChcked) {
        document.getElementById('setPassword').style.display = 'block';
    }
    else {
        document.getElementById('setPassword').style.display = 'none';
    }
}
const FormbuilderProfile = () => {
    return (
        <React.Fragment>
            <FormbuilderNavbar />
            <FormbuilderAside />
            <div className="profileDetailsEdit">
                <div className="profilePic"><i class="fa-solid fa-user"></i></div>
                <input type="text" placeholder="نام" id="name" />
                <input type="text" placeholder="شماره تلفن" id="phoneNumber" />
                <input type="text" placeholder="ایمیل" id="email" />
                <input type="text" placeholder="شماره ملی" id="nationalCode" />
                <input type="text" placeholder="شماره پرسنلی" id="personnelCode" />
                <input type="text" placeholder="1400/1/1" id="birthDate" />

                <div className="changePassowrd"><span className="powerbtnText">تغییر کلمه عبور</span><span className="powerbtnSelf"><label class="switch">
                    <input type="checkbox" id="wannaSet" onChange={() => showSetPasswordSection(document.getElementById('wannaSet').checked)} />
                    <span class="slider round"></span>
                </label></span></div>
                <div className="setAccountType"><span className="accountTypeOptions">
                    <label>حقیقی</label><input type="radio" name="accTypebtn" id="haghighi" placeholder="حقیقی" checked />
                    <label>حقوقی</label><input type="radio" name="accTypebtn" id="hoghoghi" placeholder="حقوقی" disabled />
                </span><span className="accountTypeText">نوع حساب</span></div>
                <div className="setAccountType"><span className="accountTypeOptions">
                    <label>مرد</label><input type="radio" name="gender" id="man" placeholder="مرد" checked />
                    <label>زن</label><input type="radio" name="gender" id="woman" placeholder="زن" />
                </span><span className="accountTypeText">جنسیت</span></div>
                {/* <button className="edit">ویرایش</button> */}
                <div className="setPassword" id="setPassword">
                    <input type="text" id="currentPassword" placeholder="رمز فعلی" />
                    <input type="text" id="newPassword" placeholder="رمز جدید" />
                    <input type="text" id="newPassowrdRepeat" placeholder="تکرار رمز جدید" />
                </div>
                <button className="save">ذخیره</button>
            </div>
        </React.Fragment>
    )
}

export default FormbuilderProfile;