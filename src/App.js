import './App.css';
import { useEffect, useState } from 'react';

import Row from './components/Row';
import Hero from './components/Hero';
import Pop_player from './components/Pop_player';

function App() {


  let [_post, setPost] = useState([]);

  //random Movies/TV Shows
  const random_1 = 1 + Math.floor(Math.random() * 9);
  const random_2 = 1 + Math.floor(Math.random() * 9);
  const random_3 = 1 + Math.floor(Math.random() * 9);
  const random_4 = 1 + Math.floor(Math.random() * 9);
  const random_5 = 1 + Math.floor(Math.random() * 9);

  // urls for tvs/movies
  // https://api.themoviedb.org/3/tv/popular?api_key=3a14c7390230b3a5a2dba32ee4278cb2&language=en-US&page=
  const url_1 = `https://api.themoviedb.org/3/tv/popular?api_key=3a14c7390230b3a5a2dba32ee4278cb2&language=en-US&page=${random_1}`;
  const url_2 = `https://api.themoviedb.org/3/trending/all/day?api_key=3a14c7390230b3a5a2dba32ee4278cb2`;
  const url_3 = `https://api.themoviedb.org/3/tv/airing_today?api_key=3a14c7390230b3a5a2dba32ee4278cb2&language=en-US&page=${random_2}`;
  const url_4 = `https://api.themoviedb.org/3/trending/all/week?api_key=3a14c7390230b3a5a2dba32ee4278cb2`;
  const url_5 = `https://api.themoviedb.org/3/movie/popular?api_key=3a14c7390230b3a5a2dba32ee4278cb2&language=en-US&page=${random_3}`;
  const url_6 = `https://api.themoviedb.org/3/movie/top_rated?api_key=3a14c7390230b3a5a2dba32ee4278cb2&language=en-US&page=${random_4}`;
  const url_7 = `https://api.themoviedb.org/3/movie/upcoming?api_key=3a14c7390230b3a5a2dba32ee4278cb2&language=en-US&page=${random_4}`;

  const random_index = Math.floor(Math.random() * 10);
  // console.log(random_index);

  const get_Discover_post = () =>{
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3a14c7390230b3a5a2dba32ee4278cb2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
        .then(res => res.json())
        .then(async data =>{
           setPost(data.results[random_index]);
          //  console.log(data.results);
        });
  }



  useEffect(()=>{
    get_Discover_post()
  },[])
    
  // const bg_img = "https://image.tmdb.org/t/p/w1280" + _post.backdrop_path;
  let bg_img = "https://image.tmdb.org/t/p/w1280";

  function set_width_img(){
  if(window.innerWidth < 430){
      bg_img = bg_img + _post.poster_path;
  }else{
      bg_img = bg_img + _post.backdrop_path;
  }
}

set_width_img();

return(
    //  row componet   
    // 3a14c7390230b3a5a2dba32ee4278cb2
    <div id='appId'>
    <Hero movie_overview={_post.overview} movie_title={_post.title} url_path={bg_img} genre_arr={_post.genre_ids} />
    <div className="Content-section">
      <Row title="Popular TV Shows" url={url_1}></Row>
      <Row title="Trending Today" url={url_2}></Row>
      <Row title="TV Airing Today" url={url_3}></Row>
      <Row title="Trending of The Week" url={url_4}></Row>
      <Row title="Popular Movies" url={url_5}></Row>
      <Row title="Top Rated Movies" url={url_6}></Row>
      <Row title="Upcoming Movies" url={url_7}></Row>
    </div>
    
    </div>
)
}

export default App;
