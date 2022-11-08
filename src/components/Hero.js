import React from "react";
import "../componetStyles/heroStyle.css";

const Hero = ()=> {
   return(
     <div className="Hero">
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