import React, { useState } from "react";
import './styles/Formbuilder.dashbord.css';
const addForm = () => {
    return (<React.Fragment>
        <p className="noFormsText">شما فرمی ندارید</p>
        <div className="addButton"><i class="fa-solid fa-plus"></i></div>
    </React.Fragment>)
}
const formMapper = (forms) => {
    return forms[0]
}
const userStatusShow = (mode) => {
    return (<React.Fragment>

        <div className={mode == 1 ? "userStatusIconTrue" : "userStatusIconFalse"}>
            {
                mode == 1 ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-xmark"></i>
            }
        </div>

        <div className="userStatusValue">
            {
                mode == 1 ? <p>فعال</p> : <p>غیر فعال</p>
            }
        </div>
    </React.Fragment>)
}
const FormbuilderDashbord = () => {
    const [user, setUser] = useState({
        id: 1,
        name: 'حسین',
        username: 'hosein',
        email: 'hkh.2003.1381@gmail.com',
        personnelCode: '443',
        madeFormsCount: 5,
        sendsCount: 2,
        profilePic: [],
        recentForms: [],
        userStatus: 1,
        questionPapersCounts: 1,
        answerPapersCounts : 3,
    });
    return (<React.Fragment>
        <div className="dashbordSection">
            <div className="container">
                <div className="welcomeSection">
                    <div className="innerwelcomeSection">
                        <div className="nameWelcome">
                            <img src="" />
                            <p>{user.name} عزیز , خوش آمدید</p>

                        </div>
                        <div className="welcomSectionData">
                            <p>کد پرسنلی : {user.personnelCode}</p>
                            <p>فرم ها : {user.madeFormsCount}</p>
                            <p>ارسال ها : {user.sendsCount}</p>
                        </div>
                    </div>
                </div>
                <div className="recentForms">
                    <div className="innerRecentForms">
                        {
                            user.recentForms.length == 0 ? addForm() : formMapper(user.recentForms)
                        }
                    </div>

                </div>
                <div className="userStatus">
                    <div className="inneruserStatus">
                        {
                            userStatusShow(user.userStatus)
                        }
                    </div>
                </div>
                <div className="formsCount">
                    <div className="innerformsCount">
                        <div className="formsCountNumber">
                            <p>{user.madeFormsCount}</p>
                        </div>
                        <div className="formsCountTitle">
                            <p>فرم های ساخته شده</p>
                        </div>
                    </div>
                </div>
                <div className="questionPapers">
                    <div className="innerformsCount">
                        <div className="questionPapersCount">
                            <p>{user.questionPapersCounts}</p>
                        </div>
                        <div className="formsCountTitle">
                            <p>پرسشنامه های ساخته شده</p>
                        </div>
                    </div>
                </div>
                <div className="answerPapers">
                    <div className="innerformsCount">
                        <div className="formsCountNumber">
                            <p>{user.answerPapersCounts}</p>
                        </div>
                        <div className="formsCountTitle">
                            <p>پاسخنامه های موجود</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>)
}

export default FormbuilderDashbord;