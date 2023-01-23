import React from 'react';
import '../styles/HomeScreen.css';
import Banner from './Banner';
import Navbar from './Navbar';
import requests from '../redux/Requests';
import Row from './Row';

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Banner />
      <Row title="Drama" fetchUrl={'Drama'} isLargeRow />
      <Row title="Action Movies" fetchUrl={'Action'} isLargeRow />
      <Row title="Comedy Movies" fetchUrl={'Comedy'} isLargeRow />
      <Row title="Horror Movies" fetchUrl={'Horror'} isLargeRow />
      <Row title="Romance Movies" fetchUrl={'Romance'} isLargeRow />
    </div>
  );
};

export default HomeScreen;
