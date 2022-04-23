import {FC, useEffect, useState} from "react";
import {BottomSheet} from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import {RecyclingPlaceCard} from "../../cards/recyclingPlaceCard/RecyclingPlaceCard";
import recyclingPlaceImg from "../../../../assets/recycling-place.png";
import "./RecyclingBottomSheet.sass"
import {RecyclingCard, RecyclingCards} from "../../../stores/recyclingCardsStore";
import {FullRecyclingCard} from "../../Modals/FullRecyclingCard/FullRecyclingCard";
import {useStores} from "../../../../utils/use-stores-hook";

interface Props {
    isOpen: boolean;
}

export const RecyclingBottomSheet: FC<Props> = ({ isOpen }) => {
    const [open, setOpen] = useState<boolean>(isOpen);

    const [recyclingCards, setRecyclingCards] = useState<Array<RecyclingCard>>([]);

    const {modalStore: { setCurrentModal } } = useStores();

    const openModalCard = () =>{
        setCurrentModal(FullRecyclingCard);
    }

    useEffect(() => {
        setRecyclingCards(RecyclingCards);
    }, []);

    useEffect(()=>{
        setOpen(isOpen)
    }, [isOpen]);

    return (
        <div className="recycling-place-mob">
            <BottomSheet
                className=""
                open={open}
                blocking={false}
                scrollLocking={false}
                snapPoints={({ headerHeight, maxHeight }) => [
                    headerHeight,
                    (maxHeight - 56) * 0.65,
                    maxHeight - 56
                ]}
                onDismiss={()=> {
                    setOpen(false)
                    isOpen=false
                }}
                header={
                    <div>
                        <h5>Показать 12 пунктов сбора</h5>
                    </div>
                }
            >
                <div className="cards-on-map-mob">
                    {recyclingCards.map(card =>(
                            <button className="btn-card-recycling" onClick={openModalCard}>
                                <RecyclingPlaceCard id={card.id}
                                                    image={card.image}
                                                    address={card.address}
                                                    description={card.description}/>
                            </button>
                    ))}
                </div>
            </BottomSheet>
        </div>
    );
};