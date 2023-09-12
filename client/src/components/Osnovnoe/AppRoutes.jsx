import React from "react";
import {Routes, Route} from "react-router-dom";
import Glavniy from "../Glavniy";
import Companiya from "../Companiya";

const AppRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Glavniy/>}/>
            <Route path="/companiya" element={<Companiya/>}/>
        </Routes>  
    );
}

export default AppRoutes;