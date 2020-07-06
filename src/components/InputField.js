import React from 'react';
import AppContext from '../Context'

const InputField = ({
    sampleText,
}) => {
    return (
        <AppContext.Consumer>
            {(context) => (
                <input
                    className="input-field"
                    type="text"
                    onChange={context.updateName}
                    placeholder={sampleText}
                    onFocus= {(e) => e.target.placeholder =""}
                    onBlur = {(e) => e.target.placeholder = sampleText }
                />
            )}
        </AppContext.Consumer>
    )
}

export default InputField;