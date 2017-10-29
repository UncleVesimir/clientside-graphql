import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SongList from './SongList';
import SongCreate from './SongCreate';

export default class App extends Component{
  render(){

    const { match } = this.props;
    console.log(match, match.url)
    
    return (
      
      <div className="container">
        <Switch>
          <Route exact path={match.url} component={SongList}/> 
          <Route path={match.url + "songs/new"} component={SongCreate}/> 
        </Switch>
      </div>
    )
  }
}
