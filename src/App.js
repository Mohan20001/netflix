import './App.css';
import { useEffect, useState } from 'react';

import Row from './components/Row';
import Hero from './components/Hero';

function App() {


  return (
    //  row componet   
    // 3a14c7390230b3a5a2dba32ee4278cb2
    <>
    <Hero/>
    <div className="Content-section" >
    <Row title="Popular TV Shows" url="https://api.themoviedb.org/3/tv/popular?api_key=3a14c7390230b3a5a2dba32ee4278cb2&language=en-US&page=1"></Row>
    <Row title="Trending Today" url="https://api.themoviedb.org/3/trending/all/day?api_key=3a14c7390230b3a5a2dba32ee4278cb2"></Row>
    <Row title="TV Airing Today" url="https://api.themoviedb.org/3/tv/airing_today?api_key=3a14c7390230b3a5a2dba32ee4278cb2&language=en-US&page=1"></Row>
    <Row title="Trending of The Week" url="https://api.themoviedb.org/3/trending/all/week?api_key=3a14c7390230b3a5a2dba32ee4278cb2"></Row>
    <Row title="Popular Movies" url="https://api.themoviedb.org/3/movie/popular?api_key=3a14c7390230b3a5a2dba32ee4278cb2&language=en-US&page=1"></Row>
    <Row title="Top Rated Movies" url="https://api.themoviedb.org/3/movie/top_rated?api_key=3a14c7390230b3a5a2dba32ee4278cb2&language=en-US&page=1"></Row>
    <Row title="Upcoming Movies" url="https://api.themoviedb.org/3/movie/upcoming?api_key=3a14c7390230b3a5a2dba32ee4278cb2&language=en-US&page=1"></Row>
    </div>
    </>
  );
}

export default App;
