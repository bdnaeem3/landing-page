import React, {Component} from 'react'

// Images
import Banner3 from '../../assets/img/slider/banner3.jpg'
import Banner9 from '../../assets/img/slider/banner_9.jpg'
import Healthy from '../../assets/img/slider/healthy.jpg'
import Lianhef from '../../assets/img/slider/lianhe.jpg'

// Helpers
import Section from '../helper/Section'
import Trusted from '../helper/Trusted'
import ClientInfo from '../helper/ClientInfo'

class TrustedBy extends Component {

    state = {
        carouselView: false
    }

    render(){
        return (
            <Section
                name={`trusted-by`}
                title={`Trusted By`}
                description={`Authorized training partner of`}
                padding={`50px 0`}
                titlePaddingBottom={40}
            >
                <Trusted
                    carouselView={this.state.carouselView}
                    carouselAutoPlay={true}
                    carouselTimeout={2000}
                    carouselHoverPause={true}
                    carouselItems={3}
                >
                    <ClientInfo
                        column={!this.state.carouselView}
                        image={Banner3}
                        imageWidth={250}
                        imageHeight={250}
                        title={'This is title'}
                    >
                        This component should have the Title , subtext and a slideshow of quote cards that are styled like the above image. This component should have the Title , subtext and a slideshow of quote cards that are styled like the above image.
                    </ClientInfo>
                    <ClientInfo
                        column={!this.state.carouselView}
                        image={Banner9}
                        imageWidth={250}
                        imageHeight={250}
                        title={'This is title'}
                    >
                        This component should have the Title , subtext and a slideshow of quote cards that are styled like the above image. This component should have the Title , subtext and a slideshow of quote cards that are styled like the above image.
                    </ClientInfo>
                    <ClientInfo
                        column={!this.state.carouselView}
                        image={Healthy}
                        imageWidth={250}
                        imageHeight={250}
                        title={'This is title'}
                    >
                        This component should have the Title , subtext and a slideshow of quote cards that are styled like the above image. This component should have the Title , subtext and a slideshow of quote cards that are styled like the above image.
                    </ClientInfo>
                    <ClientInfo
                        column={!this.state.carouselView}
                        image={Lianhef}
                        imageWidth={250}
                        imageHeight={250}
                        title={'This is title'}
                    >
                        This component should have the Title , subtext and a slideshow of quote cards that are styled like the above image. This component should have the Title , subtext and a slideshow of quote cards that are styled like the above image.
                    </ClientInfo>
                </Trusted>
            </Section>
        )
    }
}

export default TrustedBy;
