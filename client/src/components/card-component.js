import React from 'react';
import Card from 'react-bootstrap/Card';


function Cards() {
    return (
        <div>
            {/* start of cards */}
            <section>
                <div className="container-fluid">   {/* Container Grid */}
                    <div className="row">           {/* Row 2 */}
                        <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">      {/* [Row 2, Column 1] */}
                            <div className="row pt-md-5 mt-md-3 mb-5">              {/* Inner grid */}
                                <div className="col-xl-3 col-sm-6 p-2">  {/* [Inner grid -- Row 1, Column 1] */}
                                    <div className="card-common">
                                        <div className="card">      {/* Card 1 */}
                                            
                                            {/* Card 1 Body */}
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between"> {/* Ensures that Text are in the same line aligned seperately */}
                                                    <i className="fas fa-shopping-cart fa-3x text-warning" />
                                                    <div className="text-right text-secondary">
                                                        <h5>Sales</h5>
                                                        <h3>$347,850</h3>       {/* This is just a dummy value could be replaced with variables */}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Card 1 Footer */}
                                            <div className="card-footer text-secondary">
                                                <i className="fas fa-sync mr-3" />
                                                <span>Updated Now</span>
                                            </div>

                                        </div>  {/* end of card */}
                                    </div> {/* end of card common */}
                                </div> {/*end of col-sm-6 p-2 */}

                                <div className="col-xl-3 col-sm-6 p-2">      {/* [Inner grid -- Row 1, Column 2] */}
                                    <div className="card-common">
                                        <div className="card">          {/* Card 2 */}   
                                            
                                            {/* Card 2 Body */}
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between"> {/* Ensures that Text are in the same line aligned seperately */}
                                                    <i className="fas fa-money-bill-alt fa-3x text-success" />
                                                    <div className="text-right text-secondary">
                                                        <h5>Expenses</h5>
                                                        <h3>$25,000</h3>       {/* This is just a dummy value could be replaced with variables */}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Card 1 Footer */}
                                            <div className="card-footer text-secondary">
                                                <i className="fas fa-sync mr-3" />
                                                <span>Updated Now</span>
                                            </div>

                                        </div>  {/* end of card */}
                                    </div> {/* end of card common */}
                                </div> {/*end of col-sm-6 p-2 */}

                                <div className="col-xl-3 col-sm-6 p-2">      {/* [Inner grid -- Row 2, Column 1] */}
                                    <div className="card-common">
                                        <div className="card">          {/* Card 3 */}                
                                            
                                            {/* Card 3 Body */}
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between"> {/* Ensures that Text are in the same line aligned seperately */}
                                                    <i className="fas fa-users fa-3x text-info" />
                                                    <div className="text-right text-secondary">
                                                        <h5>Users</h5>
                                                        <h3>45,650</h3>       {/* This is just a dummy value could be replaced with variables */}
                                                    </div>
                                                </div>
                                            </div>
                                                
                                            {/* Card 3 Footer */}
                                            <div className="card-footer text-secondary">
                                                <i className="fas fa-sync mr-3" />
                                                <span>Updated Now</span>
                                            </div>
                                    
                                        </div>  {/* end of card */}
                                    </div> {/* end of card common */}
                                </div> {/*end of col-sm-6 p-2 */}

                                <div className="col-xl-3 col-sm-6 p-2">     {/* [Inner grid -- Row 2, Column 2] */}
                                    <div className="card-common">
                                        <div className="card">          {/* Card 4 */}
                                            {/* Card 4 Body */}
                                            
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between"> {/* Ensures that Text are in the same line aligned seperately */}
                                                    <i className="fas fa-chart-line fa-3x text-danger" />
                                                    <div className="text-right text-secondary">
                                                        <h5>Visitors</h5>
                                                        <h3>135,850</h3>       {/* This is just a dummy value could be replaced with variables */}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Card 4 Footer */}
                                            <div className="card-footer text-secondary">
                                                <i className="fas fa-sync mr-3" />
                                                <span>Updated Now</span>
                                            </div>
                                        </div>  {/* end of card */}

                                    </div> {/* end of card common */}
                                </div> {/*end of col-sm-6 p-2 */}
                                {/* Inner grid */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of cards */}
        </div>
      );
}

export default Cards;