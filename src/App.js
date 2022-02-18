
import { Component } from 'react';
import './App.css';
import Person from './Components/Person';

export default class App extends Component {
    constructor (props) {
      super(props)
      this.state={show:false}
    }
    handleClick =() => this.setState ({show:!this.state.show})

  render() {
  return (
    <div className="App">
    <h1> Checkpoint React State </h1>
    <button onClick={this.handleClick}> Show/Hide </button>
    {this.state.show? <Person/> :null }
    
    </div>
  );
}
}

