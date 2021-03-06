import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Layout/Navbar';
import Input from './containers/Input/Input';
import Post from './containers/Post/Post';
import Footer from './components/Footer/Footer';


class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <Switch>
            <Route path = "/:post_id" component = {Post} />
            <Route path = "/" component = {Input} />
          </Switch>
          <Footer />
        </div>
    );
  }
}

export default App;
