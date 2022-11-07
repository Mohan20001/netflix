import React from "react";
import "../componetStyles/heroStyle.css";

const Hero = ()=> {
   return(
     <>
     <video className="hero-video" autoPlay>
        <source src="https://www.youtube.com/embed/zJwbZX4i-N4"></source>
     </video>
     </>
   );
}

export default Hero;