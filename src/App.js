import React from 'react';
import './App.css';
import MyMovies from './MyMovies';

export default class App extends React.Component {
  render() {
    return (
      <div className = "App">
        <MyMovies/>
      </div>
    )
  }
}

