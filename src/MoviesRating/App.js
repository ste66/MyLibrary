


import './App.css';

import React, { Component } from 'react'

import Card from "./components/card"
import Navbar from "./components/navbar"
import Carousel from "./components/carousel"


import Avengers from "./images/avengers.jpg";
import Breakingbad from "./images/breakingbad.jpg";
import Gambit from "./images/gambit.jpg";
import Soul from "./images/soul.jpg";
import Wallstreet from "./images/wallstreet.jpg";




class App extends Component {
  render() {
    return (
      <div>


               <Carousel/>
   
    
                <Navbar/>

        {/* To see your cards side by side, add a row */}

            <div className="row">
            
            {/* Movie Cards */} 
        
        <Card name="Avengers" year="2019" rating="9.0" image={Avengers} />
          <Card name="Breakingbad" year="2008 Series" rating="8.6" image={Breakingbad} />
          <Card name="Gambit" year="2020 Series" rating="8.9" image={Gambit} />
          <Card name="Soul" year="2020" rating="8.1" image={Soul} />
            <Card name="wallstreet" year="2013" rating="8.2" image={Wallstreet} />
            </div>
      </div>
    )
  }
}

export default App;

