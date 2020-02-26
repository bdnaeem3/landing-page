import React from 'react';

export default props => {
    return(
        <li>
            <a {...props}>{props.children}</a>
        </li>
    )
}