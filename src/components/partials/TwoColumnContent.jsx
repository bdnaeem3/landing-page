import React from 'react'
import { Row, Col } from 'antd'

// Helpers
import Section from '../helper/Section'

export default props => {
    return(
        <Section padding={`50px 0`}>
            <Row gutter={30} type={`flex`} align={`middle`} style={props.imageRight ? {flexDirection: 'row-reverse'} : ''}>
                <Col lg={12}>
                    {
                        props.imageURL &&
                        <img src={props.imageURL} alt={props.title} className={`simple-content-image`}/>
                    }
                </Col>

                <Col lg={12}>
                    <div className={`simple-content`}>
                        {
                            props.smallTitle &&
                            <p>{props.smallTitle}</p>
                        }

                        {
                            props.title &&
                            <h2>{props.title}</h2>
                        }

                        {
                            props.description &&
                            <p>{props.description}</p>
                        }
                        {
                            props.button && props.button
                        }
                    </div>
                </Col>
            </Row>
        </Section>
    )
}