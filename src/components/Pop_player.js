import React, { useState, useEffect } from "react";
import ReactPlayer from 'react-player/youtube';
import '../componetStyles/Pop_player.css';

const Pop_player = (props)=>{
  let [genre_title, setGenre_title] = useState([]);
  let gn_set = new Set();

  // console.log(props.v_url);
  let video_url = `https://www.youtube.com/watch?v=${props.v_url}`;
  console.log(props.vdata);

    // fetching genre title array
    const fetch_genre_data = () => {
      fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=3a14c7390230b3a5a2dba32ee4278cb2&language=en-US")
        .then(res => res.json())
        .then(data => {
          genre_title = data.genres;
          setGenre_title(data.genres);
          // console.log(data);
        });
    }

    useEffect(()=>{
      fetch_genre_data();
    }, []);

    const a = genre_title;
    const b = props.vdata.genre_ids;
  
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
    s = s + ", " + ittem;
  })
  s = s.substring(1, s.length);

  // console.log(s);

  let [y, setY] = useState(true);
  if(y == true){
    return(
      <div className="preview-container">
          <div className="pop-player">
            <div className="video-wrapper">
               <ReactPlayer className="pop-video" url={video_url} width="100%" height="100%" loop={false} autoPlay={true}/>
               <span className="close-btn-top" onClick={()=>{
                       setY(false)
                       props.onClick(false)
               }}>EXITE</span>
            </div>
            <div className="video-descrption">
                 <div className="m-dc">
                      <div className="dec">
                        <div className="vital-info"><span className="m-rating">{props.vdata.vote_average}</span>  {props.vdata.release_date || ""}  <span className="cr">{props.vdata.original_language}</span></div>
                        <p>{props.vdata.overview || "Not Available"}</p>
                      </div>
                      <div className="cast"><span>Genres: </span>{s || "Not Available"}</div>
                 </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Pop_player;