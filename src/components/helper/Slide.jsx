import React from 'react'
import Media from "react-media"

export default props => {
    return(
        <div>
            {
                props.mobile_image
                    ?
                    <Media query={{minWidth: 768}}>
                        {
                            matches => (
                                matches ?
                                    <img src={props.image} alt={props.title}/>
                                    :
                                    <img src={props.mobile_image} alt={props.title}/>
                            )

                        }
                    </Media>
                    :
                    <img src={props.image} alt={props.title}/>
            }
            <img src={props.image} alt={props.title}/>

            {
                props.title &&
                <h3 style={{...props.titleStyle}}>{props.title}</h3>
            }

        </div>
    )
}