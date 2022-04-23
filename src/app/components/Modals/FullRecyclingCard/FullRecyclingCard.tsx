import {RecyclingCard, RecyclingCards} from "../../../stores/recyclingCardsStore";
import {FC, useEffect, useState} from "react";
import {useStores} from "../../../../utils/use-stores-hook";
import {observer} from "mobx-react";
import "./FullRecyclingCard.sass";
import {useParams} from "react-router-dom";
import fullImage from "../../../../assets/full-card.png"

interface FullRecCard extends RecyclingCard{

}

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

export const FullRecyclingCard:FC<FullRecCard> = observer(({image,
                                                  fullAddress,
                                                  phone,
                                                  timetable,
                                                  shop,
                                                  items}) =>{

    const { modalStore: {clearCurrentModal} } = useStores();
    const [recyclingCards, setRecyclingCards] = useState<Array<RecyclingCard>>([]);
    const [fullRecyclingCards, setFullRecyclingCards] = useState<RecyclingCard>();
    const { id } = useParams();

    useEffect(() => {
        setRecyclingCards(RecyclingCards);

        const collectionFullCardRecycling = recyclingCards.find(card => card.id === 1);
        setFullRecyclingCards(collectionFullCardRecycling);

        console.log(fullRecyclingCards)
    }, [id, recyclingCards]);

    return(
        <div className={"full-card-on-page"}>
            <div className={"full-recycling-card-wrapper"}>
                <button onClick={clearCurrentModal} className="btn-back-full-card">
                    <Icon name={"back-arrow"} height={18} width={18}/>
                    Вернуться назад
                </button>
                <div className="full-information-recycling-card">
                    <img src={fullImage} className="image-full-card"/>
                    <div className={"full-card-information-wrapper"}>
                        <div className={"address-and-phone"}>
                            <h5>
                                {fullRecyclingCards?.fullAddress}
                            </h5>

                            <p>
                                {fullRecyclingCards?.phone}
                            </p>
                        </div>

                        <div className={"timetable"}>
                            <p>
                                {fullRecyclingCards?.timetable}
                            </p>
                        </div>

                        <div className={"shop-and-items"}>
                            <p>
                                {fullRecyclingCards?.shop}
                            </p>
                            {fullRecyclingCards?.items?.map(item =>(
                                <button>
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
})