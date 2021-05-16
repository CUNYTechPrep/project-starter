// here do the fetch calls to access the profiles themselves with fetch, GEt.


const swipe = {

    getProfile(pk) {
      return fetch('/api/user', { 
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
          if(!response.ok) {
            throw new Error('Failed loading profile ');
          }
          
          return response.json();
        })
        
    }
  }


export default swipe;