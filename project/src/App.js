import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Layout/Navbar';
import Input from './containers/Input/Input';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Input />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
