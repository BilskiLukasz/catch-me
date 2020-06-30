import React from 'react';

const Title = ({
    toEmphasize,
    restTitle,
}) => {
    return (
        <p>
            <span className="emphasizeText">{toEmphasize}</span>, {restTitle}
        </p>
    )
}

export default Title;