import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { pageTransitions, pageVariants } from '../helpers/Transitions'
import { Layout, Row } from 'antd'
import { GalleryItem } from '../components/GalleryItem'
import { GalleryTags } from '../components/GalleryTags'
import { observer } from 'mobx-react-lite'
import { useRootStore } from '../mobx/RootStoreProvider'

const { Content } = Layout

export const GalleryLayout = observer(() => {

    const { setInitialContent, gallery$ } = useRootStore()

    useEffect(() => {
        setInitialContent()
    }, [ setInitialContent ])

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
                    <GalleryTags/>
                    <Row justify="left" wrap>
                        { !gallery$.length ? (
                            <div>Oops! Something went wrong!</div>
                        ) : (
                              gallery$.map(img => {
                                  return (
                                      <GalleryItem
                                          key={ img.id }
                                          title={ img.title }
                                          src={ img.src.default }
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
})