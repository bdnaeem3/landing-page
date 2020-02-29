import React from 'react';
import { Row, Col } from 'antd';

// Helpers
import Section from '../helper/Section';
import FeaturesCard from '../cards/FeaturesCard';

// Images
import logo from '../../logo.svg';


export default () => {
    return(
        <Section
            padding={`30px 0`}
            name={`features`}
        >
            <Row gutter={20} type={`flex`} justify={`center`}>
                <Col sm={12} md={8} lg={4}>
                    <FeaturesCard
                        imageURL={logo}
                        title={`Trusted`}
                        titleColor={`green`}
                    >
                        This component would display cards
                    </FeaturesCard>
                </Col>

                <Col sm={12} md={8} lg={4}>
                    <FeaturesCard
                        imageURL={logo}
                        title={`Trusted`}
                        titleColor={`red`}
                    >
                        This component
                    </FeaturesCard>
                </Col>

                <Col sm={12} md={8} lg={4}>
                    <FeaturesCard
                        imageURL={logo}
                        title={`Trusted`}
                        titleColor={`blue`}
                    >
                        This component would display cards like these, an image, title and text.
                    </FeaturesCard>
                </Col>

                <Col sm={12} md={8} lg={4}>
                    <FeaturesCard
                        imageURL={logo}
                        title={`Trusted`}
                        titleColor={`rgb(0,0,0)`}
                    >
                        This component would display cards like these, an image, title and text.
                    </FeaturesCard>
                </Col>

                <Col sm={12} md={8} lg={4}>
                    <FeaturesCard
                        imageURL={logo}
                        title={`Trusted`}
                        titleColor={`olive`}
                    >
                        This component would display cards like these, an image, title and text.
                    </FeaturesCard>
                </Col>

                <Col sm={12} md={8} lg={4}>
                    <FeaturesCard
                        imageURL={logo}
                        title={`Trusted`}
                        titleColor={`yellow`}
                    >
                        This component would display cards like these, an image, title and text.
                    </FeaturesCard>
                </Col>
            </Row>
        </Section>
    )
}