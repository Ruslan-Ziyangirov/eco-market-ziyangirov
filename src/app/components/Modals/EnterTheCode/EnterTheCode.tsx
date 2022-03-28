import {observer} from "mobx-react";
import "./EnterTheCode.sass"
import {Field, Form, Formik} from "formik";
import {Button} from "../../ui/buttons/large/Button";
import {Modal} from "../Modal";
import {Icon} from "../SignInWithCode/SignInWithCode";
import {useStores} from "../../../../utils/use-stores-hook";
import {signInScheme} from "../../../schemas/SchemForValidate";
import {SignInForPartner} from "../SignInForPartner/SignInForPartner";

export const EnterTheCode = observer(() =>{
    const { modalStore: {clearCurrentModal, setCurrentModal} } = useStores();

    const onButtonClick = () => {
        console.log("кнопка жмякается");
    };

    const onSignInForPartner = () => {
        clearCurrentModal();
        setCurrentModal(SignInForPartner);
    }

    return(
        <Modal onClose={clearCurrentModal}>

            <Formik initialValues={{
                code: "",
            }}
                    validationSchema={signInScheme}
                    onSubmit={values => {
                        alert(values);
                    }}
            >
                {({errors,touched}) =>(
                    <div className="elements-wrapper">

                        <div className="title-btn-wrapper">
                            <h3>Ввести код</h3>
                            <button className="btn-close" onClick={clearCurrentModal}>
                                <Icon name="close-btn" height="20" width="20"/>
                            </button>
                        </div>

                        <p className="prompt">
                            Введите код отправленный вам на телефон <br/>
                            <span className="number">+7 (917) 888 88 88</span>
                        </p>

                        <div className="form-wrapper">
                            <Form>
                                <Field  name="code" placeholder="Код" />
                                {errors.code && touched.code ? (
                                    <p className="error">{errors.code}</p>
                                ) : null}
                            </Form>
                            <Button
                                onClick={onButtonClick}
                                title="Отправить"
                                color="#FFF"
                                background="#07C88E"
                                type={"submit"}/>
                        </div>

                        <div className="link-wrapper">
                            <button className="btn-as-link" onClick={onButtonClick}>
                                Не получил(-а) код
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