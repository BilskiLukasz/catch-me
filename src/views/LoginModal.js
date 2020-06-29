import React from 'react';
import Button from '../components/Button';

const LoginModal = ({
    closeLoginFn,
}) => {
    return (
        <div className="modal">
            <div className="modal-section modal-section-output">
                <p>LOGIN MODAL</p>
            </div>
            <div className="modal-section">
                <Button textOnButton="podaj swoję imię"/>
                <div className="modal-section-items">
                    <Button textOnButton="1x1"/>
                    <Button textOnButton="2x2"/>
                    <Button textOnButton="3x3"/>
                    <Button textOnButton="4x4"/>
                    <Button textOnButton="5x5"/>
                    <Button textOnButton="6x6"/>
                </div>
                <Button onClickFn={closeLoginFn} textOnButton="zamknij modala"/>
            </div>
        </div>
    )
}

export default LoginModal;