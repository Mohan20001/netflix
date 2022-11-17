import React, { useState } from "react";
import ReactPlayer from 'react-player/youtube';
import '../componetStyles/Pop_player.css';

const Pop_player = (props)=>{
  // console.log(props.v_url);
  let video_url = `https://www.youtube.com/watch?v=${props.v_url}`;

  let [y, setY] = useState(true);
  if(y == true){
    return(
      <div className="preview-container">
          <div className="pop-player">
            <div className="video-wrapper">
               <ReactPlayer className="pop-video" url={video_url} width="100%" height="100%" loop={false} autoPlay={true}/>
               <span className="close-btn-top" onClick={()=> setY(false)}>EXITE</span>
            </div>
            <div>

            </div>
          </div>
        </div>
    );
  }
}

export default Pop_player;