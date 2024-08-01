import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';
import './MovieList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/search/movie?api_key=fb5be735705694186dd43ba8fe19143f&query=The%20Marvels'
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;