import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import fontawesome from '@fortawesome/fontawesome-free';


// import PostsListPage from './pages/PostsListPage';
// import PostFormPage from './pages/PostFormPage';
// import ShowPostPage from './pages/ShowPostPage';


import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import AuthButton from './components/AuthButton';
import SignUpPage from './pages/SignUpPage';
import AboutUsPage from './pages/AboutUsPage';
import DashboardPage from './pages/DashboardPage';


import './css/App.css';



class App extends React.Component {
  render() {
    return (
        <Router>
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                {/*  */}
                {/* <Route path="/posts/new" component={PostFormPage} /> */}
                {/* <Route path="/posts/:id" component={ShowPostPage} /> */}
                
                <Route path="/" component={LoginPage} />
                <Route path="/signup" component={SignUpPage} />
                <Route path="/dashboard" component={DashboardPage} />
                <Route path="/about-us" component={AboutUsPage} />

              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
