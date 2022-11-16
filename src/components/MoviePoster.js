import React, { useEffect } from "react";
import Pop_player from "../components/Pop_player";
import { useState } from "react";

const MoviePoster = (props) =>{
    let [vid, setVid] = useState("");
    
    const KEY = "AIzaSyC0xCBX2kC5xVdsCBE9diQsczTduWTC4Z4";
    const [isPOP, setISPOP] = useState(props.isP);

   function urlEnc(name) {
    name = name.replaceAll(":", "%3A");
    name = name.replaceAll(" ", "%20");
    return name + "trailer";
   }

//    console.log(urlEnc("Black panther: Wakanda forever"));
    
  async function fetchYoutubeData(query) {
       query = await urlEnc(query);
       await setTimeout(()=>{}, 10000)
       //https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=Black%20Panther%3A%20Wakanda%20Forever&videoDuration=videoDurationUnspecified&key=[YOUR_API_KEY]
       fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&videoDuration=videoDurationUnspecified&key=${KEY}`)
       .then(res => res.json())
       .then(data =>{
        setVid(data.items[0].id.videoId);
        console.log(data.items[0].id.videoId);
       });
    }

    // useEffect(()=>{
    //         fetchYoutubeData("Black panther: Wakanda forever");
    //     }, [])


    const video_trailer_pop = ()=>{
        // console.log(props.mt)
        setISPOP(true);
        console.log(isPOP);
        console.log(props.data);
        // document.getElementById('appId').append(<Pop_player/>)
    }
    // {2 > 1 ? <Pop_player/> : null} 
    return(
        <>
        <div className="poster-container">
           <img src={props.poster} onClick={async () => {
            fetchYoutubeData(props.data.name || props.data.title);
               video_trailer_pop();
           }
        } className="w-100 poster-image"></img>
        </div>
           {isPOP ? <Pop_player v_url={vid}/> : ""} 
        </>
    );
}

export default MoviePoster;