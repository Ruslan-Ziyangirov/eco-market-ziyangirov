import {FC} from "react";
import {observer} from "mobx-react";
import {useStores} from "../../../../utils/use-stores-hook";
import {SignInWithCode} from "../SignInWithCode/SignInWithCode";
import {SignInForPartner} from "../SignInForPartner/SignInForPartner";
import {Modal} from "../Modal";
import {Field, Form, Formik, FormikValues, useFormik} from "formik";
import {signInScheme} from "../../../schemas/SchemForValidate";
import {Button} from "../../ui/buttons/large/Button";
import axios from "axios";
import * as Yup from "yup";

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



export const Registration = observer( () => {
    const {modalStore: {clearCurrentModal, setCurrentModal}} = useStores();


    const onSignInWithCode = () => {
        clearCurrentModal();
        setCurrentModal(SignInWithCode);
    }

    const onSignInForPartner = () => {
        clearCurrentModal();
        setCurrentModal(SignInForPartner);
    }

    const schema = Yup.object().shape({
        password: Yup.string()
            .required("Пожалуйста,введите пароль")
            .matches(/^(?=.*[0-9])(?=.*[a-z]).{3,10}$/g,
                "Пароль должен содержать строчные латинские  буквы, а также цифру")
            .min(5, "Минимальная длинна пароля - 5 символа"),
        email: Yup.string()
            .required("Пожалуйста,введите почту")
            .email("Введите действительную почту"),
        phone: Yup.string()
            .required("Пожалуйста,введите номер телефона")
            .matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g,
                "Неверный формат номера"),
        username: Yup.string()
            .required("Пожалуйста,введите наименование организации")
    });

    const onSignUp = (values: FormikValues) => {
        axios.post("account", {
            username: values.username,
            email: values.email,
            phone_number: values.phone,
            password: values.password
        })
            .then((res)=>{
                console.log(res.data);
                clearCurrentModal();
            })
            .catch((err)=>{
                console.log(err);
            })
    };




    return (
        <Modal onClose={clearCurrentModal}>
            
            <Formik initialValues={{
                username: '',
                phone: '',
                password: '',
                email: ''
            }}
                    onSubmit={(values) => {
                        console.log("АЛЛООООО РАБОТАЙ!!!!!")
                        onSignUp(values);
                    }}
                    validationSchema={schema}
            >
                {({errors, touched, handleSubmit,values
                  }) => (
                    <div className="elements-wrapper">
                        <div className="title-btn-wrapper">
                            <h3>Регистрация</h3>
                            <button className="btn-close" onClick={clearCurrentModal}>
                                <Icon name="close-btn" height="20" width="20"/>
                            </button>
                        </div>
                        <div className="form-wrapper">
                            <form onSubmit={handleSubmit}  >

                                <Field name="username"
                                       placeholder="Имя"

                                />
                                {errors.username && touched.username ? (
                                    <p className="error">{errors.username}</p>
                                ) : null}

                                <Field   name="email"
                                         placeholder="Email"
                                />

                                {errors.email && touched.email ? (
                                    <p className="error">{errors.email}</p>
                                ) : null}

                                <Field   name="phone"
                                         placeholder="Телефон"
                                />

                                {errors.phone && touched.phone ? (
                                    <p className="error">{errors.phone}</p>
                                ) : null}

                                <Field    name="password"
                                          placeholder="Пароль"
                                />

                                {errors.password && touched.password ? (
                                    <p className="error">{errors.password}</p>
                                ) : null}

                                <Button
                                    title="Зарегистрироваться"
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
});