import React from "react";
import Pop_player from "../components/Pop_player";

const MoviePoster = (props) =>{

    const video_trailer_pop = ()=>{
        console.log(props.mt)
        // document.getElementById('appId').append(<Pop_player/>)
    }

    return(
        <div className="poster-container">
           <img src={props.poster} onClick={() => video_trailer_pop()} className="w-100 poster-image"></img>   
        </div>
    );
}

export default MoviePoster;