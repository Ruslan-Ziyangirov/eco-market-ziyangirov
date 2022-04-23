import { BottomSheet } from "react-spring-bottom-sheet";
import {FC, useEffect, useState} from "react";
import {ButtonMedium} from "../../ui/buttons/medium/ButtonMedium";
import "react-spring-bottom-sheet/dist/style.css";
import {ButtonFilters} from "../../ui/buttons/filters/ButtonFilters";
import {FilterCheckboxes} from "../../filterCheckboxes/FilterCheckboxes";

interface Props {
    isOpen: boolean;

}

export const MarketBottomSheet: FC<Props> = ({ isOpen }) => {
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
            header={
                <div className="button-filters-mob">
                    <ButtonFilters type={"button"}/>
                </div>
            }
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