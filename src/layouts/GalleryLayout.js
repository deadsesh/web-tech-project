import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { pageTransitions, pageVariants } from '../helpers/Transitions'
import { Image, Layout } from 'antd';
import { GalleryItem } from '../components/GalleryItem';
import { getStateByKey } from '../helpers/Functions';

const { Content } = Layout;

export const GalleryLayout = () => {

    const [ content, setContent ] = useState([]);

    useEffect(() => {
        setContent(getStateByKey('initialState'))
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
                    <div className="gallery">
                        <Image.PreviewGroup>
                            { !content.length ? (
                                <div>No content</div>
                            ) : (
                                content.map(({ title, img }) => {
                                    return (
                                        <GalleryItem title={ title } img={ img } width={ 300 }/>
                                    )
                                })
                            ) }
                        </Image.PreviewGroup>
                    </div>
                </div>
            </Content>
        </motion.div>
    )
}