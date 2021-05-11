import React from 'react';
import 'w3-css/w3.css'; 
import '../../css/ProfilePage.css';


function CurrentProfile({ id, firstName, lastName, age, gender, fitLevel, height, weight, bio, image }) {
  var imageURL = image + ".jpg";
  return (
      <div>
        <div>     
          <div style={{border: '1px groove lightgray', paddingTop: 10, paddingBottom: 20, paddingLeft: 10, 
            paddingRight: 10, borderRadius: 30}}>
                <div>
                  <div>
                    <div style={{height: 430, width: 400, alignItems: "center",
                      borderRadius: 30, margin: 30}}>    
                      <img src= {imageURL} alt={id} style={{height: 450, width: 380}}/>
                    </div>       
                    <div style={{border: '1px groove lightgray', paddingTop: 10, paddingBottom: 20, paddingLeft: 10, 
                      paddingRight: 10, borderRadius: 30}}>
                      <div>
                        <div>
                          <h5 style={{fontSize: 27}}>
                              { firstName }, { lastName } - { age } 
                              <span style={{color: 'white'}}>..................................</span>
                              <span style={{color: '#585858'}}> {gender} </span>
                          </h5>
                          <h5 style={{color: '#757575', fontSize: 20}}>
                              FitLevel: { fitLevel } 
                          </h5>
                          <div className="flex-container-profile" style={{color:'#585858'}}>
                            <h5>
                                Height: { height } inches
                            </h5>
                            <h5>
                                Weight: { weight } lbs
                            </h5>
                          </div>
                          <p style={{maxWidth: 400, marginLeft: 20, marginTop: 10}}>
                          { bio }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div>   
        </div>
      </div>
    
    
  );
}

export default CurrentProfile;