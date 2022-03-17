import {FC} from "react";

interface Props{
    title:string;
    color: string;
    background: string;
}


export const Link:FC<Props> = ({title,color,background}) =>{
    return(
        <button  type="submit" className="link-for-modal" style={{
            color: `${color}`,
            background: `${background}`
        }}>{title}</button>
    )
}