import React from 'react';
import {Col} from 'antd'

export default props => {
    return(
        props.column
            ?
            <Col lg={8} sm={12} xs={24}>
                <div className="single-client-info">
                    <img src={props.image} alt={props.title} style={{
                        maxWidth: props.imageWidth,
                        maxHeight: props.imageHeight,
                    }}/>
                    <h3>{props.title}</h3>
                    <p>{props.children}</p>
                </div>
            </Col>
            :
            <div className="item client-info">
                <img src={props.image} alt={props.title}/>
                <h3>{props.title}</h3>
                <p>{props.children}</p>
            </div>
    )
}