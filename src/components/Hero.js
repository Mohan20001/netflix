import React, { useEffect } from "react";
import "../componetStyles/heroStyle.css";
import { useState } from "react";

const Hero = (props)=> {


   let bg_style = {
      // backgroundImage : `url(${props.url})`,
      backgroundSize : "100% auto"
   }

   return(
     <div className="Hero" style={bg_style}>
        <h1 className="Movie-title">Movie Name part 2 avalable</h1>
        <p className="Movie-description">Movie Description in some length of sentancesLorem ipsum is a dummy text without any sense. It is a sequence of Latin words that</p>
        <div className="btn-container">
         <button className="Play-btn">Play Now</button>
         <button className="Info-btn">More Info</button>
        </div>
     </div>
   );
}

export default Hero;