import React, { useState } from "react";
import HomePage from "./components/Ding/HomePage";
import { Routes, Route } from 'react-router-dom';
import MainPanel from "./components/Ding/Admin/MainPanel";
const App = () => {
    // return <HomePage/>     
    return(
        <>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/Admin" element={<MainPanel/>}/>
            </Routes>
        </>
    )
}
export default App;