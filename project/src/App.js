import React, { Component } from 'react';

import Navbar from './components/Layout/Navbar';
import Input from './containers/Input/Input';
import Posts from './containers/Posts/Posts';


class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <Input />
          <Posts />
        </div>
    );
  }
}

export default App;
