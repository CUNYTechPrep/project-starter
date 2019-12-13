import React from 'react';


function TableDark() {
    return (
           <div>
                <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                    <div className="col-12 mb-4">
                        <h3 className="text-white text-center mb-3">Recent Payments and Orders</h3>
                    </div>

                    <form id="Ingredients">     {/* <------  This id is very VERY IMPORTANT!!!!!! */}
                        
                        <table className="table table-dark table-hover table-center text-center">
                            <thead>

                                <tr className="text-muted">
                                    <th>#</th>
                                    <th>Ingredients</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>

                            </thead>
                            
                            <tbody>
                                
                                <tr>
                                    <th>1</th>
                                    <td>Carrots</td>
                                    <td>$5.99</td>
                                    <td>10/23/2019</td>
                                    <td><span className="badge badge-success w-75">Good</span></td>
                                </tr>
                                
                                <tr>
                                    <th>2</th>
                                    <td>Olives</td>
                                    <td>$7.99</td>
                                    <td>12/17/2019</td>
                                    <td><span className="badge badge-success w-75">Good</span></td>
                                </tr>

                                <tr>
                                    <th>3</th>
                                    <td>Salmon</td>
                                    <td>$9.99</td>
                                    <td>12/07/2019</td>
                                    <td><span className="badge badge-danger w-75">Expired</span></td>
                                </tr>

                                <tr>
                                    <th>4</th>
                                    <td>Eggs</td>
                                    <td>$3.50</td>
                                    <td>10/05/2019</td>
                                    <td><span className="badge badge-success w-75">Good</span></td>
                                </tr>

                                <tr>
                                    <th>5</th>
                                    <td>Milk</td>
                                    <td>$3.75</td>
                                    <td>12/05/2019</td>
                                    <td><span className="badge badge-warning w-75">close</span></td>
                                </tr>

                                <tr>
                                    <th>6</th>
                                    <td>Mozarella Cheese</td>
                                    <td>$14.99</td>
                                    <td>11/05/2019</td>
                                    <td><span className="badge badge-warning w-75">close</span></td>
                                </tr>

                                <tr>
                                    <th>7</th>
                                    <td>Olive Oil</td>
                                    <td>$35</td>
                                    <td>12/05/2019</td>
                                    <td><span className="badge badge-success w-75">Good</span></td>
                                </tr>

                                <tr>
                                    <th>8</th>
                                    <td>Cereal</td>
                                    <td>$12</td>
                                    <td>12/09/2019</td>
                                    <td><span className="badge badge-success w-75">Good</span></td>
                                </tr>

                            </tbody>
                        </table>

                    </form>
                </div>
           </div>
      );
}

export default TableDark;