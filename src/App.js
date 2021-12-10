import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Profile from './Profile'
import "./App.css"

export class App extends Component {

   state ={ 
     isShow: false
   }
   handleShow = () => {
     this.setState({isShow:! this.state.isShow});
   }
  render() {
    return (
      <div style={{textAlign:"center", alignItems:"center"}} className='Appz'>
        <Button className='ButtonMain' onClick={this.handleShow} > {this.state.isShow ? "Hide" : "Show"} </Button>
        {this.state.isShow === true ? <Profile/> : null }
      </div>
    )
  }
}

export default App
