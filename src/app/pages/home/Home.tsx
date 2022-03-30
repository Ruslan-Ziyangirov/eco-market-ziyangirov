import {Header} from "../../components/header/Header";
import {Slider} from "../../components/slider/Slider";
import {Cards} from "../../components/cards/Cards";
import {Footer} from "../../components/footer/Footer";
import {observer} from "mobx-react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";


export const Home = () =>{

    const position = [51.505, -0.09]

    return(
        <div>
            <Slider/>
            <Cards/>
            <Footer/>

            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
