import React from "react";
import FormbuilderAside from "./Formbuilder.Aside";
import FormbuilderDashbord from "./Formbuilder.dashbord";
import FormbuilderNavbar from "./Formbuilder.Navbar";
import './styles/MadeForm.css';
const Home = () => {
    return(<React.Fragment>
        <FormbuilderNavbar/>
        <FormbuilderAside/>
        <FormbuilderDashbord/>
    </React.Fragment>)
}

export default Home;