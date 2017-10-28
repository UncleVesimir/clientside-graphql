import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SongList from './SongList';

export default class App extends Component{
  render(){

    const { match } = this.props;

    return (
      <div className="container">
        <Switch>
          <Route exact path={match.url} component={SongList}/> 
        </Switch>
      </div>
    )
  }
}
