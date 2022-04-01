import "./RecyclingPlaceCard.sass"
import {FC} from "react"

interface Props{
    image: string
    address: string
    description: string
}

export const RecyclingPlaceCard:FC<Props> = ({image, address, description}) => {
    return(
        <div className="recycling-place-card-wrapper">
            <div className="image-information-wrapper">
                <img src={image}/>
                <div className="recycling-place-information">
                    <h3>{address}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}