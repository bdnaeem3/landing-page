import React, {Component} from 'react';
import { Carousel } from 'antd';
import Banner3 from '../../assets/img/slider/banner3.jpg'
import Banner9 from '../../assets/img/slider/banner_9.png'
import Healthy from '../../assets/img/slider/healthy.jpg'
import Lianhef from '../../assets/img/slider/lianhefabu_down.png'


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
                asNavFor={this.state.nav}
                ref={slider => (this.slider = slider)}
                autoplay>
                <div>
                    <img src={Banner3} alt={'Banner3'}/>
                </div>
                <div>
                    <img src={Banner9} alt={'Banner9'}/>
                </div>
                <div>
                    <img src={Healthy} alt={'Healthy'}/>
                </div>
                <div>
                    <img src={Lianhef} alt={'Lianhef'}/>
                </div>
            </Carousel>
        )
    }
}