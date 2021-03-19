import React from 'react'

import {Link, NavLink} from "react-router-dom"
function Navbar() {
 return (
 
<div className="nav d-flex justify-content-around">
       

       <Link to="/">Home</Link>

       <NavLink activeStyle={{color:"yellow", background:"orchid"}} to="/recipe"> Recipe</NavLink>
       
       <NavLink activeStyle={{color:"yellow", background:"orchid"}} to="/songs"> Songs</NavLink>

       <NavLink activeStyle={{color:"yellow", background:"orchid"}} to="/movies">MoviesRating</NavLink> 
      
       <NavLink activeStyle={{color:"yellow", background:"orchid"}} to="/rate">Movies</NavLink> 

     <NavLink activeStyle={{color:"yellow", background:"orchid"}} to="/kanBan"> KanBan</NavLink>

    <NavLink activeStyle={{color:"yellow", background:"orchid"}} to="/player">Player</NavLink>   


</div>

 )
}

export default Navbar
