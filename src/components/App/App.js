import React from 'react';
import {Card} from './../Card'
import {CitySearch} from './../CitySearch'
import {Finder} from './../Finder'
import './App.css'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      location: {},
      weather: {}
    }
  }

  changeState = state => this.setState(state)

  render() {
    return (
      <div className="app">
        <CitySearch 
          setState={this.changeState}/>
        <Card 
          state={this.state}/>
        <Finder 
          setState={this.changeState}/>
      </div>
    )
  }
}

export {App};
