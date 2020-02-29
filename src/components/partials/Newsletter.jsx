import React, {Component} from 'react'
import {Row, Col} from 'antd'

// Helpers
import Section from '../helper/Section'

// Elements
import {TextInput, SubmitButton} from "../elements/Forms";

export default class Newsletter extends Component{
    constructor(props) {
        super(props);
        this.state = {isSubmitted: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isSubmitted: !state.isSubmitted
        }));
    }

    render(){
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
                        <form>
                            {
                                this.state.isSubmitted ?
                                    <Row type={`flex`} align={`middle`}>
                                        <h3>Thank you for signing up!</h3>
                                    </Row>
                                    :
                                    <Row type={`flex`} align={`middle`}>
                                        <div>
                                            <TextInput placeholder={`Email Address`}/>
                                            <p>Note: please use valid email address</p>
                                        </div>

                                        <SubmitButton onClick={this.handleClick}/>
                                    </Row>
                            }
                        </form>
                    </Col>
                </Row>
            </Section>
        )
    }
}