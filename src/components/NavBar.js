import React from "react";
import "../componetStyles/navbarStyle.css"
import { FaSearch } from "react-icons/fa"
import avatar from "../assets-images/avatar.png"

let NavBar = ()=>{
  
  let isshow = false;
  
  function showMenu() {
    if(isshow){
      document.getElementById("menu").style.display = "none";
      isshow = false;
    }else{
      document.getElementById("menu").style.display = "block";
      isshow = true;
    }
  }

    return(
       <>
       <div className="navbar">
        <div className="navbar-a">
          <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="Logo"></img>
          <ul>
            <li><a rel="link" href="#appId">HOME</a></li>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>Latest</li>
            <li>My List</li>
          </ul>
        </div>
        <div className="navbar-b">
             <FaSearch className="search-icon"/>
             <input type="text"></input>
             <img src={avatar} className="avatar" onClick={showMenu}></img>
             <div className="side-menu" id="menu">
                <h3>MOHAN</h3>
                <hr/>
                <ul>
                  <li>Account</li>
                  <li>My List</li>
                  <li>Settings</li>
                  <li>About</li>
                </ul>
             </div>
        </div>
       </div>
       </>
    );
}

export default NavBar;