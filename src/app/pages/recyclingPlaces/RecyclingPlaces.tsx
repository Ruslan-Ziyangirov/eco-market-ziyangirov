import {Footer} from "../../components/footer/Footer";
import "./RecyclingPlaces.sass"
import {RecyclingPlaceCard} from "../../components/cards/recyclingPlaceCard/RecyclingPlaceCard";
import recyclingPlaceImg from "../../../assets/recycling-place.png"
import {Map} from "../../components/map/Map"
import {MapContainer, TileLayer, Marker, Popup, ZoomControl} from 'react-leaflet'
import {LargeInput} from "../../components/ui/inputs/large/LargeInput";
import {DropList} from "../../components/ui/dropDownList/DropList";
import {FC, useEffect, useState} from "react";
import {RecyclingBottomSheet} from "../../components/bottomSheet/recyclingBottomSheet/RecyclingBottomSheet";
import {RecyclingFiltersBottomSheet} from "../../components/bottomSheet/recyclingFiltersBottomSheet/RecyclingFiltersBottomSheet";
import {RecyclingCard, RecyclingCards} from "../../stores/recyclingCardsStore";
import {useStores} from "../../../utils/use-stores-hook";
import {SignIn} from "../../components/Modals/SignIn/SignIn";
import {FullRecyclingCard} from "../../components/Modals/FullRecyclingCard/FullRecyclingCard";
import {SkeletonRecyclingPlaces} from "../../components/animation/skeletonRecyclingPlaces/SkeletonRecyclingPlaces";

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


export const RecyclingPlaces = () =>{

    const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
    const [isOpenPoints, setIsOpenPoints] = useState<boolean>(false);
    const [isOpenFullRecyclingCard,setIsOpenFullRecyclingCard] = useState<boolean>(true);
    const [recyclingCards, setRecyclingCards] = useState<Array<RecyclingCard>>([]);
    const [loading, setLoading] = useState(false);


    const {modalStore: { setCurrentModal } } = useStores();


    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setLoading(false);
        }, 1200);
        return () => clearTimeout(timing);
    }, []);


    useEffect(() => {
        setRecyclingCards(RecyclingCards);
    }, []);

    const onFilterClick = () => {
        setIsOpenFilter(!isOpenFilter);
    };

    const onPointsClick = () => {
        setIsOpenPoints(!isOpenPoints);
    };

    const openModalCard = () =>{
        setIsOpenFullRecyclingCard(false);
        setCurrentModal(FullRecyclingCard);
    }


    return(
        <>
            { loading ? <SkeletonRecyclingPlaces/> :

                <div className="recycling-place-cards-wrapper">
                    <div className="menu-on-map">
                        <div className="input-and-select">
                            <LargeInput onClick={onPointsClick}/>
                            <DropList title="Выбрано 3 магазина" subtitle={["H&M","P&B","H&M","Adidas","Nike"]}/>
                            <DropList title={"Материалы"} subtitle={["Дерево","Переработанный пластик","Еще что-то"]}/>
                            <button className="filter-btn" onClick={onFilterClick}>
                                <Icon name={"filter-btn"} height={24} width={24}/>
                            </button>
                        </div>
                    </div>

                    <div className="cards-wrapper">
                        <div className="cards-on-map">
                            {recyclingCards.map(card =>(
                                isOpenFullRecyclingCard ?
                                    <button className="btn-card-recycling" onClick={openModalCard}>
                                        <RecyclingPlaceCard id={card.id}
                                                            image={card.image}
                                                            address={card.address}
                                                            description={card.description}/>
                                    </button> : null
                            ))}
                        </div>
                    </div>

                    <MapContainer
                        center={[55.792910, 49.122429]}
                        zoom={13}
                        zoomControl={false}
                        scrollWheelZoom={false}
                        className="mapContainer"
                    >

                        <div className="parent_content">
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[55.792910, 49.122429]}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </div>
                        <ZoomControl />
                    </MapContainer>

                    <RecyclingBottomSheet isOpen={isOpenPoints}/>
                    <RecyclingFiltersBottomSheet isOpen={isOpenFilter}/>

                </div>
            }
        </>


    )
}