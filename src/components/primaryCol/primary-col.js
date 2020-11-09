import React from 'react';
import PostTweet from '../postTweet/post-tweet';
import Feed from '../feed';
import './stylesPrimary.css';

class PrimaryCol extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="t-col-container">
          <h3>Inicio</h3>
          <PostTweet profileUrl={this.props.profileUrl} />
          <Feed />
      </div>
    )
  }
}

export default PrimaryCol;