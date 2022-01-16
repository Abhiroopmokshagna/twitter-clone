import { Button, Avatar } from '@mui/material'
import React from 'react'
import './TweetBox.css'
function TweetBox() {
    return (
        <div className='tweetBox'>
            <form >
                <div className="tweetBox__input">
                    <Avatar src = "https://avatars.githubusercontent.com/u/43064032?s=40&v=4" />
                    <input type="text" placeholder="What's happening?" />
                </div>
                <input type="text" placeholder="Optional: Enter image URL" className='tweetBox__imageInput'/>
                <Button className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
