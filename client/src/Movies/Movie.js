import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from "../Movies/MovieCard";
import { Route } from "react-router-dom";

const Movie = (props) => {
  const [movie, setMovie] = useState();
  const id = props.match.params.id;
  console.log(props.match.params);

  useEffect(() => {
       axios
        .get(`http://localhost:6137/api/movies/${id}`)
        .then(response => {
          console.log(response)
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });
  },[id]);
 
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }
 
  return (
    <div className="save-wrapper">
      <Route
      path="/" 
      render={props => <MovieCard 
        {...movie}
        saveMovie={saveMovie} />}
      />
            <button className="save-button" onClick={saveMovie}>
        Save</button>
    </div>
  );
}

export default Movie;
