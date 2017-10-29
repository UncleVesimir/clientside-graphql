import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SongList from './SongList';
import SongCreate from './SongCreate';
import SongDetail from './SongDetail';

export default class App extends Component{
  render(){
    const match = this.props.match    
    return (
      
      <div className="container">
        <Switch>
          <Route exact path={match.url} component={SongList}/> 
          <Route path={match.url + "songs/new"} component={SongCreate}/> 
          <Route path={match.url + "songs/:id"} component={SongDetail}/> 
        </Switch>
      </div>
    )
  }
}
