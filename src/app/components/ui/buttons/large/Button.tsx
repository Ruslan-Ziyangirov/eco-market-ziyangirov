import {FC} from "react";
import "./Button.sass";

interface Props{
    title: string;
    color: string;
    background: string;
    onClick?: any;
    width?: string;
    type?:any
}

export const Button:FC<Props> = ({title,color,background, onClick, type, width}) =>{


    return(
        <button onClick={onClick} type={type} className="btn-for-modal" style={{
            color: `${color}`,
            background: `${background}`,
            width: `${width}`,
        }}>{title}</button>
    )
}