import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import Navigation from './pages/Navigation';
import PostsListPage from './pages/PostsListPage';
import SubmitProduct from './pages/Form/SubmitProduct';
import Signup from './pages/Form/Signup';
import Login from './pages/Form/Login';
import AccountPage from './pages/AccountPage';

import './App.css';


// function Navigation() {
//   const isAuthenticated = cookie.load('token');

//   console.log('isAuth = ' + isAuthenticated);

//   // (cookie.load('token') && (isAuthenticate = true))

//   const handleLogout = () => {
//       cookie.remove('token');
//       cookie.remove('username');
//   };

//   return (
//     <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
//       <Link className="navbar-brand" to="/">
//         College Sharing
//       </Link>
//       {console.log(isAuthenticated)}
//       <ul className="navbar-nav mr-auto">
//         <li className="nav-item">
//           <NavLink className="nav-link" exact to="/productSubmission">
//             Add Product
//           </NavLink>
//         </li>
//       </ul>
//       {isAuthenticated ? (
//         <>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <NavLink className="nav-link" onClick={handleLogout} exact to="/">
//               Logout
//             </NavLink>
//           </li>
//           </ul>
//         </>
//       ) : (
//         <>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <NavLink className="nav-link" exact to="/login">
//               Login
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link" exact to="/signup">
//               Signup
//             </NavLink>
//           </li>
//         </ul>
//         </>
//       )
//       }
//     </nav>
//   );
// }

class App extends React.Component {
  render() {
    return (
        <Router>
          <Navigation />
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/productSubmission" component={SubmitProduct} />
                <Route path="/accountPage" component={AccountPage} />
                <Route path="/" component={PostsListPage} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
