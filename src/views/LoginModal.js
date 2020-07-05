import React from 'react';
import Button from '../components/Button';
import Title from '../components/Title';
import ShortInfo from '../components/ShortInfo';
import InputField from '../components/InputField';
import FormGroup from '../components/FormGroup';

const LoginModal = ({
    closeLoginFn,
}) => {
    return (
        <div className="modal">
            <div className="modal-section modal-section-input">
                <InputField sampleText="Podaj swoję Imię"/>
                <FormGroup />
                <Button onClickFn={closeLoginFn} textOnButton="zamknij modala"/>
            </div>
            <div className="modal-section modal-section-output">
                <Title toEmphasize="Cześć"/>
                <ShortInfo text="Gra polega na łapaniu pomarańczego kafelka. 
                Pamiętaj tylko, że tempo gry rośnie wraz ze zdobytymi punktami, 
                a kliknięcie na inny  (nieaktywny) kafelek lub spóźnienie spowoduje utratę punktów."/>              
            </div>
        </div>
    )
}

export default LoginModal;