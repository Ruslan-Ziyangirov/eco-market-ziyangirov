import {FC, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import balance from "../../../../assets/balance-burger.png"
import profile from "../../../../assets/profile-photo.png"
import "./MenuBurger.sass"
import {useStores} from "../../../../utils/use-stores-hook";
import {observer} from "mobx-react";
import {Modal} from "../Modal";

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



export const MenuBurger = observer(() =>{

    const { modalStore: {clearCurrentModal, setCurrentModal} } = useStores();

    const onCloseMenu = () => {
        clearCurrentModal();
    };


    return (
        <Modal onClose={clearCurrentModal}>
            <div className="overlay">
                <div className="menu-burger-wrapper">
                    <div className="menu-burger">
                        <button className="btn-close-burger" onClick={onCloseMenu}>
                            <Icon name="close-btn" height="20" width="20"/>
                        </button>
                        <div className="profile-menu-burger">
                            <img src={profile} alt="профиль"/>
                            <div className="information-profile-burger">
                                <p className="name-profile-burger">
                                    Алексей Петрович
                                </p>
                                <div className="balance-burger">
                                    <img src={balance}/>
                                    <p>1000</p>
                                </div>
                            </div>
                        </div>

                        <nav className="navigation-burger">
                            <Link to="/" className="main" onClick={onCloseMenu}>Главная</Link>
                            <Link to="recyclingplaces" onClick={onCloseMenu}>Пункты сбора</Link>
                            <Link to="ecomarket" onClick={onCloseMenu}>ЭкоМаркет</Link>
                            <Link to="about" onClick={onCloseMenu}>О сервисе</Link>
                        </nav>

                        <button className="city-burger">
                            <Icon name="city-logo" height="24" width="24"/>
                            <span>Казань</span>
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    )
})