import {FC} from "react";
import "./CheckBox.sass";

interface Props{
    title: string;
    background: string;
    handleOnChange:any;
    isChecked: boolean;
    index: number;
}

export const Checkbox:FC<Props> = ({title, background, handleOnChange, isChecked, index}) => {

    return(
        <div>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleOnChange}
                id={`custom-checkbox-${index}`}
                style={{background:`${background}`}}
                value={title}
            />
            <label htmlFor={`custom-checkbox-${index}`}>{title}</label>
        </div>
    )
}
