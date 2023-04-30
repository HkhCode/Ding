import React from "react";
import AdminAside from "./AdminAside";
import "../styles/MainPanel.css";
const ShiftsList = () => {
  return (
    <React.Fragment>
      <div className="aside">
        <AdminAside />
      </div>
      <div className="navbar">
        <span className="userDetails">
          <img src="" />
          <span className="NameAndNumber">
            <div className="nameAndPhoneCenter">09126283181 - حسین خادم</div>
          </span>
        </span>
      </div>
      <div className="DetailsSection">
        <div className="employeesListSection">
          {" "}
          <table>
            <thead>
              <tr>
                <th>شماره</th>
                <th>نام کارمند</th>
                <th>شماره پرسنلی</th>
                <th>شیفت</th>
                <th>تایید</th>
                <th>رد</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>حسین خادم</td>
                <td>121212</td>
                <td>مشاهده</td>
                <td>تایید</td>
                <td>رد</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShiftsList;
