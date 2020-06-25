import React from 'react';

const Button = ({
    textOnButton,
}) => {
    return(
        <button className="button">
            {textOnButton}
        </button>
    )
}

export default Button;