import React from 'react';
import { Link } from 'react-router-dom';




function Transaction({ transactionID, sellerID, buyerID, productID, price, amount, createdAt }) {

    console.log("\n Transaction.js \n");
    let sellerName = "aaaa";
    let buyerName = "";

    const request = async () => {
        const response = await  fetch("/api/users/"+sellerID)
        const json = await response.json();
        console.log("json is "+ json[0].username + "  selletId is "+ sellerID);
        
        sellerName = json[0].username;
        
    console.log("sellerName IN REQUEST is "+ sellerName);
    }
    console.log("sellerName is "+ sellerName);
    request();
    
    console.log("sellerName AFTER REEQUEST() is "+ sellerName);
   

  return (
        <div className="col-12" style={{textAlign:"left"}}>
           
            <div>
                <ul>
                    <li>
                        <h5><strong>Transaction No. is: {transactionID}</strong></h5>
                    </li>
                    <li>
                        The sellerID is: {sellerID} 
                    </li>
                    <li>
                        The buyerID is: {buyerID}
                    </li>
                    <li>
                        The productID is: {productID}
                    </li>
                    <li>
                        The price was: {price} per item
                    </li>
                    <li>
                        Amount purchased was: {amount}
                    </li>
                    <li>
                        Occured at: {createdAt}
                    </li>
                </ul>
            </div>

        </div>
      
    
  );
}

export default Transaction;