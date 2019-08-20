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
          console.log(response.data);
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
      {/* {console.log(movies)}; */}
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>

  );
}

function MovieDetails({ movie, props }) {
  // const { title, director, metascore, stars } = movie;
  return (
    
    <Route
      path="/" 
      render={() => <MovieCard {...movie} />}
     />

    // <div className="movie-card">
    //   <Link to={`/movies/${movie.id}`}>
    //     <h2>{title}</h2>
    //   </Link>
    //   <div className="movie-director">
    //     Director: <em>{director}</em>
    //   </div>
    //   <div className="movie-metascore">
    //     Metascore: <strong>{metascore}</strong>
    //   </div>
    //   <h3>Actors</h3>

    //   {stars.map(star => (
    //     <div key={star} className="movie-star">
    //       {star}
    //     </div>
    //   ))}
    // </div>
    
  );
}

export default MovieList;
