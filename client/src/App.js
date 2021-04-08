import 'fontsource-roboto';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import LoginRegister from './pages/LoginRegisterPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginRegister />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;