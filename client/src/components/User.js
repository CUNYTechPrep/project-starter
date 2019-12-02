import React from 'react';
import { Link } from 'react-router-dom';

import TextField from "@material-ui/core/TextField";


function User({ userID, username, email, password }) {
    console.log("\n User.js \n");
  
  return (
        <div className="col-12" style = {{textAlign:"left"}}>
              
              <p>User ID is: {userID}</p>
              <p>Username is: {username}</p>
              <p>Email is: {email}</p>
            
              <TextField
                id="text-field-with-svg-password"
                label="Password"
                type="password"
                value = {password}
                className="md-cell md-cell--bottom"
              />
          
           
              
        </div>
      
    
  );
}

export default User;