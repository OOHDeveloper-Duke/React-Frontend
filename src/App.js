/* @flow */
import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Redirect} from 'react-router-dom';
import Dashboard from './components/Dashboard'
import 'semantic-ui-css/semantic.min.css';
import './App.css';

type Props = {
};

type State = {
};
const fakeAuth = {
  isAuthenticated: true,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

class App extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { user: null, room: null} ;
  }
  // componentWillMount() {
  //   //set user
  //   sessionStorage.setItem('user', 'bz43');
  //   var href = window.location.href;
  //   console.log(href.match(/([^\/]*)\/*$/)[1]);
  //   //check if room exists
  //   //check if user has access to room
  //   //set room
  //
  //   // if()
  // }

  render() {
    return (
      <Router>
        <div>
        <PrivateRoute path="/room/:roomid" component={Dashboard}/>
        <PrivateRoute exact path="/" component={Dashboard}/>
        </div>
      </Router>
    );
  }
}

export default App;
