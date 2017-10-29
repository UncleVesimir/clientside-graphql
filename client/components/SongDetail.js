import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong'

import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {

  render() {
    console.log(this.props)
    const {loading, song} = this.props.data

    if(loading){
      return <h3></h3>
    }
    return ( 
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricCreate songId={this.props.match.params.id}/>
        <LyricList lyrics={song.lyrics}/>
      </div>
    )
  }
}

export default graphql(fetchSong, {
  options: (props) => { 
    return { variables: {id: props.match.params.id} } }
})(SongDetail);