import React, { Component } from 'react'
import Slider from './Component/Chatbox/ChatBox';

export default class App extends Component {
  constructor()
  {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick()
  {
    console.log('button click',this)
  }
  render() {
    return (
      <div>
        <Slider />
      
      </div>
    )
  }
}
