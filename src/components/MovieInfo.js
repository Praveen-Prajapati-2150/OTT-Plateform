import React from 'react';
import '../styles/MovieInfo.scss';
import { useState, useEffect } from 'react';
import axios from '../redux/Axios';
import { useParams } from 'react-router-dom';

const MovieInfo = () => {
  const [movie, setMovie] = useState();
  const [castList, setCastList] = useState([]);

  const params = useParams().id;

  console.log({ params });

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`https://api.tvmaze.com/shows/${params}`);
      setMovie(request?.data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const fetchCast = async () => {
      await axios
        .get(`https://api.tvmaze.com/shows/${params}?embed=cast`)
        .then((res) => {
          console.log(res);
          setCastList(res?.data?._embedded?.cast);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchCast();
  }, []);

  console.log({ movie });
  console.log({ castList });

  function removeTags(str) {
    if (str === null || str === '') {
      return false;
    } else {
      str = str.toString();
    }

    return str.replace(/(<([^>]+)>)/gi, '');
  }

  return (
    <div className="movie_info">
      <header></header>

      <div className="main">
        
        <div className="image">
          {movie?.image?.original ? (
            <img src={movie?.image?.original} alt="movie.name" />
          ) : (
            'Loading'
          )}
        </div>

        <div className="movie_info">
          <h1>
            <span>Title:</span>
            <span></span> {movie?.name}
          </h1>
          <p className="para">
            <span>Summary: </span>
            {movie?.summary ? removeTags(movie?.summary) : null}
          </p>
          <p className="para">
            <span>language:</span> {movie?.language}
          </p>
          <div className="genres">
            <span>Genres:</span>
            {movie?.genres?.map((item, index) => {
              return <p>{item},</p>;
            })}
          </div>
          <p className="para">
            <span>Runtime:</span> {movie?.runtime}
          </p>
          <p className="para">
            <span>Rating:</span> {movie?.rating?.average}
          </p>
          <div className="genres">
            <span>Cast:</span>
            {castList.map((item, index) => {
              return <p>{item?.person?.name + ''} ,</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
