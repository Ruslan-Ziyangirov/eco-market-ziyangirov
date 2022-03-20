import "./Footer.sass"
import {FC} from "react";

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

export const Footer = () =>{
    return(
        <footer>
            <div className="footer-wrapper">
                <div className="mail">
                    <Icon name="mail" height={24} width={24}/>
                    <p>info@ecorus.ru</p>
                </div>

                <div className="call">
                    <Icon name="call" height={24} width={24}/>
                    <p>+7 (800) 880-88-88</p>
                </div>
            </div>
        </footer>
    )
}