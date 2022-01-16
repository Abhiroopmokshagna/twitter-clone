import React, { useState, useEffect } from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import db from './firebase'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const results = query(collection(db, `posts`))
        onSnapshot(results, (querySnapshot) => {
            setPosts(querySnapshot.docs.map(doc => doc.data()))
        })
    }, []);

    return (
        <div className='feed'>
            {/* Feed header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            {/* TweetBox */}
            <TweetBox />
            {/* Posts */}

            {posts.map(post => {
                return <Post
                    displayName = {post.displayName}
                    username = {post.username}
                    verified = {post.verified}
                    text = {post.text}
                    avatar = {post.avatar}
                    image = {post.image}
                />
            })}
            {/* <Post 
                displayName = "Abhiroop mokshagna"
                username = "Abhiroop_99"
                verified = {true}
                text = "I challenge you to build a twitter clone with me!!!"
                avatar = "https://avatars.githubusercontent.com/u/43064032?s=40&v=4"
                image = "https://c.tenor.com/0_WKEPikh8gAAAAM/challenge-schnoedown.gif"
            />
            <Post 
                displayName = "Abhiroop mokshagna"
                username = "Abhiroop_99"
                verified = {true}
                text = "I challenge you to build a twitter clone with me!!!"
                avatar = "https://avatars.githubusercontent.com/u/43064032?s=40&v=4"
                image = "https://c.tenor.com/0_WKEPikh8gAAAAM/challenge-schnoedown.gif"
            />
            <Post 
                displayName = "Abhiroop mokshagna"
                username = "Abhiroop_99"
                verified = {true}
                text = "I challenge you to build a twitter clone with me!!!"
                avatar = "https://avatars.githubusercontent.com/u/43064032?s=40&v=4"
                image = "https://c.tenor.com/0_WKEPikh8gAAAAM/challenge-schnoedown.gif"
            />
            <Post 
                displayName = "Abhiroop mokshagna"
                username = "Abhiroop_99"
                verified = {true}
                text = "I challenge you to build a twitter clone with me!!!"
                avatar = "https://avatars.githubusercontent.com/u/43064032?s=40&v=4"
                image = "https://c.tenor.com/0_WKEPikh8gAAAAM/challenge-schnoedown.gif"
            /> */}
        </div>
    )
}

export default Feed
