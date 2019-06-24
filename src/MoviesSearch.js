import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

export default class SearchMovies extends React.Component {
  render() {
    return (
        <Route path = "/search" render = {() => (
          <div>
            <Link to = "/" className = "homePage">Home</Link>
            <form onSubmit = { e => {
              e.preventDefault()
              this.props.fetchmyMovie()
            }}>
              <input type = "text" placeholder = "Movie Search"
              onChange = {this.props.displayMovie}
              value = {this.props.query}/>
              <button>Search!!!</button>
            </form>
              {
                this.props.myMovies.map((ele) => (
                  <div className = "list-of-movies">
                    <h2>{ele.Title}</h2>
                    <img src= {ele.Poster} alt=""></img>
                    <button onClick = {() => 
                      this.props.addingToWatchedMovies(ele)}>Adding to Watch Movies</button>
                    <button onClick = {() =>
                      this.props.addingWatchedMovies(ele)}>Movies are Watched</button>
                    </div>
                ))
              }
            </div>
        )} />
    )
  }
}