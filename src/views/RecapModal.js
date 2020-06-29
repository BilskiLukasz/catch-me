import React from 'react';
import Button from '../components/Button';

const RecapModal = ({
    closeRecapFn
}) => {
    return (
        <div className="modal">
            <div className="modal-section modal-section-output">
                <p>RECAP MODAL</p>
            </div>
            <div className="modal-section">
                <Button textOnButton="INPUT INPUT INPUT"/>
                <Button onClickFn={closeRecapFn} textOnButton="zamknij modala"/>
            </div>
        </div>
        )
}

export default RecapModal;