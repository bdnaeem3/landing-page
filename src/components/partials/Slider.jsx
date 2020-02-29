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
                className={`home-carousel`}
                asNavFor={this.state.nav}
                ref={slider => (this.slider = slider)}>
                <Slide
                    image={Banner3}
                    title={`This is slider title`}
                />
                <Slide
                    image={Banner9}
                    title={`This is slider title`}
                />
                <Slide
                    image={Healthy}
                    title={`This is slider title`}
                    titleStyle = {{
                        background: 'red'
                    }}
                />
                <Slide
                    image={Lianhef}
                    title={`This is slider title`}
                />
            </Carousel>
        )
    }
}