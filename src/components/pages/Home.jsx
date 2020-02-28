import React, {Component} from 'react'

// Elements
import Button from '../elements/Buttons'

// Images
import SliderImage from '../../assets/img/slider/banner_9.jpg'

// Page Partials
import Navbar from '../partials/Navbar'
import Slider from '../partials/Slider'
import Features from '../partials/Features'
import Services from '../partials/Services'
import TwoColumnContent from '../partials/TwoColumnContent'
import Testimonials from '../partials/Testimonials'
import Video from '../partials/VideoSection'
import Newsletter from '../partials/Newsletter'
import Footer from '../partials/Footer'

// Helpers
import NavBGHandler from '../helper/NavBackground'

export default class Home extends Component {

    state = {
        navBG: 'rgba(0,0,0,.3)'
    }

    changeNavBG = color => {
        this.setState({
            navBG: color
        })
    }

    render(){
        return (
            <main>
                <NavBGHandler changeNavBG={this.changeNavBG} navBG={`rgba(0,0,0,.3)`}>
                    <Navbar bgColor={this.state.navBG}/>
                </NavBGHandler>

                <Slider/>

                <NavBGHandler changeNavBG={this.changeNavBG} navBG={`red`}>
                    <Features/>
                </NavBGHandler>

                <NavBGHandler changeNavBG={this.changeNavBG} navBG={`green`}>
                    <Services/>
                </NavBGHandler>

                <NavBGHandler changeNavBG={this.changeNavBG} navBG={`white`}>
                    <TwoColumnContent
                        name={`why-us`}
                        smallTitle={`Each component should have the image`}
                        title={`Image + Text Component`}
                        description={`Each component should have the image and the accompanying components. Title, description, ‘target audience’ texts as well a button . On the right should display an image. I should be able to configure all of them as well as swap the positions of the image and the text. Meaning i can choose to have the image on the left or the right.`}
                        button={<Button/>}
                        imageURL={SliderImage}
                        imageRight={true}
                    />
                </NavBGHandler>

                <NavBGHandler changeNavBG={this.changeNavBG} navBG={`grey`}>
                    <Testimonials/>
                </NavBGHandler>

                <NavBGHandler changeNavBG={this.changeNavBG} navBG={`white`}>
                    <Video/>
                </NavBGHandler>

                <Newsletter/>
                <Footer/>
            </main>
        )
    }
}