import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Helpers
import Section from '../helper/Section'
import Review from '../cards/ReviewCard'

export default () => {
    return (
        <Section
            name={`testimonial`}
            fullWidthBG={`#ddd`}
            title={`Loved by parents kids alike`}
            description={`Read hundreds of reviews`}
            padding={`50px 0`}
            titlePaddingBottom={40}
        >
            <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                items={3}
                responsive={{
                    0:{
                        items:1,
                        dots: false
                    },
                    576:{
                        items:2,
                    },
                    992:{
                        items:3,
                    },
                }}
            >
                <Review
                    title={`First Review`}
                    author={`Naeem Ahmed`}
                    stars={5}
                >
                    This component should have the Title , subtext and a slideshow of quote cards that are styled like the above image.
                </Review>
                <Review
                    title={`First Review`}
                    author={`Naeem Ahmed`}
                    stars={5}
                >
                    This component should have the Title , subtext and a slideshow of quote cards that are styled like the above image.
                </Review>
                <Review
                    title={`First Review`}
                    author={`Naeem Ahmed`}
                    stars={5}
                >
                    This component should have the Title , subtext and a slideshow of quote cards that are styled like the above image.
                </Review>
                <Review
                    title={`First Review`}
                    author={`Naeem Ahmed`}
                    stars={5}
                >
                    This component should have the Title , subtext and a slideshow of quote cards that are styled like the above image.
                </Review>
                <Review
                    title={`First Review`}
                    author={`Naeem Ahmed`}
                    stars={5}
                >
                    This component should have the Title , subtext and a slideshow of quote cards that are styled like the above image.
                </Review>
                <Review
                    title={`First Review`}
                    author={`Naeem Ahmed`}
                    stars={5}
                >
                    This component should have the Title , subtext and a slideshow of quote cards that are styled like the above image.
                </Review>
                <Review
                    title={`First Review`}
                    author={`Naeem Ahmed`}
                    stars={5}
                >
                    This component should have the Title , subtext and a slideshow of quote cards that are styled like the above image.
                </Review>
            </OwlCarousel>
        </Section>
    )
}
