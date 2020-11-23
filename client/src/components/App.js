import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import history from '../history';
import { loadUser } from '../actions/authActions';
import Register from './auth/Register';

class App extends React.Component {
  componentDidMount() {
    const store = this.props.store;
    store.dispatch(loadUser());
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <NavBar />
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/users/register" exact component={Register} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
