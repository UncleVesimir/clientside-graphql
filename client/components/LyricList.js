import React, { Component } from 'react';

class LyricList extends Component {
  renderLyrics = () => this.props.lyrics.map( ({content, id}) => 
  {
    return (
      <li className="collection-item" key={id}>
      {content}
      <i className="material-icons" onClick={() => this.OnLike(id)}>thumb_up</i>
      </li>)
  }
)

  render(){
    return(
      <ul className="collection">{this.renderLyrics()}</ul>
    )
  }
}

export default LyricList