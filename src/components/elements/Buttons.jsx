import React from 'react'

export default props => {
    return(
        <a href={props.href || `/`} className={`primary-btn`}>{props.title || 'Click Me'}</a>
    )
}