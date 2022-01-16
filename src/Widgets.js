import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed'
function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <SearchIcon className='widgets__searchIcon'/>
                <input placeholder = "Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1482587327868588041"} />

                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="@Abhiroop_99"
                options={{ height: 400 }}
                />

                <TwitterShareButton
                url={"https://www.facebook.com/abhiroopmokshagna.bheemineni/"}
                options={{ text: "#reactjs is awesome", via: "Abhiroop_99" }}
                />
            </div>
        </div>
    )
}

export default Widgets
