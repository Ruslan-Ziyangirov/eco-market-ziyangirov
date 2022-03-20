import {FC} from "react";
import "./Input.sass"

interface Props{
    placeholder: string;
    id: string;
    name:string;
}

export const Input:FC<Props> = ({placeholder, id, name}) =>{
 return(
    <input className="input-for-modal" placeholder={placeholder} />
 )
}