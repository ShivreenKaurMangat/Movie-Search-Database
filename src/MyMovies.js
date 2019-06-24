import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import MoviesSearch from './MoviesSearch';

export default class MyMovies extends React.Component {
  state = {
    myMovies: [],
    wantToWatch: [],
    alreadyWatched: [],
    query: ''
  }

  fetchmyMovie = () => {
    const apiKey = '85715d6c';
    const myHost = 'http://www.omdbapi.com/';
    fetch(`${myHost}?s=${this.state.query}&apikey=${apiKey}`)
    .then(response => response.json())
    .then(showMovie => this.setState({
      myMovies: showMovie.Search
    }))
    this.setState({
      query: ''
    })
  }

  displayMovie = (ele) => {
    this.setState({
      query: ele.target.value
    })
  }

  addingWatchedMovies = (ele) => {
    this.setState((currentState) => ({
      alreadyWatched: [...currentState.alreadyWatched, ele]
    }))
  }

  addingToWatchedMovies = (ele) => {
    this.setState((currentState) => ({
      wantToWatch: [...currentState.wantToWatch, ele]
    }))
  }

  render() {
    return (
      <div className = "myMovies-gallery">
        <Route exact path = "/" render = {() => (
          <div> 
            <Link to = "/search" className="mySearch">Search Here for your favorite MOVIES...</Link>
            {this.state.wantToWatch.length > 0 && <p>Want to watch movie</p>}
            <div className = "watch-myMovies">
              {this.state.wantToWatch.length === 0 ? (
                <h2>Click on the link above to watch movies</h2>
              ) : (
                this.state.wantToWatch.map((ele) => (
                  <div className = "want-to-watch-myMovies">
                    <h2>{ele.Title}</h2>
                    <img src = {ele.Poster} alt = ""></img>
                    </div>
                ))
              )}
            </div>
              {this.state.alreadyWatched.length > 0 && <p>Already Watched Movies</p>}
            <div className = "already-watched-myMovies">
              {this.state.alreadyWatched.map((ele) => (
                <div className = "myMovies-already-watched" >
                  <h2>{ele.Title}</h2>
                  <img src = {ele.Poster} alt = ""></img>
                  </div>
              ))}
            </div>
            </div>
        )} />
        <MoviesSearch
        fetchmyMovie = {this.fetchmyMovie}
        query = {this.state.query}
        myMovies = {this.state.myMovies}
        displayMovie = {this.displayMovie}
        addingToWatchedMovies = {this.addingToWatchedMovies}
        addingWatchedMovies = {this.addingWatchedMovies}/>
      </div>
    )
  }
}