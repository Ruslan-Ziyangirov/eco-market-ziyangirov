import "./ProfileCard.sass"
import {FC} from "react";
import {Button} from "../../ui/buttons/large/Button";

interface Props{
    image: string,
    name: string,
    telephone: string,
    email: string;
}

export const ProfileCard:FC<Props> = ({image, name, telephone, email}) => {
    return(
        <div className="profile-card-wrapper">
            <div className="information-profile-wrapper">
                <img src={image}/>
                <div className="information-about-user">
                    <h3>{name}</h3>
                    <h4>{telephone}</h4>
                    <p>{email}</p>
                </div>
                <Button title={"Редактировать"} color={"#000B26CC"} background={"#3E507214"}/>
            </div>
        </div>
    )
}

export default ProfileCard;