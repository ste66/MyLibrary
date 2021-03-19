
import React, { Component } from 'react'


import Navbar from './Component/navbar';
import Movies from './Component/movies';
import Footer from './Component/footer';
import './Component/App.css';

class App extends Component {

  render() {
    return (
      <div className = "stella">
        <Navbar mynavbar = "Top 250 as rated"/>

        <Movies movie= "The Godfather" year= "1972" rating="9.1"/>
        <Movies movie= "The Matrix" year= "1999" rating="8.6"/>
        <Movies movie= "Untouchable" year= "2011" rating="8.4"/>
        <Movies movie= "Joker" year= "2019" rating="8.6"/>
        <Movies movie= "Jurassic Park" year= "1993" rating="8.1"/>

        <Footer myfooter= "This Footer"/>
      </div>
    )
  }
}
export default App;