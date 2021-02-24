import React from 'react';
import 'antd/dist/antd.css';
import { Image } from 'antd';
import '../resources/styles/_gallery.scss'

export const GalleryItem = (props) => {
    return (
        <Image
            preview={ false }
            src={ props.img }
            width={ props.width }
            height={ props.width }
        >
        </Image>
    )
}