import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header'
import Counter from './components/Counter';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <Router>
        <Header />
        <Counter />
      </Router>
    );
  }
}

export default App;
