import React from 'react';

const Button = ({
    onClickFn,
    textOnButton,
}) => {
    return(
        <button className="button" onClick={onClickFn}>
            {textOnButton.toUpperCase()}
        </button>
    )
}

export default Button;