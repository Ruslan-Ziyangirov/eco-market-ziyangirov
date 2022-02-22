import React from 'react';
import {render} from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import {Home} from "./app/pages/home/Home";

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
)

export default App;
