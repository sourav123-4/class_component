import React, { Component } from 'react'
import './App.css'
import { Anyname, Child } from './anyname'
export default class App extends Component {
  render() {
    let name="hello sourav"
    return (
      <div className='App'>
        <u><h1>Practice_Purpose</h1></u>
        <Anyname/>
        <Child name={name}/>
      </div>
    )
  }
}
