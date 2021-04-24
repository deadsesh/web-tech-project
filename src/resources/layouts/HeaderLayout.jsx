import React from 'react'
import '../styles/_header.scss'
import { Col, Row } from 'antd'
import { NavLink } from 'react-router-dom'

export const HeaderLayout = () => {
    return (
        <div className="header-wrapper">
            <Row
                className="header-row"
                type="flex"
                justify="center"
                align="middle"
            >
                <Col className="header-column" flex={ 1.5 }>
                    <NavLink activeClassName="active-navlink" exact to="/">Home</NavLink>
                </Col>
                <Col className="header-column" flex={ 1.5 }>
                    <NavLink activeClassName="active-navlink" to="/gallery">Gallery</NavLink>
                </Col>
                <Col className="header-column-logo" flex={ 2 }>
                    <div className="square-logo-wrapper">
                        <div className="square-logo">
                            <div className="square-logo-text">VG</div>
                        </div>
                    </div>
                </Col>
                <Col className="header-column" flex={ 1.5 }>
                    <NavLink activeClassName="active-navlink" to="/about">About</NavLink>
                </Col>
                <Col className="header-column" flex={ 1.5 }>
                    <NavLink activeClassName="active-navlink" to="/contact">Contact</NavLink>
                </Col>
            </Row>
        </div>
    )
}