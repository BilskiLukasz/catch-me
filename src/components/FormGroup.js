import React from 'react';
import Button from './Button';

const FormGroup = () => {
    
    return (
        <fieldset className="form-group">
            <legend className="form-group-title">Wybierz rozmiar planszy:</legend>

                <div className="form-group-elements">

                <label className="button">
                <input type="radio" name="group1" value="1"/>
                    Pierwszy
                </label>
                <label className="button">
                <input type="radio" name="group1" value="2"/>
                    Drugi
                </label>
                <label className="button">
                <input type="radio" name="group1" value="3"/>
                    Trzeci
                </label>

                </div>
        </fieldset>
    )
}

export default FormGroup;