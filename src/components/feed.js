import React from "react";
import Tweet from "./tweet/tweet";
import {feed} from '../source';
import {
  HeartSolid,
  ChatSolid,
  ShareSolid
} from "@graywolfai/react-heroicons";

import './stylesFeed.css';

class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: feed,
            iconArray: [ 
              <HeartSolid className="interaction-icon" />,
              <ChatSolid className="interaction-icon" />, 
              <ShareSolid className="interaction-icon" />
            ]
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.tweets.map( tweet => {
                        return (
                          <Tweet
                          profileUrl={tweet.profileUrl}
                          profile={tweet.profile}
                          username={tweet.username}
                          content={tweet.content}
                          comments={
                            tweet.interaction.comments = tweet.interaction.comments> 1000 ? tweet.interaction.comments/1000 + "mil" : tweet.interaction.comments}
                          retweets={
                            tweet.interaction.retweets = tweet.interaction.retweets> 1000 ? tweet.interaction.retweets/1000 + "mil" : tweet.interaction.retweets}
                          likes={
                            tweet.interaction.likes = tweet.interaction.likes> 1000 ? tweet.interaction.likes/1000 + "mil" : tweet.interaction.likes}
                          iconList={this.state.iconArray}/>
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Feed;