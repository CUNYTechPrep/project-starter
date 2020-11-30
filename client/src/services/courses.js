// This service object was adapted from here: 
//  https://tylermcginnis.com/react-router-protected-routes-authentication/
//
// This version was modified to use real authentication implemented
// in the backend api. It was also modified to return promises instead
// of using callbacks `cb`.

const courses = {
  //isAuthenticated: false,
  getCourses() {
    return fetch('/api/profile', { 
      method: 'GET',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        if(!response.ok) {
          throw new Error('Profile Failed');
        }

        return response.json();
      })
      .then((body) => {
        //this.isAuthenticated = true;
        return body;
      });
  },
}

export default profile;