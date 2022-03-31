import {Header} from "../../components/header/Header";
import {Slider} from "../../components/slider/Slider";
import {Cards} from "../../components/cards/Cards";
import {Footer} from "../../components/footer/Footer";
import {observer} from "mobx-react";


export const Home = () =>{

    const position = [51.505, -0.09]

    return(
        <div>
            <Slider/>
            <Cards/>
            <Footer/>
        </div>
    )
}
