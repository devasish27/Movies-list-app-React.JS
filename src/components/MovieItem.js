import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <li>
      <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
    </li>
  );
};

export default MovieItem;