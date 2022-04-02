import "./DropList.sass";
import {FC} from "react";

interface List {
    title: string;
    subtitle: string[];
}

export const DropList:FC<List> = ({title, subtitle}) =>{
    return (
            <select className="drop-down-list">
                    <option disabled selected>{title}</option>
                    {subtitle.map(item => (
                        <option>{item}</option>
                    ))}
            </select>
    )
}