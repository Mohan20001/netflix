import React from "react";

const MoviePoster = (props) =>{
    return(
        <div className="poster-container">
           <img src={props.poster} className="w-100 poster-image"></img>
        </div>
    );
}

export default MoviePoster;