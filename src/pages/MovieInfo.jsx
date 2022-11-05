import get from '../data/client';
import {useParams} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import getMovieImg from '../utils/getMovieImg';

import './MovieInfo.css';

function MovieInfo() {
    const {movieId} = useParams();
    const [movie, setMovie] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(()=>{
        get(`/movie/${movieId}`)
            .then(data => {
                setMovie(data);
                setGenres(data.genres[0]);
            });
    }, [movieId]);

    const imageUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div className='container-details'>
        <img 
            src={imageUrl} 
            alt={movie.title} 
            className='movie-img col'
        />

        <div className='movie-details col'>
            <p className='title'>
                <strong>Titulo: </strong>
                {movie.title}
            </p>

            <p>
                <strong>Genero: </strong>
                {genres.name}
            </p>

            <p>
                <strong>Descripcion: </strong>
                {movie.overview}
            </p>
        </div>
    </div>
  )
}

export default MovieInfo