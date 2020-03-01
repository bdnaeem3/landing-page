import React from 'react'

export default props => {
    return(
        <div>
            <img src={props.image} alt={props.title}/>

            {
                props.title &&
                <h3 style={{...props.titleStyle}}>{props.title}</h3>
            }

        </div>
    )
}