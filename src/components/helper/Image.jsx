import React from 'react';

export default props => {

    return(
        <img
            src={props.src}
            alt={`Landing:${props.alt}`}
            {...props}
        />
    )
}