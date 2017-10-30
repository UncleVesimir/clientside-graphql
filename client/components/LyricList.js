import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import LikeLyric from '../queries/LikeLyric';

class LyricList extends Component {
  OnLike = (id, likes) => {
    this.props.mutate({variables: { id },
    optimisticResponse: { // Here we tell UI to update before the response is recieved.
      __typename: 'Mutation', // need to tell it that is is a mutation - default for changes.
      likeLyric: { // then identify the mutation we are requesting an optimistic response on. The below object
        // describes to apollo the response we expect back from the server. 
        id, // pass in the id we expect as id
        __typename: 'LyricType', // the type should be the same as a normal response
        likes: likes + 1  // here we tell the optimistic response what we expect to happen to the likes field, i.e. increment the current value of likes.
      }
    }
    });
  }

  renderLyrics = () => this.props.lyrics.map( ({content, id, likes}) => 
  {
    return (
      <li className="collection-item" key={id}>
        {content}
        <div className="vote-box">
        <i className="material-icons" onClick={() => this.OnLike(id, likes)}>thumb_up</i>
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