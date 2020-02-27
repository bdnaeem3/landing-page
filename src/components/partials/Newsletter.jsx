import React from 'react'
import {Row, Col} from 'antd'

// Helpers
import Section from '../helper/Section'

// Elements
import {TextInput, SubmitButton} from "../elements/Forms";

export default () => {
    return(
        <Section
            fullWidthBG={`orange`}
            padding={`20px 0`}
            name={`newsletter`}
            rightHalfColor={`darkorange`}
        >
            <Row gutter={30} type={`flex`} align={`middle`}>
                <Col lg={12}>
                    <h3>Become a VIP member</h3>
                    <p>This component shoudl look exactly as above. Except the colors should be easily configurable.</p>
                </Col>

                <Col lg={12}>
                    <form action={`/`} method={`post`}>
                        <Row type={`flex`} align={`middle`}>
                            <div>
                                <TextInput placeholder={`Email Address`}/>
                                <p>Note: please use valid email address</p>
                            </div>

                            <SubmitButton/>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Section>
    )
}