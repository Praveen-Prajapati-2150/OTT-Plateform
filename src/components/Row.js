import axios from '../redux/Axios';
import React, { useState, useEffect } from 'react';
import '../styles/Row.css';
import { Link } from 'react-router-dom';

function Row({ title, fetchUrl, isLargeRow = true }) {
  const [movies, setMovies] = useState([]);

  // const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('http://api.tvmaze.com/shows');
      console.log(request);
      setMovies(
        request.data?.slice(0, 100).map((movie, index) => {
          let array = movie?.genres;
          if (array.includes(fetchUrl)) {
            return movie;
          } else {
            return null;
          }
        })
      );
    }

    fetchData();
  }, [fetchUrl]);

  console.log({ title }, movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies?.map((movie, index) => {
          // ((isLargeRow && movie.poster_path) ||
          //   (!isLargeRow && movie.backdrop_path)) && (

          if (movie !== null) {
            return (
              <Link
                // className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                className="link"
                to={`/movie/${movie.id}`}
              >
                <img
                  className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                  key={index}
                  // onClick=(() => {
                  // })
                  // key={index}
                  // src={`${base_url}${
                  //   isLargeRow ? movie.poster_path : movie.backdrop_path
                  // }`}
                  // src={`${movie?.image?.original} || ${movie?.image?.medium}`}
                  src={`${movie?.image?.original} `}
                  alt={movie?.name}
                />
              </Link>
            );
          } else {
            return;
          }
        })}
      </div>
    </div>
  );
}

export default Row;
