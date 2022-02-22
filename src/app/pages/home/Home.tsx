import {Header} from "../../components/header/Header";
import {Slider} from "../../components/slider/Slider";
import {Cards} from "../../components/cards/Cards";
import {Footer} from "../../components/footer/Footer";


export const Home = () =>{
    return(
        <div>
            <Header/>
            <Slider/>
            <Cards/>
            <Footer/>
        </div>
    )
}