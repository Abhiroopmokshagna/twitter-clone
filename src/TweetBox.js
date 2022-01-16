import { Button, Avatar } from '@mui/material'
import React, { useState } from 'react'
import './TweetBox.css'
import db from './firebase'
import { addDoc, collection } from 'firebase/firestore'
function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = e => {
        e.preventDefault();
        
        addDoc(collection(db, 'posts'), {
            displayName: 'Abhiroop mokshagna',
            username: 'Abhiroop_99',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://avatars.githubusercontent.com/u/43064032?s=40&v=4"
        })

        setTweetMessage("");
        setTweetImage("");
    }
    return (
        <div className='tweetBox'>
            <form >
                <div className="tweetBox__input">
                    <Avatar src = "https://avatars.githubusercontent.com/u/43064032?s=40&v=4" />
                    <input 
                        value = {tweetMessage}
                        onChange = { e => setTweetMessage(e.target.value) }
                        type="text" 
                        placeholder="What's happening?"
                    />
                </div>
                <input 
                    value = {tweetImage}
                    onChange = { e => setTweetImage(e.target.value) }
                    type="text" 
                    placeholder="Optional: Enter image URL" 
                    className='tweetBox__imageInput'
                />
                <Button onClick = {sendTweet} type = "submit" className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
