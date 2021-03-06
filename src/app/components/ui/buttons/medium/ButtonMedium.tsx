import {FC} from "react";
import "./ButtonMedium.sass"

interface Props{
    title: string;
    color: string;
    background: string;
    onClick?: any;
    type?:any
}

export const ButtonMedium:FC<Props> = ({title,color,background, onClick, type}) =>{


    return(
        <button onClick={onClick} type={type} className="btn-medium" style={{
            color: `${color}`,
            background: `${background}`,
        }}>{title}</button>
    )
}