import { useEffect, useState } from "react";
import get from "../data/client";
import MovieCard from "./MovieCard";

import './ContextMovieCard.css';

function ContextMovieCard() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get('/discover/movie').then(data => {
        setMovies(data.results);
    });
  }, []);

  return (
    <ul className="container">      
      {movies.map(movie => (
        <MovieCard 
          key={movie.id}
          movie={movie}
        />
      ))}
    </ul>
  )
}

export default ContextMovieCard;