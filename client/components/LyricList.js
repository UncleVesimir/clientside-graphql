import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import LikeLyric from '../queries/LikeLyric';

class LyricList extends Component {
  OnLike = (id) => {
    this.props.mutate({variables: { id } });
  }

  renderLyrics = () => this.props.lyrics.map( ({content, id, likes}) => 
  {
    return (
      <li className="collection-item" key={id}>
        {content}
        <div className="vote-box">
        <i className="material-icons" onClick={() => this.OnLike(id)}>thumb_up</i>
        {likes}
        </div>
      </li>
      )
  }
)

  render(){
    return(
      <ul className="collection">{this.renderLyrics()}</ul>
    )
  }
}

export default graphql(LikeLyric)(LyricList)