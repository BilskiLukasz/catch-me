import React from 'react';
import Button from '../components/Button';
import Title from '../components/Title';
import ShortInfo from '../components/ShortInfo';

const RecapModal = ({
    closeRecapFn
}) => {
    return (
        <div className="modal">
            <div className="modal-section modal-section-output">
                <Title toEmphasize="Łukasz" restTitle="twoje wyniki:"/>
                <ShortInfo text="Aktualny wynik: 54"/>
                <ShortInfo text="Najlepszy wynik: 154"/>
            </div>
            <div className="modal-section modal-section-input">
                <Button textOnButton="INPUT INPUT INPUT"/>
                <Button onClickFn={closeRecapFn} textOnButton="zamknij modala"/>
            </div>
        </div>
        )
}

export default RecapModal;