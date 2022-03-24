import {FC} from "react";
import "./ButtonFilter.sass";

interface Props{
    title: string;
    isActive?: boolean;
    onClick?: (e : any) => void;
    isDisabled?: boolean;
    type:any
}

export const ButtonFilter:FC<Props> = ({title,onClick, type, isActive, isDisabled}) =>{


    return(
        <button disabled={isDisabled} onClick={onClick} className="btn-for-filter" type={type}>
            {title}
        </button>
    )
}