import React from "react";
import { Routes, Route } from 'react-router-dom'
import About from '../../views/examples/About.jsx'
import Home from '../../views/examples/Home.jsx'
import NotFound from "../../views/examples/NotFound.jsx";
import Param from "../../views/examples/Param.jsx";

import './Content.css'
export default (props) => {
    return(
        
        <main className="Content">
            <Routes>
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/param/:id" element={<Param/>} />
                <Route exact path="/" element={<Home/>} />
                <Route exact path="*" element={<NotFound/>} />
            </Routes>
        </main>
    )
}