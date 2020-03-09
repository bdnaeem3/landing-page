import React, {Component} from 'react';
import { Carousel } from 'antd';

// Images
import Banner3 from '../../assets/img/slider/banner3.jpg'
import Banner9 from '../../assets/img/slider/banner_9.jpg'
import Healthy from '../../assets/img/slider/healthy.jpg'
import Lianhef from '../../assets/img/slider/lianhe.jpg'

// Helpers
import Slide from '../helper/Slide'


export default class Slider extends Component {

    state = {
        nav: null,
    };

    componentDidMount() {
        this.setState({
            nav: this.slider,
        });
    }

    render(){
        return(
            <Carousel
                autoplay={true}
                className={`home-carousel`}
                asNavFor={this.state.nav}
                autoplaySpeed={3000}
                ref={slider => (this.slider = slider)}>
                <Slide
                    mobile_image={Banner9}
                    image={Banner3}
                    title={`This is slider title`}
                />
                <Slide
                    mobile_image={Banner9}
                    image={Banner9}
                    title={`This is slider title`}
                />
                <Slide
                    mobile_image={Banner9}
                    image={Healthy}
                    title={`This is slider title`}
                    titleStyle = {{
                        background: 'red'
                    }}
                />
                <Slide
                    mobile_image={Banner9}
                    image={Lianhef}
                    title={`This is slider title`}
                />
            </Carousel>
        )
    }
}