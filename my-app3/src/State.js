import React, { Component } from 'react'
import './Style.css';

export default class State extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    handleCount = () =>{
        this.setState({
            count : this.state.count +1
        })
    }
    
    handleCountNeg =() =>
    {
        this.setState(
            {
                count : this.state.count - 1 
            }
        )
    }

  render() {
      const {count} = this.state
    return (
      <div>
      <h1> Count: {count} </h1>
      <button onClick={this.handleCount}>+</button>
      <button onClick={this.handleCountNeg} disabled= {count===0 ? true : false}>-</button>
      </div>
    )
  }
}
