import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Spender from './containers/Spender';
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Spender />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
