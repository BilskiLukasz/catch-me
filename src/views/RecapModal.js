import React from 'react';
import Button from '../components/Button';
import Title from '../components/Title';
import ShortInfo from '../components/ShortInfo';
import AppContext from '../Context';
import FormGroup from '../components/FormGroup'

const RecapModal = ({
    closeRecapFn
}) => {
    return (
        <AppContext.Consumer>
            {(context) => (<div className="modal">
                <div className="modal-section modal-section-output">
                    <Title toEmphasize={context.appState.name} restTitle="twoje wyniki:"/>
                    <ShortInfo text={`Aktualny wynik: ${context.appState.actualScore}`}/>
                    <ShortInfo text={`Najlepszy wynik: ${context.appState.bestScore}`}/>
                </div>
                <div className="modal-section modal-section-input">
                    <FormGroup />
                    <Button onClickFn={closeRecapFn} textOnButton="Zagraj ponownie"/>
                </div>
            </div>)}
        </AppContext.Consumer>
        )
}

export default RecapModal;