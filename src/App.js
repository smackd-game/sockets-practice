import React, {Component} from 'react';
import io from 'socket.io-client'

class App extends Component() {
  constructor(props){
    super(props)
    this.state = {

    }
    this.socket = io.connect(':4000')

  }

  render(){
  return (
    <div className="App">
      App
    </div>
  )}
}


export default App;
