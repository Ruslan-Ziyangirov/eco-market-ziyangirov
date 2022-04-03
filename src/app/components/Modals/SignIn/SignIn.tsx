import {Modal} from "../Modal";
import {observe} from "web-vitals/dist/modules/lib/observe";
import {observer} from "mobx-react";
import {useStores} from "../../../../utils/use-stores-hook";
import {FC, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./SignIn.sass"
import {Button} from "../../ui/buttons/large/Button";
import * as Yup from "yup";
import {Field, Form, Formik, FormikValues, useFormik} from "formik";
import {SignInWithCode} from "../SignInWithCode/SignInWithCode";
import {signInScheme} from "../../../schemas/SchemForValidate";
import {SignInForPartner} from "../SignInForPartner/SignInForPartner";
import {Registration} from "../Registration/Registration";
import axios from "axios";



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

    const schemaIn = Yup.object().shape({
        password: Yup.string()
            .required("Пожалуйста,введите пароль")
            .matches(/^(?=.*[0-9])(?=.*[a-z]).{3,10}$/g,
                "Пароль должен содержать строчные латинские  буквы, а также цифру")
            .min(5, "Минимальная длинна пароля - 5 символа"),
        email: Yup.string()
            .required("Пожалуйста,введите почту")
            .email("Введите действительную почту"),
    });

    const onSignInWithCode = () =>{
        clearCurrentModal();
        setCurrentModal(SignInWithCode);
    }

    const onRegistration = () => {
        clearCurrentModal();
        setCurrentModal(Registration);
    }

    const onSignInForPartner = () => {
        clearCurrentModal();
        setCurrentModal(SignInForPartner);
    }

    const onSignIn = (values: FormikValues) => {
        axios.post("login", {
            login: values.email,
            password: values.password
        })
            .then((res) => {
                console.log(res.data);
                clearCurrentModal();
            })
            .catch((err) => {
                console.log(err);
            })
    };


    return (
        <Modal onClose={clearCurrentModal}>

            <Formik initialValues={{
                email: "",
                password: ""
            }}
                    onSubmit={(values) => {
                        console.log("УРА АВТОРИЗАЦИЯ!!!!!!")
                        onSignIn(values);
                    }}
                    validationSchema={schemaIn}

            >
                {({errors,touched, handleSubmit, values}) =>(
                    <div className="elements-wrapper">
                        <div className="title-btn-wrapper">
                            <h3>Вход</h3>
                            <button className="btn-close" onClick={clearCurrentModal}>
                                <Icon name="close-btn" height="20" width="20"/>
                            </button>
                        </div>
                        <div className="form-wrapper">
                            <form onSubmit={handleSubmit}>

                                <Field  name="email"
                                        placeholder="Email" />

                                {errors.email && touched.email ? (
                                    <p className="error">{errors.email}</p>
                                ) : null}

                                <Field    name="password"
                                          placeholder="Пароль"  />

                                {errors.password && touched.password ? (
                                    <p className="error">{errors.password}</p>
                                ) : null}

                                <Button
                                    title="Войти"
                                    color="#FFF"
                                    background="#07C88E"
                                    type="submit"
                                    onClick={()=>{
                                        console.log(values.email)
                                    }}
                                />

                            </form>

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