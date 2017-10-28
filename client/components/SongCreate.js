import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'

class SongCreate extends Component {
  constructor(props){
    super(props);
    this.state = {title: ""};
  }

  onSubmit = (event) => {
    console.log(this.props)
    event.preventDefault();
    console.log(event);
    this.props.mutate({
      variables: {
        title: this.state.title
      }
    })
    this.props.history.push('/');
  }

  render(){
    return (
      <div>
          <h3> Create a new song</h3>
        <form onSubmit={this.onSubmit}>
          <label> Song Title:</label>
          <input 
          onChange={event => this.setState({title : event.target.value})}
          value={this.state.title}
          />
        </form>
      </div>
    )
  }
}

const mutation = gql`
mutation AddSong($title: String){
  addSong(title:$title){
    title
  }
}
`;


export default graphql(mutation)(SongCreate);