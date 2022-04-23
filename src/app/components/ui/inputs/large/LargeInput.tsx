import {FC} from "react";
import "./LargeInput.sass";

interface Props{
    name:string,
    height: number|string;
    width:number|string;
}

interface Input{
    onClick?: any;
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


export const LargeInput:FC<Input> = ({onClick}) =>{
    return(
        <div className="input-wrapper" onClick={onClick}>
            <div className="icon">
                <Icon name="search" height={"16"} width={"16"}/>
            </div>
            <input className="large-input" placeholder="Поиск"/>
        </div>
    )
}