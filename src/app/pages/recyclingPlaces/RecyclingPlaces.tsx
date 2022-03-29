import {Footer} from "../../components/footer/Footer";
import "./RecyclingPlaces.sass"
import {RecyclingPlaceCard} from "../../components/cards/recyclingPlaceCard/RecyclingPlaceCard";
import recyclingPlaceImg from "../../../assets/recycling-place.png"

export const RecyclingPlaces = () =>{
    return(
        <div className="recycling-place-cards-wrapper">
            <RecyclingPlaceCard
                image={recyclingPlaceImg}
                address={"ул.Кремлёвская, 88"}
                description={"Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы..."}
            />
            <RecyclingPlaceCard
                image={recyclingPlaceImg}
                address={"ул.Кремлёвская, 88"}
                description={"Стекло, бумага, металл, старая одежда, батареи"}
            />
            <RecyclingPlaceCard
                image={recyclingPlaceImg}
                address={"ул.Кремлёвская, 88"}
                description={"Стекло, бумага, металл, старая одежда, батареи"}
            />
            <RecyclingPlaceCard
                image={recyclingPlaceImg}
                address={"ул.Кремлёвская, 88"}
                description={"Стекло, бумага, металл, старая одежда, батареи"}
            />
        </div>
    )
}