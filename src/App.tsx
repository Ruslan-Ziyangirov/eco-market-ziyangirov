import React from 'react';
import {render} from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import {Home} from "./app/pages/home/Home";
import {EcoMarket} from "./app/pages/ecoMarket/EcoMarket";
import {Header} from "./app/components/header/Header";
import {RecyclingPlaces} from "./app/pages/recyclingPlaces/RecyclingPlaces";

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/ecomarket" element={<EcoMarket/>}/>
                <Route path="/recyclingplaces" element={<RecyclingPlaces/>}/>
            </Routes>

        </>
    )

}

export default App;
