import React, { Component } from 'react';

import SearchBar from './containers/search-bar'
import WeatherList from './containers/weather_list'

class App extends Component {
  //Overall application container
  render() {
    return (
      <div id="app" className="container">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
