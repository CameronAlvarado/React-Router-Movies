import React from 'react';
import { Link } from "react-router-dom";

const MovieCard = props => {
  
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <Link to={`/movies/${props.id}`}>
          <h2>{props.title}</h2>
        </Link>
        <div className="movie-director">
          Director: <em>{props.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{props.metascore}</strong>
        </div>
        <h3>Actors</h3>

              {!props.stars ? (
      <h2>Loading stars..</h2>
      ) : (
        props.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))
      )}
      </div>
      <div 
      className="save-button">Save</div>
    </div>
  )
};

export default MovieCard;
