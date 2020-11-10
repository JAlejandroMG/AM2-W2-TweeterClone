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
          <h2 className="trends-title">¿Qué está pasando?</h2>
          <div className="trends">
              {
                  this.state.trends.map( trend => {
                      return (
                        <Trend
                        category={trend.category}
                        title={trend.title}
                        noTweets={
                          trend.noTweets = trend.noTweets > 1000 ? trend.noTweets/1000 + "mil" : trend.noTweets} />
                      )
                  })
              }
              
          </div>
        </div>
      );
  }
}

export default Trends;