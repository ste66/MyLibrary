
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom" 
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from "./Components/Error/NotFound"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"

// Import previous projects=============
import Recipe from "./Recipe/App"
import SongsBooks from "./SongsBooks/App"
import Movies from "./MoviesRating/App"
import Rating from "./RateMovies/App"
import kanBan from "./KanBan/App"
import PlayerMap from "./PlayerMap/App" 

function App() { 
  return (
    <Router>
      <div>
       <Navbar/>
      </div>
      <Switch>
  
                  <Route path="/" exact component= {Home}/>
                  <Route path= "/recipe" component= {Recipe}/>
                  <Route path= "/songs" component= {SongsBooks}/> 
                  <Route path= "/movies" component= {Movies}/> 
                  <Route path= "/rate" component= {Rating}/> 
                  <Route path= "/kanBan" component= {kanBan}/> 
                 <Route path= "/player" component= {PlayerMap}/>   
                  <Route  component={NotFound}/>


      </Switch>

    <div>
      
    </div>
    </Router>
  )
}

export default App;
