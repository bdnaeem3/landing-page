import React from 'react';


export default props => {
    return (
        <div className={"features-card"}>
            <img src={props.imageURL} alt={props.title}/>
            <h3 style={{color: props.titleColor}}>{props.title}</h3>
            <p>{props.children}</p>
        </div>
    )
}