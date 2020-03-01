import React from 'react';
import { Row, Col } from 'antd';

// Helpers
import Section from '../helper/Section';
import FlippingCard, {CardFront, CardBack} from '../cards/FlippingCard'

// Images
import Cover from '../../assets/img/slider/banner3.jpg'
import logo from '../../logo.svg';

export default () => {
    return(
        <Section
            fullWidthBG={`green`}
            padding={`50px 0`}
            name={`services`}
            title={`A title for this entire section`}
            description={`In this component , each of the cards would have a icon image, cover image, and a title. All easily configurable through props.`}
        >
            <Row gutter={40} type={`flex`}>
                <Col xs={24} lg={12}>
                    <FlippingCard>
                        <CardFront
                            cover={Cover}
                            image={logo}
                            iconBG={`black`}
                            title={`After School`}
                        />

                        <CardBack>
                            In this component , each of the cards would have a icon image, cover image, and a title. All easily configurable through props. The overall backgroud image of this component should also be easily configurable.
                        </CardBack>
                    </FlippingCard>
                </Col>

                <Col xs={24} lg={12}>
                    <FlippingCard>
                        <CardFront
                            cover={Cover}
                            icon={<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
                                       className="svg-inline--fa fa-facebook-f fa-w-10" role="img"
                                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                            </svg>}
                            iconBG={`green`}
                            title={`After School`}
                        />

                        <CardBack>
                            In this component , each of the cards would have a icon image, cover image, and a title. All easily configurable through props. The overall backgroud image of this component should also be easily configurable.
                        </CardBack>
                    </FlippingCard>
                </Col>

                <Col xs={24} lg={12}>
                    <FlippingCard>
                        <CardFront
                            cover={Cover}
                            icon={<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
                                       className="svg-inline--fa fa-facebook-f fa-w-10" role="img"
                                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                            </svg>}
                            iconBG={`red`}
                            title={`After School`}
                        />

                        <CardBack>
                            In this component , each of the cards would have a icon image, cover image, and a title. All easily configurable through props. The overall backgroud image of this component should also be easily configurable.
                        </CardBack>
                    </FlippingCard>
                </Col>

                <Col xs={24} lg={12}>
                    <FlippingCard>
                        <CardFront
                            cover={Cover}
                            icon={<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
                                       className="svg-inline--fa fa-facebook-f fa-w-10" role="img"
                                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                            </svg>}
                            iconBG={`pink`}
                            title={`After School`}
                        />

                        <CardBack>
                            In this component , each of the cards would have a icon image, cover image, and a title. All easily configurable through props. The overall backgroud image of this component should also be easily configurable.
                        </CardBack>
                    </FlippingCard>
                </Col>
            </Row>
        </Section>
    )
}