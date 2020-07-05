import React from 'react';

const InputField = ({
    sampleText,
}) => {
    return (
        <input
            className="input-field"
            type="text"
            placeholder={sampleText}
            onFocus= {(e) => e.target.placeholder =""}
            onBlur = {(e) => e.target.placeholder = sampleText }
        />
    )
}

export default InputField;