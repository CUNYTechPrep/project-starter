// This service object was adapted from here: 
//  https://tylermcginnis.com/react-router-protected-routes-authentication/
//
// This version was modified to use real authentication implemented
// in the backend api. It was also modified to return promises instead
// of using callbacks `cb`.

// const profileEdit = {
//     // isAuthenticated: false,
//     editBio(bio_message) {
//       return fetch('/api/user/bio', { 
//         method: 'PUT',
//         body: JSON.stringify({ bio_message }),
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       })
//         .then((response) => {
//           if(!response.ok) {
//             throw new Error('Editing Bio Failed');
//           }
  
//           return response.json();
//         })
//         .then((body) => {
//         //   this.isAuthenticated = true;
//           return body;
//         });
//     },
    
//     editFitlevel(fitlevel_message) {
//       return fetch('/api/user/fitlevel', { 
//         method: 'PUT',
//         body: JSON.stringify({ fitlevel_message }),
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       })
//         .then((response) => {
//           if(!response.ok) {
//             throw new Error('Editing Fitlevel Failed');
//           }
  
//           return response.json();
//         })
//         .then((body) => {
//         //   this.isAuthenticated = true;
//           return body;
//         });
//     },
//     editHW(height, weight) {
//       return fetch('/api/user/heightweight', { 
//         method: 'PUT',
//         body: JSON.stringify({ height, weight }),
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       })
//         .then((response) => {
//           if(!response.ok) {
//             throw new Error('Editing Height & Weight Failed');
//           }
  
//           return response.json();
//         })
//         .then((body) => {
//         //   this.isAuthenticated = true;
//           return body;
//         });
//     },
//   }
  
//   export default profileEdit; 