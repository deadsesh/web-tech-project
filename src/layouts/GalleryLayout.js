import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { pageTransitions, pageVariants } from '../helpers/Transitions'
import { Row, Layout } from 'antd';
import { GalleryItem } from '../components/GalleryItem';
import { getStateByKey } from '../helpers/Functions';
import { GalleryTags } from "../components/GalleryTags";

const { Content } = Layout;

export const GalleryLayout = () => {

    const [ images, setImages ] = useState([]);

    useEffect(() => {
        setImages(getStateByKey('initialState'))
    }, [])

    return (
        <motion.div
            className=""
            exit="out"
            animate="in"
            initial="out"
            variants={ pageVariants }
            transition={ pageTransitions }
        >
            <Content>
                <div className="gallery-wrapper">
                    <GalleryTags images={ images } setImages={ setImages }/>
                    <Row justify="left" wrap>
                        { !images.length ? (
                            <div>No content</div>
                        ) : (
                            images.map(img => {
                                return (
                                    <GalleryItem
                                        key={ img.id }
                                        title={ img.title }
                                        src={ img.src }
                                        height={ 400 }
                                    />
                                )
                            })
                        )
                        }
                    </Row>
                </div>
            </Content>
        </motion.div>
    )
}