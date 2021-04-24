import React from 'react'
import 'antd/dist/antd.css'
import { Col, Image } from 'antd'
import '../styles/_gallery.scss'

export const GalleryItem = (props) => {
    return (
        <Col xl={ 8 } xs={ 16 }>
            <Image
                className="gallery-item"
                preview={ true }
                src={ props.src }
                height={ props.height }
                width={ props.height }
            />
        </Col>
    )
}