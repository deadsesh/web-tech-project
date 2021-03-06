import React from 'react';
import { Button, Divider } from 'antd';
import '../resources/styles/_gallery.scss'
import { filterByTag} from "../helpers/Functions";

export const GalleryTags = (props) => {
    return (
        <div>
            <p style={{ fontSize: "20px" }}>Sort by</p>
            <Button ghost
                onClick={ () => {
                    const newState = filterByTag('art');
                    props.setImages(newState);
                }}
            >
                Art
            </Button>

            <Divider type="vertical"/>

            <Button ghost
                onClick={ () => {
                    const newState = filterByTag('programming');
                    props.setImages(newState);
                }}
            >
                Programming
            </Button>
        </div>
    )
}