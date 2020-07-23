import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Saved from './pages/Saved';
import Error from "./pages/Error";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/saved' component={Saved} />
          <Route component={Error} />
        </Switch>
      </main>
    );
  }
}

export default App;
