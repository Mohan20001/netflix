import React, { useEffect } from "react";
import "../componetStyles/heroStyle.css";
import { useState } from "react";
import Pop_player from '../components/Pop_player';

const Hero = (props)=> {

   let [genre_title, setGenre_title] = useState([]);
   let gn_title_arr = [];

   let bg_style = {
      backgroundImage : `url(${props.url_path})`,
      backgroundSize : "100% auto"
   }

   // fetching genre title array
  const fetch_genre_data = () =>{
   fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=3a14c7390230b3a5a2dba32ee4278cb2&language=en-US")
   .then(res => res.json())
   .then(data => {
     setGenre_title(data.genres);
    //  console.log(data.genres);
   });
 }

 useEffect(()=>{
   fetch_genre_data()
 }, []);

genre_title.map((item)=>{
   const {id, name} = item;
    // console.log(id)
});


// console.log(genre_title);
//  console.log(props.genre_arr);

   return(
     <div className="Hero" style={bg_style}>
      <div className="Hero-overlay"></div>
        <h1 className="Movie-title mvt">{props.movie_title}</h1>
        <p className="Movie-description mvd">{props.movie_overview}</p>
        <div className="genre-title">Horror . Comedy . Drama</div>
        <div className="btn-container mvb">
         <button className="Play-btn">Play Now</button>
         <button className="Info-btn" onClick={() => console.log(<Pop_player/>)}>More Info</button>
        </div>
     </div>
   );
}

export default Hero;