import React, { Component } from 'react'
import ExampleComponent from '../components/ExampleComponent'
import Header from './Header'
import '../assets/Main.css'

class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Header/>
        <ExampleComponent/>
      </div>
    );
  }
}

export default Main;
