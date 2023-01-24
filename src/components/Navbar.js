import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/Navbar.css';
import axios from 'axios';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState('');
  const [list, setList] = useState([]);

  const history = useHistory();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);
    return () => window.removeEventListener('scroll', transitionNavbar);
  }, []);

  const fetchMoviesList = async () => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then((res) => {
        // console.log(res);
        setList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchMoviesList();
  }, [query]);

  // console.log({ query });
  // console.log({ list });

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__content">
        <Link className="nav__logo" to="/">
          <img
            className="nav__logo__logo"
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="logo"
          />
        </Link>

        <div className="nav_avatar">
          <div className="search_field">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="input"
              type="text"
              placeholder="search movie"
            />

            <div className="search_list" onClick={(e) => e.stopPropagation()}>
              {list?.map((movie, index) => {
                console.log(movie?.show?.id);
                return (
                  <Link
                    key={index}
                    className="movie"
                    onClick={() => window.open(`{/movie/${movie?.show?.id}`)}
                    to={`/movie/${movie?.show?.id}`}
                  >
                    <h3
                      onClick={() => window.open(`{/movie/${movie?.show?.id}`)}
                      className="movie_name"
                    >
                      {movie.show.name}
                    </h3>
                  </Link>
                );
              })}
            </div>
          </div>

          <img
            onClick={() => history.push('/profile')}
            className="nav__icon"
            src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png"
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
