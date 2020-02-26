import React, {Component} from 'react';
import { Row } from 'antd';
import logo from '../../logo.svg';

// Helpers
import Section from '../helper/Section';
import NavLink from '../helper/NavLink';


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
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                                 className="svg-inline--fa fa-bars fa-w-14" role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="#ddd"
                                      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                            </svg>
                        </button>
                        <ul className={this.state.mobileMenuOpen ? 'd-flex' : 'd-none'}>
                            <NavLink href={`/`}>Menu 1</NavLink>
                            <NavLink href={`/`}>Menu 2</NavLink>
                            <NavLink href={`/`}>Menu 3</NavLink>
                            <NavLink href={`/`}>Menu 4</NavLink>
                            <NavLink href={`/`}>Menu 5</NavLink>
                            <NavLink href={`/`}>Menu 6</NavLink>
                        </ul>
                    </nav>
                </Row>
            </Section>
        )
    }
}


export default Navbar;