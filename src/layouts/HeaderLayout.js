import React from 'react';
import '../resources/styles/_header.scss';
import { Row, Col } from 'antd';
import { NavLink } from 'react-router-dom';

export const HeaderLayout = () => {
    return(
        <div className="header-wrapper">
            <Row className="header-row" type="flex" justify="center" align="middle">
                <Col className="header-column" flex={1.5}>
                    <NavLink to="/" activeClassName="active-navlink">Home</NavLink>
                </Col>
                <Col className="header-column" flex={1.5}>
                    <NavLink to="/gallery" activeClassName="active-navlink">Gallery</NavLink>
                </Col>
                <Col className="header-column-logo" flex={2}>
                    <div className="square-logo-wrapper">
                        <div className="square-logo">
                            <div className="square-logo-text">VG</div>
                        </div>
                    </div>
                </Col>
                <Col className="header-column" flex={1.5}>
                    <NavLink to="/about" activeClassName="active-navlink">About</NavLink>
                </Col>
                <Col className="header-column" flex={1.5}>
                    <NavLink to="/contact" activeClassName="active-navlink">Contact</NavLink>
                </Col>
            </Row>
        </div>
    )
}