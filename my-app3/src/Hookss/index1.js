import React, { Component } from 'react'

export default class Hookss extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count : 0
    }
  }

  handleClick = () => {
    this.setState({
      count : this.state.count +1
    })
  }
  
  render() {
    const {count} = this.state;
    return (
      
      <div>
        <h1> Count : {count}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}
