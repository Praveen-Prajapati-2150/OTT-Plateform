import axios from '../redux/Axios';
import React, { useState, useEffect } from 'react';
import '../styles/Banner.css';

const Banner = () => {
  const [banner, setBanner] = useState(null);
  const [moviesList, setMoviesList] = useState([]);

  const fetchBanner = async () => {
    axios
      .get(`https://api.tvmaze.com/shows`)
      .then((res) => {
        setMoviesList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  useEffect(() => {
    setBanner(moviesList[Math.floor(Math.random() * moviesList.length)]);
  }, [moviesList]);

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
        backgroundImage: `url(${banner?.image?.original})`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__fadeBottom"></div>

      <div className="banner__contents">
        <h1 className="banner__title">{banner?.name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {banner ? truncate(banner?.summary, 200) : null}
        </h1>
      </div>
    </header>
  );
};

export default Banner;
