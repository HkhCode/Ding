import React, { useState } from "react";
import FormbuilderAside from "./Formbuilder.Aside";
import FormbuilderNavbar from "./Formbuilder.Navbar";
import './styles/Formbuilder.team.css';
const activationTemplate = (value) => {
    if(value == 1){
        return 'فعال';
    }
    else if (value == 0){
        return 'غیرفعال';
    }
    else{
        return 'خطا هنگام خواندن اطلاعات';
    }
}
const FormbuilderTeam = () => {
    const[team , setTeam] = useState({name : 'نام تیم' , members : [
        {profilePic: '' , name : 'حسین خادم' , email: 'hkh.2003.1381@gmail.com' , phoneNumber : '09123456789' , role: 'مالک' , active:1},
        {profilePic: '' , name : 'حسین خادم' , email: 'hkh.2003.1381@gmail.com' , phoneNumber : '09123456789' , role:'عضو' , active:0},
        {profilePic: '' , name : 'حسین خادم' , email: 'hkh.2003.1381@gmail.com' , phoneNumber : '09123456789' , role:'عضو' , active:0},
        {profilePic: '' , name : 'حسین خادم' , email: 'hkh.2003.1381@gmail.com' , phoneNumber : '09123456789' , role:'عضو' , active:0},
    ]});
    return (
        <React.Fragment>
            <FormbuilderNavbar/>
            <FormbuilderAside/>
            <div className="teamTitle">
                <h1>{team.name}</h1>
            </div>
            <div className="sendEmailSection">
                <input type="text" id="memberEmail" placeholder="ایمیل عضو تیم خود را وارد کنید" className="emailInput"/>
                <button>ارسال</button>
            </div>
            <div className="teamMembersSection">
                {
                    team.members.map((teamMember)=> {
                        return(<div className="mappedDivClass">
                        <span className="teamMemberProfile"><div className="profileSection"><i class="fa-solid fa-user"></i><span className="profileData">{teamMember.name}<br/><span className="gmailSection">{teamMember.email}</span> </span></div></span>
                        <span className="teamMemberActive">{activationTemplate(teamMember.active)}</span>
                        <span className="teamMemberRole">{teamMember.role}</span>
                        </div>   );
                    })
                }

            </div>
        </React.Fragment>
    )
}

export default FormbuilderTeam;