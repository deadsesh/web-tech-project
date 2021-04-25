import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import { Avatar, Comment } from 'antd'
import '../styles/_home.scss'
import { getQuote } from '../helpers/Functions'


export const KanyeQuote = () => {

    const [ quote, setQuote ] = useState([])

    const getData = async() => {
        const response = await getQuote()
        setQuote(response.quote)
    }

    useEffect(() => {
        getData()
    }, [])

    const actions = [
        <span key="comment-basic-reply-to" onClick={ getData }>Another one</span>
    ]

    return (
        <div style={ { width: '100vw' } }>
            <div style={ { width: '40%', margin: '0 auto' } }>
                <div id="comment-square">
                    <Comment
                        actions={ actions }
                        author={ <p>Kanye West</p> }
                        avatar={
                            <Avatar
                                src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                                alt="ye"
                            />
                        }
                        content={
                            <p>{ quote }</p>
                        }
                    />
                </div>
            </div>
        </div>
    )
}