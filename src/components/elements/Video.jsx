import React from 'react'

export default props => {

    const video = () => {
        return(
            <video width={props.width} height={props.height} controls>
                <source src={props.link} type="video/mp4"/>
                <source src={props.link} type="video/ogg"/>
                Your browser does not support the video tag
            </video>
        )
    }

    return(
        props.link ? video() : ''

    )
}