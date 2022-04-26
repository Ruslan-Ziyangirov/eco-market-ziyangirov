import React from 'react';
import {render} from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import {Home} from "./app/pages/home/Home";
import {EcoMarket} from "./app/pages/ecoMarket/EcoMarket";
import {Header} from "./app/components/header/Header";
import {RecyclingPlaces} from "./app/pages/recyclingPlaces/RecyclingPlaces";
import {Profile} from "./app/pages/profile/Profile";
import PromocodeProfileCard from "./app/components/cards/promocodeProfileCard/PromocodeProfileCard";
import HistoryCard from "./app/components/cards/historyCard/HistoryCard";

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/ecomarket" element={<EcoMarket/>}/>
                <Route path="/recyclingplaces" element={<RecyclingPlaces/>}/>
                <Route path="/profile" element={<Profile/>}>
                    <Route path={'/profile/promocodes'} element={<PromocodeProfileCard/>}/>
                    <Route path={'/profile/histories'} element={<HistoryCard/>}/>
                </Route>
            </Routes>

        </>
    )

}

export default App;
