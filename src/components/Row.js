import React from "react";
import MoviePoster from "./MoviePoster";
import "../componetStyles/rowStyle.css";
const Row = (props) =>{
    return(
       <div className="row-container">
       <h2 className="row-title">{props.title}</h2>
       <div className="row">
          <MoviePoster poster="https://th.bing.com/th/id/OIP.xlDfBEWipaunYwyJGCdhHgHaFj?w=186&h=140&c=7&r=0&o=5&pid=1.7"></MoviePoster>
          <MoviePoster poster="https://i.pinimg.com/736x/41/b9/d0/41b9d02e0a532b05e8e4b258d2cfea2e.jpg"></MoviePoster>
          <MoviePoster poster="https://th.bing.com/th/id/OIP.xlDfBEWipaunYwyJGCdhHgHaFj?w=186&h=140&c=7&r=0&o=5&pid=1.7"></MoviePoster>
          <MoviePoster poster="https://th.bing.com/th/id/OIP.xlDfBEWipaunYwyJGCdhHgHaFj?w=186&h=140&c=7&r=0&o=5&pid=1.7"></MoviePoster>
          <MoviePoster poster="https://th.bing.com/th/id/OIP.xlDfBEWipaunYwyJGCdhHgHaFj?w=186&h=140&c=7&r=0&o=5&pid=1.7"></MoviePoster>
          <MoviePoster poster="https://th.bing.com/th/id/OIP.xlDfBEWipaunYwyJGCdhHgHaFj?w=186&h=140&c=7&r=0&o=5&pid=1.7"></MoviePoster>
          <MoviePoster poster="https://th.bing.com/th/id/OIP.xlDfBEWipaunYwyJGCdhHgHaFj?w=186&h=140&c=7&r=0&o=5&pid=1.7"></MoviePoster>
          <MoviePoster poster="https://th.bing.com/th/id/OIP.xlDfBEWipaunYwyJGCdhHgHaFj?w=186&h=140&c=7&r=0&o=5&pid=1.7"></MoviePoster>
          <MoviePoster poster="https://th.bing.com/th/id/OIP.xlDfBEWipaunYwyJGCdhHgHaFj?w=186&h=140&c=7&r=0&o=5&pid=1.7"></MoviePoster>
          <MoviePoster poster="https://th.bing.com/th/id/OIP.xlDfBEWipaunYwyJGCdhHgHaFj?w=186&h=140&c=7&r=0&o=5&pid=1.7"></MoviePoster>
          <MoviePoster poster="https://th.bing.com/th/id/OIP.xlDfBEWipaunYwyJGCdhHgHaFj?w=186&h=140&c=7&r=0&o=5&pid=1.7"></MoviePoster>
          <MoviePoster poster="https://th.bing.com/th/id/OIP.xlDfBEWipaunYwyJGCdhHgHaFj?w=186&h=140&c=7&r=0&o=5&pid=1.7"></MoviePoster>
          <MoviePoster poster="https://th.bing.com/th/id/OIP.xlDfBEWipaunYwyJGCdhHgHaFj?w=186&h=140&c=7&r=0&o=5&pid=1.7"></MoviePoster>
          <MoviePoster poster="https://th.bing.com/th/id/OIP.xlDfBEWipaunYwyJGCdhHgHaFj?w=186&h=140&c=7&r=0&o=5&pid=1.7"></MoviePoster>
       </div>
       </div>
    );
}

export default Row;