import React from 'react';

export default props => {
    return(
        <li>
            <a href={props.link}>{props.name}</a>
        </li>
    )
}