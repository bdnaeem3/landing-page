import React from 'react'

// Images
import Banner3 from '../../assets/img/slider/banner3.jpg'
import Banner9 from '../../assets/img/slider/banner_9.jpg'
import Healthy from '../../assets/img/slider/healthy.jpg'
import Lianhef from '../../assets/img/slider/lianhe.jpg'

// Helpers
import Section from '../helper/Section'
import Trusted from '../helper/Trusted'
import ClientInfo from '../helper/ClientInfo'

export default () => {
    return (
        <Section
            name={`trusted-by`}
            title={`Trusted By`}
            description={`Authorized training partner of`}
            padding={`50px 0`}
            titlePaddingBottom={40}
        >
            <Trusted
                carouselView={true}
                carouselAutoPlay={true}
                carouselTimeout={2000}
                carouselHoverPause={true}
                carouselItems={3}
            >
                <ClientInfo
                    column={false}
                    image={Banner3}
                    title={'This is title'}
                >
                    This component should have the Title , subtext and a slideshow of quote cards that are styled like the above image. This component should have the Title , subtext and a slideshow of quote cards that are styled like the above image.
                </ClientInfo>
                <ClientInfo
                    column={false}
                    image={Banner9}
                    title={'This is title'}
                >
                    This component should have the Title , subtext and a slideshow of quote cards that are styled like the above image. This component should have the Title , subtext and a slideshow of quote cards that are styled like the above image.
                </ClientInfo>
                <ClientInfo
                    column={false}
                    image={Healthy}
                    title={'This is title'}
                >
                    This component should have the Title , subtext and a slideshow of quote cards that are styled like the above image. This component should have the Title , subtext and a slideshow of quote cards that are styled like the above image.
                </ClientInfo>
                <ClientInfo
                    column={false}
                    image={Lianhef}
                    title={'This is title'}
                >
                    This component should have the Title , subtext and a slideshow of quote cards that are styled like the above image. This component should have the Title , subtext and a slideshow of quote cards that are styled like the above image.
                </ClientInfo>
            </Trusted>
        </Section>
    )
}
