import React, {Component} from 'react';
import { Row } from 'antd';
import AnchorLink from 'react-anchor-link-smooth-scroll'

// Images
import logo from '../../logo.svg';

// Helpers
import Section from '../helper/Section';

// Icons
import NavIcon from '../icons/Nav'


class Navbar extends Component {

    state = {
        mobileMenuOpen: false
    }

    mobileMenu = () => {
        this.setState({
            mobileMenuOpen: !this.state.mobileMenuOpen
        })
    }

    render(){
        return (
            <Section sectionClass={`fixed-navbar`} name={`header`} fullWidthBG={this.props.bgColor}>
                <Row type="flex" justify="space-between" align="middle">
                    <div className={`logo`}>
                        <img src={logo} width={100} alt="logo" />
                    </div>

                    <nav>
                        <button onClick={this.mobileMenu} className={`nav_toggle_menu`}>
                            <NavIcon color={`#ddd`}/>
                        </button>
                        <ul className={this.state.mobileMenuOpen ? 'd-flex' : 'd-none'}>
                            <li><AnchorLink offset='70' href='#features'>Features</AnchorLink></li>
                            <li><AnchorLink offset='70' href='#services'>Services</AnchorLink></li>
                            <li><AnchorLink offset='70' href='#why-us'>Why Us</AnchorLink></li>
                            <li><AnchorLink offset='70' href='#testimonial'>Testimonial</AnchorLink></li>
                            <li><AnchorLink offset='70' href='#about-us'>About Us</AnchorLink></li>
                        </ul>
                    </nav>
                </Row>
            </Section>
        )
    }
}


export default Navbar;