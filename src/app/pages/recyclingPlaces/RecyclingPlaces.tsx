import {Footer} from "../../components/footer/Footer";
import "./RecyclingPlaces.sass"
import {RecyclingPlaceCard} from "../../components/cards/recyclingPlaceCard/RecyclingPlaceCard";
import recyclingPlaceImg from "../../../assets/recycling-place.png"
import {Map} from "../../components/map/Map"
import {MapContainer, TileLayer, Marker, Popup, ZoomControl} from 'react-leaflet'
import {LargeInput} from "../../components/ui/inputs/large/LargeInput";

export const RecyclingPlaces = () =>{
    return(
        <div className="recycling-place-cards-wrapper">


            <div className="menu-on-map">
                <LargeInput/>
            </div>

            <div className="cards-wrapper">
                <div className="cards-on-map">
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


        </div>
    )
}