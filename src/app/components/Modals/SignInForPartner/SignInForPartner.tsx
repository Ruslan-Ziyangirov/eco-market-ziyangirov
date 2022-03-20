import {FC} from "react";
import {observer} from "mobx-react";
import {useStores} from "../../../../utils/use-stores-hook";
import {SignIn} from "../SignIn/SignIn";
import {EnterTheCode} from "../EnterTheCode/EnterTheCode";
import {Modal} from "../Modal";
import {Field, Form, Formik} from "formik";
import {signInScheme} from "../../../schemas/SchemForValidate";
import {Button} from "../../ui/buttons/Button";
import {SignInWithCode} from "../SignInWithCode/SignInWithCode";
import  "./SignInForPartner.sass";
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

export const SignInForPartner = observer(() =>{
    const { modalStore: {clearCurrentModal, setCurrentModal} } = useStores();

    const onSignInWithCode = () =>{
        clearCurrentModal();
        setCurrentModal(SignInWithCode);
    }

    const onIRegistered = () =>{
        clearCurrentModal();
        setCurrentModal(SignIn);
    }

    const onRegistration = () => {
        clearCurrentModal();
        setCurrentModal(Registration);
    }

    const onButtonClick = () => {
        console.log("кнопка жмякается");
    };

    const onToGetTheCode = () =>{
        clearCurrentModal();
        setCurrentModal(EnterTheCode)
    }

    return(
        <Modal onClose={clearCurrentModal}>

            <Formik initialValues={{
                email: "",
                password:""
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
                                <Field  name="email" placeholder="Email" />

                                {errors.email && touched.email ? (
                                    <p className="error">{errors.email}</p>
                                ) : null}

                                <Field  name="password" placeholder="Пароль" />

                                {errors.password && touched.password ? (
                                    <p className="error">{errors.password}</p>
                                ) : null}

                            </Form>
                            <Button
                                onClick={onButtonClick}
                                title="Войти"
                                color="#FFF"
                                background="#07C88E"
                                type={"submit"}/>
                        </div>

                        <div className="link-wrapper">
                            <button className="btn-as-link" onClick={onIRegistered}>
                                Я уже зарегистрировался(-ась)
                            </button>

                            <button className="btn-as-link" onClick={onRegistration}>
                                Регистрация
                            </button>
                        </div>

                    </div>
                )}
            </Formik>

        </Modal>
    )
})