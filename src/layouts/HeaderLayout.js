import React from 'react';
import '../resources/styles/_header.scss'
import { Row, Col } from 'antd';

export const HeaderLayout = () => {
    return(
        <div className="header-wrapper">
            <Row className="header-row" type="flex" justify="center" align="middle">
                <Col className="header-column" flex={1.5}>
                    <a href="">Home</a>
                </Col>
                <Col className="header-column" flex={1.5}>
                    <a href="">Gallery</a>
                </Col>
                <Col className="header-column-logo" flex={2}>
                    <div className="square-logo-wrapper">
                        <div className="square-logo">
                            <div className="square-logo-text">VG</div>
                        </div>
                    </div>
                </Col>
                <Col className="header-column" flex={1.5}>
                    <a href="">About</a>
                </Col>
                <Col className="header-column" flex={1.5}>
                    <a href="">Contact</a>
                </Col>
            </Row>
        </div>
    )
}