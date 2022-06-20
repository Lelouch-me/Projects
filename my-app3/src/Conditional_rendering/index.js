import React, { Component } from 'react'
import HomePage from './home'
import LoginPage from './login'

 class Conditional_Rendering extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          isLog : false,
       }
     }
     
  render() {
    const {isLog} = this.state
    let element ;
    if(this.state.isLog){
        element = <HomePage />
    }
    else {
        element = <LoginPage />
    }
    return(
        <div> {element} </div>
    )

  
  }
}
export default Conditional_Rendering