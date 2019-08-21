import React from 'react';
import { Link } from "react-router-dom";

const MovieCard = props => {

  return ( 
  <div>
  <Link to={`/movies/${props.id}`}>
      <div className="movie-card">
     
        <div className="movie-card-text">
          <h2>
              {props.title}
          </h2>
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
        
          <img className='cover-photo' src={props.cover} />
        
      </div> 
      </Link>
      </div>
  )
};

export default MovieCard;
