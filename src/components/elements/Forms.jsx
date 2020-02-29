import React from 'react'


export const TextInput = props => {
    return(
        <input type={`text`} placeholder={props.placeholder}/>
    )
}

export const SubmitButton = props => {
    return(
        <input type={`submit`} className={`submit-btn`} value={props.value || 'Submit'} onClick={props.onClick}/>
    )
}