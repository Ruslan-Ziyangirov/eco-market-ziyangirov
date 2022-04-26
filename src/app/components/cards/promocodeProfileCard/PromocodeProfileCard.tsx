import "./PromocodeProfileCard.sass";
import {FC} from "react";
import {Button} from "../../ui/buttons/large/Button";
import {ButtonSmall} from "../../ui/buttons/small/ButtonSmall";

interface Props{
    date?: string,
    link?: string,
    cost?: string;
}

export const PromocodeProfileCard:FC<Props> = ({date, link, cost}) => {
    return(
        <div>
            <div className="promocode-card-wrapper">
                <div className="cost-wrapper">
                    <h3>{cost ?? 1000}</h3>
                </div>
                <div className="promocode-information-wrapper">
                    <p>Дата создания</p>
                    <h4>{date ?? "25.09.2021"}</h4>
                    <p>Ссылка на товар</p>
                    <h5>{link ?? "adidas.com/clothes/WddfJfsf7dt6fsHFIuj5пdfsZFu..."}</h5>
                </div>
                <ButtonSmall title={"Показать qr-код"} color={"#000B26CC"} background={"rgba(62, 80, 114, 0.08)"}/>
            </div>
        </div>
    )
}

export default PromocodeProfileCard;