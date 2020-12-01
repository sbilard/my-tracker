import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        Welcome, Sean!
      </div>
    )
  }
}  

export default App;
