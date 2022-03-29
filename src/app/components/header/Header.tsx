import './Header.sass';
import {FC} from "react";
import {Link} from "react-router-dom";
// @ts-ignore
import ecorus from "../../../svg-icons/ecorus-logo.svg";
import {observer} from "mobx-react";
import {useStores} from "../../../utils/use-stores-hook";
import {SignIn} from "../Modals/SignIn/SignIn";

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


export const Header = observer(() => {

    const {modalStore: { setCurrentModal } } = useStores();

    const openModal = () =>{
        setCurrentModal(SignIn);
    }

    return(
        <header>
            <div className="header">
                <div className="navigation">
                    <img src={ecorus}/>
                    <nav>
                        <Link to="/" className="main">Главная</Link>
                        <Link to="recyclingplaces">Пункты сбора</Link>
                        <Link to="ecomarket">ЭкоМаркет</Link>
                        <Link to="about">О сервисе</Link>
                    </nav>
                </div>

                <div className="additional-information">
                    <button  className="city">
                        <Icon name="city-logo" height="24" width="24"/>
                        <span>Казань</span>
                    </button>
                    <button className="sign-in" onClick={openModal}>
                        <Icon name="sign-in" height="20" width="20"/>
                        <span>Войти</span>
                    </button>
                </div>
            </div>
            {/*<img src={greenRectangle} className="green-rectangle"/>*/}

        </header>
    )
});