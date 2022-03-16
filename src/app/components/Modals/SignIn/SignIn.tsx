import {Modal} from "../Modal";
import {observe} from "web-vitals/dist/modules/lib/observe";
import {observer} from "mobx-react";
import {useStores} from "../../../../utils/use-stores-hook";
import {FC} from "react";
import {Link} from "react-router-dom";
import "./SignIn.sass"
import {Input} from "../ui/inputs/Input";
import {Button} from "../ui/buttons/Button";
import * as Yup from "yup";
import {Field, Form, Formik , useFormik} from "formik";
import {SignInWithCode} from "../SignInWithCode/SignInWithCode";
import {signInScheme} from "../../../schemas/SchemForValidate";
import {SignInForPartner} from "../SignInForPartner/SignInForPartner";
import {Registration} from "../Registration/Registration";


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



export const SignIn = observer( () =>{
    const { modalStore: {clearCurrentModal, setCurrentModal} } = useStores();

    const onSignInWithCode = () =>{
        clearCurrentModal();
        setCurrentModal(SignInWithCode);
    }

    const onButtonClick = () => {
        console.log("кнопка жмякается");
    };

    const onRegistration = () => {
        clearCurrentModal();
        setCurrentModal(Registration);
    }

    const onSignInForPartner = () => {
        clearCurrentModal();
        setCurrentModal(SignInForPartner);
    }


    return (
        <Modal onClose={clearCurrentModal}>

            <Formik initialValues={{
                phone: "",
                password: ""
            }}
                    validationSchema={signInScheme}
                    onSubmit={values => {
                        alert(values);
                    }}
            >
                {({errors,touched}) =>(
                    <div className="elements-wrapper">
                        <div className="title-btn-wrapper">
                            <h3>Вход</h3>
                            <button className="btn-close" onClick={clearCurrentModal}>
                                <Icon name="close-btn" height="20" width="20"/>
                            </button>
                        </div>
                        <div className="form-wrapper">
                            <Form>

                                <Field   name="phone" placeholder="Телефон" />

                                {errors.phone && touched.phone ? (
                                    <p className="error">{errors.phone}</p>
                                ) : null}

                                <Field    name="password" placeholder="Пароль"  />

                                {errors.password && touched.password ? (
                                    <p className="error">{errors.password}</p>
                                ) : null}

                            </Form>

                            <Button
                                onClick={onButtonClick}
                                title="Войти"
                                color="#FFF"
                                background="#07C88E"
                                type={"submit"}
                                />
                        </div>
                        <div className="link-wrapper">
                            <button className="btn-as-link" onClick={onSignInWithCode}>
                                Войти с помощью кода
                            </button>
                            <button className="btn-as-link" onClick={onRegistration}>
                                Регистрация
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
});