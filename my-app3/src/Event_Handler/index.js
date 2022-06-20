import React, { Component } from 'react'


export default class Event_Handler extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         constvalue : '' 
      }
    }
    

    handleClick = (e) => {
        this.setState({constvalue: e.target.value}) 
    }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleClick}/>
        <p>{this.state.constvalue}</p>
      </div>
    )
  }
}
