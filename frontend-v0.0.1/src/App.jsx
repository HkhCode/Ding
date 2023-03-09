import React, { useState } from "react";
let fruits = ["banana" , "apple" , "orange" , "pineapple"]
const axios = require('axios/dist/node/axios.cjs');
const App = () => {
    return <ul>
        {fruits.map(item => <li>{item}</li>)}
    </ul>
}
export default App;