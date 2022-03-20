import {Header} from "../../components/header/Header";
import {Slider} from "../../components/slider/Slider";
import {Cards} from "../../components/cards/Cards";
import {Footer} from "../../components/footer/Footer";
import {observer} from "mobx-react";


export const Home = () =>{


    return(
        <div>
            <Slider/>
            <Cards/>
            <Footer/>
        </div>
    )
}