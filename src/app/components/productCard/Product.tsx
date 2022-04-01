import "./Product.sass";
import {FC} from "react";
// @ts-ignore
import balance from "../../../assets/balance.png";
import {useStores} from "../../../utils/use-stores-hook";
import {Promocode} from "../Modals/Promocode/Promocode";

interface Props{
    producer:string;
    title:string;
    description:string;
    price: string;
    path:string;
}

interface Icon{
    name:string,
    height: number|string;
    width:number|string;
}


export const Icon: FC<Icon> = ({ name, height,width}) => {
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


export const Product:FC<Props> = ({producer,title, description,price, path }) =>{

    const {modalStore: { setCurrentModal } } = useStores();

    const onOpenModal = () =>{
        setCurrentModal(Promocode);
    }

    return(
        <div className="product">
            <div className="producer">
                <p>{producer}</p>
            </div>
            <button className="img-button" onClick={onOpenModal}>
                <img className="img-product" src={path}/>
            </button>

            <h4>{title}</h4>
            <p className="description">{description}</p>

            <div className="balance">
                <img className="logo-balance" src={balance}/>
                <p className="count">{price}</p>
            </div>

        </div>
    )
}