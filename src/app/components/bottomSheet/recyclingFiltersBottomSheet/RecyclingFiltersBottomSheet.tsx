import {FC, useEffect, useState} from "react";
import {BottomSheet} from "react-spring-bottom-sheet";
import {ButtonFilters} from "../../ui/buttons/filters/ButtonFilters";
import {ButtonMedium} from "../../ui/buttons/medium/ButtonMedium";
import {FilterCheckboxes} from "../../filterCheckboxes/FilterCheckboxes";
import "react-spring-bottom-sheet/dist/style.css";
import "./RecyclingFiltersBottomSheet.sass"

interface Props {
    isOpen: boolean;

}

export const RecyclingFiltersBottomSheet: FC<Props> = ({ isOpen }) => {
    const [open, setOpen] = useState<boolean>(isOpen);

    useEffect(()=>{
        setOpen(isOpen)
    }, [isOpen]);

    return (

        <BottomSheet
            className=""
            open={open}
            blocking={false}
            scrollLocking={false}
            snapPoints={({ headerHeight, maxHeight }) => [
                headerHeight,
                (maxHeight - 56) * 0.65,
                maxHeight - 56
            ]}
            onDismiss={()=> {
                setOpen(false)
                isOpen=false
            }}
            footer={
                <>
                    <ButtonMedium
                        type={"button"}
                        onClick={()=>setOpen(false)}
                        title={"Применить"}
                        color={"white"}
                        background={"#07C88E"}
                    />

                    <ButtonMedium
                        type={"button"}
                        onClick={()=>setOpen(false)}
                        title={"Сбросить фильтры"}
                        color={"rgba(0, 11, 38, 0.8)"}
                        background={"rgba(62, 80, 114, 0.08)"}
                    />
                </>
            }
        >
            <div className=" ">
                <FilterCheckboxes/>
            </div>
        </BottomSheet>

    );
};