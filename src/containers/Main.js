import React, { Component } from 'react'
import CentralHome from '../components/CentralHome'
import Header from './Header'
import '../assets/style/Main.css'

class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Header/>
        <CentralHome/>
      </div>
    );
  }
}

export default Main;
