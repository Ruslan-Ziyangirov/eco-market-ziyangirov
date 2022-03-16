import "./SignInWithCode.sass"
import {FC} from "react";
import {observer} from "mobx-react";
import {Modal} from "../Modal";
import {Field, Form, Formik} from "formik";
import {Button} from "../ui/buttons/Button";
import {useStores} from "../../../../utils/use-stores-hook";
import * as Yup from "yup";
import {SignIn} from "../SignIn/SignIn";
import {EnterTheCode} from "../EnterTheCode/EnterTheCode";
import {signInScheme} from "../../../schemas/SchemForValidate";
import {SignInForPartner} from "../SignInForPartner/SignInForPartner";

interface Props{
    name:string,
    height: number|string;
    width:number|string;
}

export const Icon: FC<Props> = ({ name, height,width}) => {
    return (
        <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            style={{
                width: `${width}px`,
                height: `${height}px`,
            }}
        >
            <use xlinkHref={`/sprite.svg#${name}`}></use>
        </svg>
    );
}

export const SignInWithCode = observer(() =>{
    const { modalStore: {clearCurrentModal, setCurrentModal} } = useStores();

    const onIRegistered = () =>{
        clearCurrentModal();
        setCurrentModal(SignIn);
    }

    const onSignInForPartner = () => {
        clearCurrentModal();
        setCurrentModal(SignInForPartner);
    }

    const onToGetTheCode = () =>{
        clearCurrentModal();
        setCurrentModal(EnterTheCode)
    }


    return(
        <Modal onClose={clearCurrentModal}>

            <Formik initialValues={{
                phone: "",
            }}
                    validationSchema={signInScheme}
                    onSubmit={values => {
                        alert(values);
                    }}
            >
                {({errors,touched}) =>(
                    <div className="elements-wrapper">

                        <div className="title-btn-wrapper">
                            <h3>Вход или регистрация</h3>
                            <button className="btn-close" onClick={clearCurrentModal}>
                                <Icon name="close-btn" height="20" width="20"/>
                            </button>
                        </div>

                        <div className="form-wrapper">
                            <Form>
                                <Field  name="phone" placeholder="Телефон" />

                                {errors.phone && touched.phone ? (
                                    <p className="error">{errors.phone}</p>
                                ) : null}

                            </Form>
                            <Button
                                onClick={onToGetTheCode}
                                title="Получить код"
                                color="#FFF"
                                background="#07C88E"
                                type={"submit"}/>
                        </div>

                        <div className="link-wrapper">
                            <button className="btn-as-link" onClick={onIRegistered}>
                                Я уже зарегистрировался(-ась)
                            </button>
                        </div>

                        <Button
                            onClick={onSignInForPartner}
                            title="Вход для партнеров"
                            color="rgba(0, 11, 38, 0.8)"
                            background="rgba(62, 80, 114, 0.08)"
                            type={"button"}/>

                    </div>
                )}
            </Formik>

        </Modal>
    )
})