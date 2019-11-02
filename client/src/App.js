import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';
// import PostsListPage from './pages/PostsListPage';
// import PostFormPage from './pages/PostFormPage';
// import ShowPostPage from './pages/ShowPostPage';


import LoginPage from './pages/LoginPage';
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
                {/* <Route path="/" component={PostsListPage} /> */}
                {/* <Route path="/posts/new" component={PostFormPage} /> */}
                {/* <Route path="/posts/:id" component={ShowPostPage} /> */}
                
                <Route path="/login" component={LoginPage} /> 
                <Route path="/signup" component={SignUpPage} /> 
                <Route path="/about-us" component={AboutUsPage} />

              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
