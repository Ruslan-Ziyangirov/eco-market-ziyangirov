import ProfileCard from "../../components/cards/profileCard/ProfileCard";
import "./Profile.sass";
import PromocodeProfileCard from "../../components/cards/promocodeProfileCard/PromocodeProfileCard";
import {NavLink, Outlet} from "react-router-dom";
import profileImg from "../../../assets/profile-image.png";

export const Profile = () =>{

    return(
        <div className="profile-page-wrapper">
            <h1>Личный кабинет</h1>
            <div className="profile-information-wrapper">
                <ProfileCard image={profileImg} name={"Алексей Петрович"} telephone={"+7 (917) 888 88 88"} email={"ivanov@gmail.com"}/>
                <div className="promocode-and-history-wrapper">
                    <div className="promocode-history-nav">
                        <NavLink to={"promocodes"} className={({ isActive }) =>
                            isActive ?  "active" : "no-active"}
                            children={"Промокоды"}/>
                        <NavLink to={"histories"} className={({ isActive }) =>
                            isActive ? "active" : "no-active"}
                                 children={"История"}/>
                    </div>
                    <Outlet/>
                </div>

            </div>
        </div>
    )
}