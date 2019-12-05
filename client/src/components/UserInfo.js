import React from 'react';
import { Link } from 'react-router-dom';

import TextField from "@material-ui/core/TextField";


function UserInfo({ userID, username, email, password }) {
    console.log("\n UserInfo.js \n");
  return (
        <div className="col-12" style = {{textAlign:"left", }}>
              
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
          
           
              
          <hr color="#c7c34c" size="2" width="100%"></hr>
        </div>
      
    
  );
}

export default UserInfo;