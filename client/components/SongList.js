import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import fetchSong from '../queries/fetchSongs'
import deleteSong from '../queries/DeleteSong'

class SongList extends Component {

  onSongDelete = (id) => {
    this.props.mutate({variables:{id}})
      .then( () => this.props.data.refetch())
      .catch(console.error);
  }
  
  renderSongs = () => {
    if(this.props.data.loading){
      return <div> Loading... </div>
    }
    return this.props.data.songs.map(({ id, title }) => {
      return (
        <li key={id} className="collection-item">
          {title}
          <i className="material-icons" onClick={() => this.onSongDelete(id)}>
          delete</i>
        </li>
      )
    })
  }

  render(){
    return (
      <div>
        <ul className="collection">
        {this.renderSongs()}
        </ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    )
  }

}

const fetchQuery = graphql(fetchSong)(SongList)

export default graphql(deleteSong)(fetchQuery)
// Binding of Query to Component causes query to be ran on component first render and re-rendered on reciept of data
//