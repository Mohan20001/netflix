import React, { useEffect } from "react";
import "../componetStyles/heroStyle.css";
import { useState } from "react";

const Hero = (props)=> {


   let bg_style = {
      backgroundImage : `url(${props.url_path})`,
      backgroundSize : "100% auto"
   }

   return(
     <div className="Hero" style={bg_style}>
      <div className="Hero-overlay"></div>
        <h1 className="Movie-title mvt">{props.movie_title}</h1>
        <p className="Movie-description mvd">{props.movie_overview}</p>
        <div className="btn-container mvb">
         <button className="Play-btn">Play Now</button>
         <button className="Info-btn">More Info</button>
        </div>
     </div>
   );
}

export default Hero;