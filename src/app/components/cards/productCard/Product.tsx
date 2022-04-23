import "./Product.sass";
import {FC, useState} from "react";
// @ts-ignore
import balance from "../../../../assets/balance.png";
import {useStores} from "../../../../utils/use-stores-hook";
import {Promocode} from "../../Modals/Promocode/Promocode";
import {useSpring} from "react-spring";

interface Props{
    producer:string;
    title:string;
    gender:string;
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


export const Product:FC<Props> = ({producer,title, gender,price, path }) =>{

    const [isLoading, setIsLoading] = useState(true);

    const {modalStore: { setCurrentModal } } = useStores();

    const onOpenModal = () =>{
        setCurrentModal(Promocode);
    }

    const styling = useSpring({
        from: {
            background: 'rgba(255, 255, 255, 0.1)',
            x: 0
        },
        to: {
            background: 'rgba(255, 255, 255, 0)',
            x: 250
        },
        config: {
            duration: 1000,
        },
        reset: true,
        loop: true
    })

    return(
        <div className="product">
            <div className="producer">
                <p>{producer}</p>
            </div>
            <button className="img-button" onClick={onOpenModal}>
                <img className="img-product" src={path}/>
            </button>

            <h4>{title}</h4>
            <p className="description">{gender}</p>

            <div className="balance">
                <img className="logo-balance" src={balance}/>
                <p className="count">{price}</p>
            </div>

        </div>
    )
}