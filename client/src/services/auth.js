// This service object was adapted from here: 
//  https://tylermcginnis.com/react-router-protected-routes-authentication/
//
// This version was modified to use real authentication implemented
// in the backend api. It was also modified to return promises instead
// of using callbacks `cb`.

const auth = {
    isAuthenticated: false,
    authenticate(email, password) {
      return fetch('/api/auth/login', { 
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
          if(!response.ok) {
            throw new Error('Login Failed');
          }
  
          return response.json();
        })
        .then((body) => {
          this.isAuthenticated = true;
          return body;
        });
    },
    signout(cb) {
      return fetch('/api/auth/logout', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
          if(!response.ok) {
            throw new Error('Logout Failed');
          }
  
          return response.json();
        })
        .then((body) => {
          this.isAuthenticated = false;
          return body;
        });
    },

      //takes email password and sends as a POSt,
      // change URL to /api/auth/signup
    register(firstName, lastName, email, password, age, gender, fitLevel, height, weight, bio) {
      return fetch('/api/auth/signup', { 
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, email, password, age, gender, fitLevel, height, weight, bio }),
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
          if(!response.ok) {
            throw new Error('SignUp Failed');
          }
  
          return response.json();
        })
        .then((body) => {
          this.isAuthenticated = true; //this means the user will stay logged in
          return body;
        });
    }
  }
  
  export default auth; 