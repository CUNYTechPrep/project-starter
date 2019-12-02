import React from 'react';
import { Link } from 'react-router-dom';




function Product({ productID, productName, desc, price, amount, imageURL, createdAt, sellerID, category }) {
    console.log("\n Product.js \n");
    //  let x = name;
    //  if(name != null && name.length > 30)
    //  x = name.substring(0,30) + "...";
  if(amount <= 0 )
    return(<div></div>);  

  return (
    
      <div className="col-5 col-md-4 col-lg-3" >
        <div className="card mb-4 shadow">
          <div className="card-body card-text" style={{maxHeight:'300px'}}>
            <img src={imageURL} alt="IMAGE!" style={{maxWidth:'40%', height: 'auto'}} />
            <br></br>
            <br></br>
            <Link to={"/products/"+productID} style={{color:'#555555'}}>{ productName }</Link>
              
            
          </div>
          <div className="card-footer small text-muted text-right cus-footer">
            <p>
              Price: ${price}
            </p>
          </div>
          
          
        </div>
      </div>
    
  );
}

export default Product;