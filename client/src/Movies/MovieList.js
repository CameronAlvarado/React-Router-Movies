import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import axios from 'axios';
import MovieCard from "../Movies/MovieCard";

const MovieList = props => {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:6137/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (

    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>

  );
}

function MovieDetails({ movie }) {
  return (
    <Route
      path="/" 
      render={() => <MovieCard {...movie} />}
     />
  );
}

export default MovieList;
