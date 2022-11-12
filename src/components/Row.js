import React, { useEffect } from "react";
import MoviePoster from "./MoviePoster";
import "../componetStyles/rowStyle.css";
import { useState } from "react";

const Row = (props) =>{
     
const [data, setData] = useState([]);

const fetchData = ()=> {
   fetch(props.url)
   .then(res => res.json())
   .then(data => {
      setData(data.results)
   })
}

useEffect(()=>{
   fetchData()
}, [])

    return(
      
       <div className="row-container">
       <h2 className="row-title">{props.title}</h2>
       <div className="row">
       {data.map(item => <MoviePoster isP={false} mt={item.title || item.original_title || item.name } poster={'https://image.tmdb.org/t/p/w500'+item.poster_path}/>)}

       </div>
       </div>
    );
}

export default Row;