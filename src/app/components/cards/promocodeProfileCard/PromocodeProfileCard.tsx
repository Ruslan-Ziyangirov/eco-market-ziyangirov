import "./PromocodeProfileCard.sass";
import {FC} from "react";
import {Button} from "../../ui/buttons/large/Button";

interface Props{
    date: string,
    link: string,
    cost: string;
}

export const PromocodeProfileCard:FC<Props> = ({date, link, cost}) => {
    return(
        <div className="promocode-card-wrapper">
            <div className="cost-wrapper">
                <h3>{cost}</h3>
            </div>
            <div className="promocode-information-wrapprer">
                <p>Дата создания</p>
                <h4>{date}</h4>
                <p>Ссылка на товар</p>
                <h5>{link}</h5>
            </div>
            <Button title={"Показать qr-код"} color={"#000B26CC"} background={"rgba(62, 80, 114, 0.08)"}/>
        </div>
    )
}

export default PromocodeProfileCard;