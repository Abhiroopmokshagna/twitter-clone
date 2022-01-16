import { Avatar } from '@mui/material'
import React from 'react'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import './Post.css'
function Post({
    displayName, 
    username, 
    verified, 
    text,
    image,
    avatar
}) {
    return (
        <div className='post'>
            <div className="post__avatar">
                <Avatar src = "https://avatars.githubusercontent.com/u/43064032?s=40&v=4" />
            </div>  
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Abhiroop mokshagna{" "}
                            <span className='post__headerSpecial'>
                                <VerifiedUserIcon className = "post__badge" /> @somebody
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I challenge you to build a twitter clone with me!!!</p>
                    </div>
                </div>
                <img src="https://c.tenor.com/0_WKEPikh8gAAAAM/challenge-schnoedown.gif" alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post
