import React from "react";
import './styles/Formbuilder.Aside.css';

const FormbuilderAside = () => {
    return(
        <React.Fragment>
            <div className="aside">
                <div className="folderAdding">
                  <span className="folderAddingText">  پوشه بندی پرسشنامه ها </span><i className="fa-solid fa-plus"></i><i class="fa-solid fa-magnifying-glass"></i>

                </div>
                <div className="folder">
                    پوشه یک
                </div>
                <div className="folder">
                    پوشه یک
                </div>
                <div className="folder">
                    پوشه یک
                </div>
                <div className="folder">
                    پوشه یک
                </div>
            </div>
        </React.Fragment>
    );
}

export default FormbuilderAside;