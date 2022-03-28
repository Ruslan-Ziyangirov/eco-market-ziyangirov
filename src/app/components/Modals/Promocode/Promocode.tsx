import {FC, useEffect, useState} from "react";
import {useStores} from "../../../../utils/use-stores-hook";
import {Modal} from "../Modal";





export const Promocode = () =>{

    const { modalStore: {clearCurrentModal, setCurrentModal} } = useStores();

    const onButtonClick = () => {
        console.log("кнопка жмякается");
    };

    return (
        <Modal onClose={clearCurrentModal}>
            <div className="promocode-modal-wrapper">
                <div className="information-wrapper">
                    <h3>QR-код на покупку создан</h3>
                    <p>При оплате покажите его сотруднику на кассе</p>


                </div>
            </div>
        </Modal>
    )
}