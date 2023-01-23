import axios from '../redux/Axios';
import React, { useState, useEffect, createElement } from 'react';
import '../styles/Banner.css';
// import requests from '../redux/Requests';

const Banner = () => {
  const [banner, setBanner] = useState(null);
  const [moviesList, setMoviesList] = useState([]);

  const fetchBanner = async () => {
    axios
      .get(`https://api.tvmaze.com/shows`)
      .then((res) => {
        // console.log(res.data);
        setMoviesList(res.data);
        // setBanner(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchBanner();
    // console.log({ banner });
  }, []);

  useEffect(() => {
    setBanner(moviesList[Math.floor(Math.random() * moviesList.length)]);
  }, [moviesList]);

  // console.log(banner);
  // console.log(banner?.image?.original);

  function truncate(string, n) {
    let str = removeTags(string);

    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  function removeTags(str) {
    if (str === null || str === '') {
      return false;
    } else {
      str = str.toString();
    }

    return str.replace(/(<([^>]+)>)/gi, '');
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        // backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        // backgroundImage: `${banner?.image?.original}`,
        backgroundImage: `url(${banner?.image?.original})`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {/* {movies?.title || movies?.name || movies?.original_name} */}
          {banner?.name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {banner ? truncate(banner?.summary, 150) : null}
        </h1>
      </div>

      <div className="banner__fadeBottom"></div>
    </header>
  );
};

export default Banner;
