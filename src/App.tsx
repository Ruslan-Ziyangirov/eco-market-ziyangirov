import React from 'react';
import {render} from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import {Home} from "./app/pages/home/Home";
import {EcoMarket} from "./app/pages/ecoMarket/EcoMarket";
import {Header} from "./app/components/header/Header";

const App = () => (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/ecomarket" element={<EcoMarket/>}/>
        </Routes>
    </BrowserRouter>
)

export default App;
