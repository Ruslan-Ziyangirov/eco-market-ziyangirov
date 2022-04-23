import {FC, useEffect, useState} from "react";
import {useStores} from "../../../../utils/use-stores-hook";
import {Modal} from "../Modal";
import promocode from "../../../../assets/promocode.png";
import "./Promocode.sass"
import {Button} from "../../ui/buttons/large/Button";
import {observer} from "mobx-react";





export const Promocode = observer(() =>{

    const { modalStore: {clearCurrentModal, setCurrentModal} } = useStores();

    const onButtonClick = () => {
        console.log("кнопка жмякается");
    };

    const onCloseModal = () =>{
        clearCurrentModal();
    }

    return (
        <Modal onClose={clearCurrentModal}>
            <div className="promocode-modal-wrapper">
                <div className="information-wrapper">
                    <h3>QR-код на покупку создан</h3>
                    <p>При оплате покажите его сотруднику на кассе</p>
                    <img src={promocode}/>
                    <h3 className="promocode">E25GHR0P</h3>
                    <p>
                        Если не получается отсканировать QR-код, введите код вручную или продиктуйте сотриднику на кассе
                    </p>
                    <Button title={"Закрыть"} color={"white"} background={"#07C88E"} onClick={onCloseModal} type={"button"}/>

                </div>
            </div>
        </Modal>
    )
})