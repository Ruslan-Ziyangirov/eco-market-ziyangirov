import "./HistoryCard.sass";
import {FC} from "react";
import balance from '../../../../assets/balance.png';

interface Props{
    address?: string,
    material?: string,
    date?: string,
    cost?: number;
}

export const HistoryCard:FC<Props> = ({address, material, date, cost}) => {
    return(
        <div className="history-card-wrapper">
            <div className="history-information-wrapper">
                <p>Адрес</p>
                <h5>{address ?? "Казань, Кремлёвская, 88"}</h5>
                <p>Материал</p>
                <h5>{material ?? "Пластик: 1 кг"}</h5>
                <p>Дата</p>
                <h5>{date ?? "25.09.2021"}</h5>
            </div>
            <div className="cost-wrapper">
                <img src={balance} alt={'balance'}/>
                <h4>{cost ?? "1000"}</h4>
            </div>
        </div>
    )
}

export default HistoryCard;

