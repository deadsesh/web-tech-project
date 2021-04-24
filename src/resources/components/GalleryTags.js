import React, { useEffect } from 'react';
import { Button, Divider } from 'antd';
import '../styles/_gallery.scss'
import { useRootStore } from "../mobx/RootStoreProvider";
import { observer } from "mobx-react-lite";

export const GalleryTags = observer(() => {

    const { setContent } = useRootStore()

    useEffect(() => {
        setContent()
    }, [setContent])
    return (
        <div>
            <p style={ { fontSize: "20px" } }>Sort by</p>
            <Button ghost
                    onClick={ () => {
                        setContent('all')
                    } }
            >
                All
            </Button>

            <Divider type="vertical"/>

            <Button ghost
                    onClick={ () => {
                        setContent('art')
                    } }
            >
                Art
            </Button>

            <Divider type="vertical"/>

            <Button ghost
                    onClick={ () => {
                        setContent('programming')
                    } }
            >
                Programming
            </Button>
        </div>
    )
})