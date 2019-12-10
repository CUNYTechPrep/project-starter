import React from 'react';


function TableDark() {
    return (
           <div>
                <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                    <div className="col-12 mb-4">
                        <h3 className="text-muted text-center mb-3">Recent Payments and Orders</h3>
                    </div>

                    <form id="Ingredients">     {/* <------  This id is very VERY IMPORTANT!!!!!! */}
                        
                        <table className="table table-dark table-hover table-center text-center">
                            <thead>

                                <tr className="text-muted">
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>

                            </thead>
                            
                            <tbody>
                                
                                <tr>
                                    <th>1</th>
                                    <td>Red Stone of Ajiea</td>
                                    <td>$2,000,000</td>
                                    <td>25/05/1889</td>
                                    <td><span className="badge badge-success w-75">Approved</span></td>
                                </tr>
                                
                                <tr>
                                    <th>2</th>
                                    <td>Magian's Red</td>
                                    <td>$3,500</td>
                                    <td>25/05/1920</td>
                                    <td><span className="badge badge-success w-75">Approved</span></td>
                                </tr>

                            </tbody>
                        </table>

                    </form>
                </div>
           </div>
      );
}

export default TableDark;