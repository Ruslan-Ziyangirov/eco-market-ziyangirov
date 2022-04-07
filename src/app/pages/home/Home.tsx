import {Header} from "../../components/header/Header";
import {Slider} from "../../components/slider/Slider";
import {Cards} from "../../components/cards/Cards";
import {Footer} from "../../components/footer/Footer";
import {observer} from "mobx-react";
import {useEffect, useState} from "react";

import {SkeletonMainPage} from "../../components/animation/skeletonMainPage/SkeletonMainPage";


export const Home = () =>{

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setLoading(false);
        }, 1200);
        return () => clearTimeout(timing);
    }, []);

    const position = [51.505, -0.09]

    return(
        <div>
            {loading ? <SkeletonMainPage/> : <div>
                <Slider/>
                <Cards/>
                <Footer/>
            </div>
            }
        </div>

    )
}
