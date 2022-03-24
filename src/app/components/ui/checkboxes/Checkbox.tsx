import {FC} from "react";
import "./CheckBox.sass";

interface Props{
    title: string;
    isChecked: boolean
    checkHandler:any
    index?: number
}

export const Checkbox:FC<Props> = ({title, isChecked, checkHandler, index}) => {

    return(
        <div className="checkbox-wrapper">
            <label className="custom-checkbox">
                <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    checked={isChecked}
                    onChange={checkHandler}
                />
                <span>{title}</span>
            </label>
        </div>
    )
}
