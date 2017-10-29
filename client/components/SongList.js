import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
  
  renderSongs = () => {
    if(this.props.data.loading){
      return <div> Loading... </div>
    }
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">{song.title}</li>
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

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
// Binding of Query to Component causes query to be ran on component first render and re-rendered on reciept of data
//