import React from 'react';
import Trend from './trend/trend';
import './stylesTrends.css';

import {trends} from '../../../../sourceTrends';

class Trends extends React.Component {
  constructor() {
      super();
      this.state = {
          trends: trends
      }
  }

  render() {
      return (
          <div className="trends-container">
              {
                  this.state.trends.map( trend => {
                      return (
                        <Trend
                        category={trend.category}
                        title={trend.title}
                        noTweets={trend.noTweets} />
                        // <Tweet
                        // profileUrl={tweet.profileUrl}
                        // profile={tweet.profile}
                        // username={tweet.username}
                        // content={tweet.content}
                        // iconList={this.state.iconArray}/>
                      )
                  })
              }
              
          </div>
      );
  }
}

export default Trends;