import React, {Component} from 'react';
import { Row } from 'antd';
import logo from '../../logo.svg';
import NavToggleIcon from '../../assets/img/icons/bars.svg'

// Helpers
import Section from '../../helper/Section';
import NavLink from '../../helper/NavLink';


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
            <Section sectionClass={`fixed-navbar`} name={`header`} fullWidthBG={`rgba(0,0,0,.3)`}>
                <Row type="flex" justify="space-between" align="middle">
                    <div className={`logo`}>
                        <img src={logo} width={100} alt="logo" />
                    </div>

                    <nav>
                        <button onClick={this.mobileMenu} className={`nav_toggle_menu`}>
                            <img src={NavToggleIcon} alt={`Nav Toggle Icon`}/>
                        </button>
                        <ul className={this.state.mobileMenuOpen ? 'd-flex' : 'd-none'}>
                            <NavLink link={`/`} name={`Menu 1`}/>
                            <NavLink link={`/`} name={`Menu 2`}/>
                            <NavLink link={`/`} name={`Menu 3`}/>
                            <NavLink link={`/`} name={`Menu 4`}/>
                            <NavLink link={`/`} name={`Menu 5`}/>
                            <NavLink link={`/`} name={`Menu 6`}/>
                        </ul>
                    </nav>
                </Row>
            </Section>
        )
    }
}


export default Navbar;