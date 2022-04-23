import {FC} from "react";
import "./ButtonFilters.sass";

interface Props{
    isActive?: boolean;
    onClick?: (e : any) => void;
    isDisabled?: boolean;
    type:any
}

export const ButtonFilters:FC<Props> = ({onClick, type, isActive, isDisabled}) =>{


    return(
        <div className="filters">
            <button disabled={isDisabled} onClick={onClick} className="btn-for-filter" type={type}>
                По популярности
            </button>

            <button disabled={isDisabled} onClick={onClick} className="btn-for-filter" type={type}>
                По цене
            </button>

            <button disabled={isDisabled} onClick={onClick} className="btn-for-filter" type={type}>
                По новизне
            </button>
        </div>

    )
}