import React from 'react';

function PlacesPage(props) {
  return (
    <div>
      <div style={{backgroundColor: "#379B69", paddingLeft: 100, paddingRight: 100,
        borderRadius: 10, marginTop: 10}}>
        <form style={{justifyContent: 'space-evenly'}}>
            <input type="text" placeholder="Search Parks by City" size="50"
              style={{marginTop: 30}}></input>
              <span>
                <button style={{backgroundColor: "#68EECC"}}>
                  🔍
                </button>
              </span>
              <span style={{color: "white", flex: 4}}>
                &nbsp; &nbsp;&nbsp;&nbsp;
              </span>
            <span>
              <input type="text" placeholder="Search Gyms by City" size="50"
                style={{marginTop: 30, marginBottom: 30}}></input>
              <span >
                <button style={{backgroundColor: "#68EECC"}}>
                  🔍
                </button>
              </span>
            </span>
          </form>
        </div>
        <div style={{marginTop: 30}}>
          <h3 style={{border:'1px solid lightgray', borderRadius: 20, borderStyle: "groove",
              marginLeft: "auto", marginRight: "auto", width: "10em"}}>
            Fitbud Results :)
          </h3>
        </div>
        <div style={{textAlign: "left", marginLeft: 40, border: '1px solid lightgray',
          borderRadius: 20, paddingLeft: 20, marginRight: 40, marginBottom: 10}}>
                <h4>
                  Gym [or Park] Location 1
                </h4>
                <h6>
                  Address
                </h6>
        </div>
        <div style={{textAlign: "left", marginLeft: 40, border: '1px solid lightgray',
          borderRadius: 20, paddingLeft: 20, marginRight: 40, marginBottom: 10}}>
                <h4>
                  Gym [or Park] Location 2
                </h4>
                <h6>
                  Address
                </h6>
        </div>
    </div>
  );
}

export default PlacesPage;