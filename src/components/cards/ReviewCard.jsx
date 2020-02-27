import React from 'react';
import { Row } from 'antd';

// Icons
import Star from '../icons/Star'
import Quote from '../icons/Quote'

export default props => {
    return(
        <div className="item">
            <h3>{props.title}</h3>
            <div style={{display: 'flex'}}>
                <div>
                    <Quote size={30}/>
                </div>

                <div>
                    <p>{props.children}</p>
                    <Row type={`flex`} justify={`space-between`} align={`middle`}>
                        <strong>{props.author}</strong>

                        <p className={`review-star`}>
                            <Star size={12}/> {props.stars || 5}
                        </p>
                    </Row>
                </div>
            </div>
        </div>
    )
}