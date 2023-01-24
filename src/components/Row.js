import axios from '../redux/Axios';
import React, { useState, useEffect } from 'react';
import '../styles/Row.css';
import { Link } from 'react-router-dom';

function Row({ title, fetchUrl, isLargeRow = true }) {
  const [movies, setMovies] = useState([]);

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
          if (movie !== null) {
            return (
              <Link className="link" to={`/movie/${movie.id}`}>
                <img
                  className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                  key={index}
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
