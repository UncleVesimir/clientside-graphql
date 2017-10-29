import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AddLyricToSong from '../queries/AddLyricToSong';

class LyricCreate extends Component {
  constructor(props){
    super(props);
    this.state = {content: ""};
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.mutate({
      variables:{
        content: this.state.content,
        songId: this.props.songId
      }
    })
    .then( () => {
      console.log("hey")
    })
    this.setState({content:""})
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Add a Lyric</label>
        <input type="text" 
          onChange={ event => this.setState({ content: event.target.value })}
          value = {this.state.content}/>
      </form>
    )
  }
}

export default graphql(AddLyricToSong)(LyricCreate)