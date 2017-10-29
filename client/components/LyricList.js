import React, { Component } from 'react';

class LyricList extends Component {
  renderLyrics = () => this.props.lyrics.map( ({content, id}) => 
  <li className="collection-item" key={id}>{content}</li>)

  render(){
    return(
      <ul className="collection">{this.renderLyrics()}</ul>
    )
  }
}

export default LyricList