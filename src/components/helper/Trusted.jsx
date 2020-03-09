import React from 'react'
import {Row} from 'antd'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default props => {
    return (
        props.carouselView
        ?

            <OwlCarousel
                className="owl-theme"
                loop
                autoplay={props.carouselAutoPlay || true}
                autoplayTimeout={props.carouselTimeout || 3000}
                autoplayHoverPause={props.carouselHoverPause || true}
                dots={false}
                margin={10}
                responsive={{
                    0:{
                        items:1,
                    },
                    576:{
                        items: props.carouselItems/2,
                    },
                    992:{
                        items: props.carouselItems || 3,
                    },
                }}
            >
                {props.children}
            </OwlCarousel>
            :
            <div className={`trusted-by-clients`}>
                <Row gutter={20} type={`flex`}>
                    {props.children}
                </Row>
            </div>
    )
}
