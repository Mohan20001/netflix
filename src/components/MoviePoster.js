import React, { useEffect } from "react";
import Pop_player from "../components/Pop_player";
import { useState } from "react";

const MoviePoster = (props) =>{

    const [isPOP, setISPOP] = useState(props.isP);

    const video_trailer_pop = ()=>{
        console.log(props.mt)
        setISPOP(true);
        console.log(isPOP);
        // document.getElementById('appId').append(<Pop_player/>)
    }
    // {2 > 1 ? <Pop_player/> : null} 
    return(
        <div className="poster-container">
           <img src={props.poster} onClick={() => video_trailer_pop()} className="w-100 poster-image"></img>
           {isPOP ? <Pop_player/> : ""} 
        </div>
    );
}

export default MoviePoster;