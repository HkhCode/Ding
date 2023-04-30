import React, { useState } from "react";
import FormbuilderNavbar from "./Formbuilder.Navbar";
import FormbuilderAside from "./Formbuilder.Aside";
import './styles/Formbuilder.settings.css';
const FormbuilderSettings = () => {
    const [companyName, setCompanyName] = useState(null)
    const [timeRegion, setTimeRegion] = useState([{ text: "تهران", id: 1, selected: 1 }, { text: "ایالات متحده", id: 2, selected: 0 }]);
    return (<React.Fragment>
        <FormbuilderNavbar />
        <FormbuilderAside />
        <div className="settingsSection">
            <div className="settingsSectionTitle">
                <h3>تنظیمات</h3>
            </div>
            <input type="text" placeholder={companyName == null ? "نام شرکت" : companyName} id="companyName" />
            <select>
                {
                    timeRegion.map((item) => {
                        if (item.selected == 1) {
                            return <option value={item.value}>{item.text}</option>
                        }
                    })
                    
                }
                {
                    

                    timeRegion.map((item) => {
                        if(item.selected==0){
                            return <option value={item.id}>{item.text}</option>
                        }
                        
                    })
                }
            </select>
            <div className="connectToSocialMedia">
                <i class="fa-brands fa-telegram social"></i>
                <i class="fa-brands fa-linkedin social"></i>
                <i class="fa-brands fa-instagram social"></i>
                <i class="fa-brands fa-youtube social"></i>
            </div>
        </div>
    </React.Fragment>
    );
}

export default FormbuilderSettings;