import React from 'react';
import { Row } from 'antd';

// Helpers
import Section from '../helper/Section';
import NavLink from '../helper/NavLink';
import logo from '../../logo.svg';

// Icons
import Facebook from '../icons/Facebook'
import Instagram from '../icons/Instagram'
import Twitter from '../icons/Twitter'
import LinkedIn from '../icons/LinkedIn'
import YouTube from '../icons/YouTube'


export default () => {
    return(
        <Section name={`footer`} fullWidthBG={`#333`}>
            <Row type="flex" justify="space-between" align="middle">
                <Row type={`flex`} align="middle">
                    <img src={logo} width={40} alt="logo" />
                    <p>
                        Copyright &copy; 2004-2020 Landing Page Corporation.
                    </p>
                </Row>

                <div>
                    <ul>
                        <NavLink href={`/`} className={`facebook`}>
                            <Facebook/>
                        </NavLink>
                        <NavLink href={`/`} className={`instagram`}>
                            <Instagram/>
                        </NavLink>
                        <NavLink href={`/`} className={`twitter`}>
                            <Twitter/>
                        </NavLink>
                        <NavLink href={`/`} className={`linkedin`}>
                            <LinkedIn/>
                        </NavLink>
                        <NavLink href={`/`} className={`youtube`}>
                            <YouTube/>
                        </NavLink>
                    </ul>
                </div>
            </Row>
        </Section>
    )
}