import React, { useEffect } from "react";
import "../componetStyles/heroStyle.css";
import { useState } from "react";
import Pop_player from '../components/Pop_player';

const Hero = (props) => {

  let [genre_title, setGenre_title] = useState([]);
  let gn_set = new Set();

  let [vid, setVid] = useState("");
  const [isPOP, setISPOP] = useState(false);
  const KEY = "AIzaSyC0xCBX2kC5xVdsCBE9diQsczTduWTC4Z4";

  function urlEnc(name) {
    name = name.replaceAll(":", "%3A");
    name = name.replaceAll(" ", "%20");
    return name + "%20trailer";
   }

   async function fetchYoutubeData(query) {
    query = await urlEnc(query);
    await setTimeout(()=>{}, 10000)
    //https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=Black%20Panther%3A%20Wakanda%20Forever&videoDuration=videoDurationUnspecified&key=[YOUR_API_KEY]
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&videoDuration=videoDurationUnspecified&key=${KEY}`)
    .then(res => res.json())
    .then(data =>{
     setVid(data.items[0].id.videoId);
    //  console.log(data.items[0].id.videoId);
    });
 }

  const video_trailer_pop = ()=>{
    // console.log(props.mt)
    setISPOP(true);
    // console.log(props);
}

  let bg_style = {
    backgroundImage: `url(${props.url_path})`,
    backgroundSize: "100% auto"
  }

  // fetching genre title array
  const fetch_genre_data = () => {
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=3a14c7390230b3a5a2dba32ee4278cb2&language=en-US")
      .then(res => res.json())
      .then(data => {
        genre_title = data.genres;
        setGenre_title(data.genres);
      });
  }

  useEffect(() => {
    fetch_genre_data()
  }, []);

  const a = genre_title;
  const b = props.genre_arr;

  for (let i in b){
    for(let j in a){
      let {id, name} = a[j];
      if(id == b[i]){
        gn_set.add(name);
      }
    }
  }

let s = '';
let gn_arr = [...gn_set];

gn_arr.map(ittem =>{
  s = s + "  .  " + ittem;
})
s = s.substring(4, s.length);

let popChild = (data) =>{
  setISPOP(data)
  console.log(data)
}


  return (
    <>
    <div className="Hero" style={bg_style}>
      <div className="Hero-overlay"></div>
      <h1 className="Movie-title mvt">{props.movie_title}</h1>
      <p className="Movie-description mvd">{props.movie_overview}</p>
      <div className="genre-title">{s}</div>
      <div className="btn-container mvb">
        <button className="Play-btn">Play Now</button>
        <button className="Info-btn" onClick={() =>{
          let n = urlEnc(props.movie_title);
          // console.log(n);
          fetchYoutubeData(n);
          video_trailer_pop();
        }
           }>More Info</button>
      </div>
    </div>
    {isPOP ? <Pop_player onClick={popChild} vdata={props.hdata} v_url={vid}/> : ""} 
   </>
  );
}

export default Hero;