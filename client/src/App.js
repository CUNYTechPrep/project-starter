import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
// import ShowPostPage from './pages/ShowPostPage';


import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import AuthButton from './components/AuthButton';
import SignUpPage from './pages/SignUpPage';
import AboutUsPage from './pages/AboutUsPage';



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
                <Route exact path="/" component={AboutUsPage} />
                <Route exact path="/login" component={LoginPage} /> 
                <PrivateRoute exact path="/posts/new" component={PostFormPage} />
                <Route exact path="/signup" component={SignUpPage} /> 
                <Route exact path="/about-us" component={AboutUsPage} />
      
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
