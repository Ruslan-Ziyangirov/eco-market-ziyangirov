import './Header.sass';
import {FC} from "react";
import {Link} from "react-router-dom";
import balance from "../../../svg-icons/balance.svg";
import avatar from  "../../../svg-icons/avatar.svg"
import ecorus from "../../../svg-icons/ecorus-logo.svg";

import greenRectangle from "../../../svg-icons/green-rectangle.svg"

interface Props{
    name:string,
    height: number|string;
    width:number|string;
}


export const Icon: FC<Props> = ({ name, height,width}) => {
    return (
        <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            style={{
                width: `${width}px`,
                height: `${height}px`,
            }}
        >
            <use xlinkHref={`/sprite.svg#${name}`}></use>
        </svg>
    );
}


export const Header = () => {

    return(
        <header>
            <div className="header">
                <img src={ecorus}/>
                <nav>
                    <Link to="/" className="main">Главная</Link>
                    <Link to="map">Пункты сбора</Link>
                    <Link to="eco-market">ЭкоМаркет</Link>
                    <Link to="about">О сервисе</Link>
                </nav>

                <div className="additional-information">
                    <button  className="city">
                        <Icon name="city-logo" height="24" width="24"/>
                        <span>Казань</span>
                    </button>

                    <div className="balance">
                        <img className="balance-logo" src={balance}/>
                        <span>1000</span>
                    </div>

                    <button className="my-account">
                        <img className="avatar" src={avatar}/>
                        <span>Алексей</span>
                    </button>
                </div>
            </div>
            {/*<img src={greenRectangle} className="green-rectangle"/>*/}
            <hr></hr>

        </header>
    )
}