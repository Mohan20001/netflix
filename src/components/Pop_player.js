import React from "react";
import ReactPlayer from 'react-player/youtube';
import '../componetStyles/Pop_player.css';

const Pop_player = ()=>{
    return(
        <div className="preview-container">
          <div className="pop-player">
            <div className="video-wrapper">
               <ReactPlayer className="pop-video" url='https://www.youtube.com/watch?v=RfiKg_Sfg-o' width="100%" height="100%" loop={false} />
            </div>
            <div>

            </div>
          </div>
        </div>
    );
}

export default Pop_player;