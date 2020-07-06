import React from 'react';

const FormGroupOption = ({
    appState,
    name,
    onClickFn,
    value
}) => {
    return (
        <label 
            className={`button ${appState === value ? "active" : ""}`}>
        <input
            className = "radio"
            type="radio" 
            name={name}
            checked = {appState === value}
            onChange={onClickFn} 
            value={value}/>
            {value} x {value}
        </label>
    )
}

export default FormGroupOption;