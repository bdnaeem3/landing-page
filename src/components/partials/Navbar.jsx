import React from 'react';
import { Row } from 'antd';
import logo from '../../logo.svg';

// Helpers
import Section from '../../helper/Section';
import NavLink from '../../helper/NavLink';


export default () => {
    return (
        <Section sectionClass={`fixed-navbar`} name={`header`} fullWidthBG={`rgba(0,0,0,.3)`}>
            <Row type="flex" justify="space-between" align="middle">
                <div className={`logo`}>
                    <img src={logo} width={100} alt="logo" />
                </div>

                <nav>
                    <ul className={`d-flex`}>
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
