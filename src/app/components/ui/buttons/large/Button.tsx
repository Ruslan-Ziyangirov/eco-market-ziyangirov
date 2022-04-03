import {FC} from "react";
import "./Button.sass";

interface Props{
    title: string;
    color: string;
    background: string;
    onClick?: any;
    type?:any
}

export const Button:FC<Props> = ({title,color,background, onClick, type}) =>{


    return(
        <button onClick={onClick} type={type} className="btn-for-modal" style={{
            color: `${color}`,
            background: `${background}`,
        }}>{title}</button>
    )
}