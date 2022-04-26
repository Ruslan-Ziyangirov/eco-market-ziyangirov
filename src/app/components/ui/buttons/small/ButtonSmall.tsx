import {FC} from "react";
import "./ButtonSmall.sass"

interface Props{
    title: string;
    color: string;
    background: string;
    onClick?: any;
    type?:any;
    width?: any;
}


export const ButtonSmall:FC<Props> = ({title, color, background, onClick, type, width}) =>{
    return (
            <button onClick={onClick} type={type} className="btn-small" style={{
                color: `${color}`,
                background: `${background}`,
                width: `${width}`,
            }}>{title}</button>
    )
}