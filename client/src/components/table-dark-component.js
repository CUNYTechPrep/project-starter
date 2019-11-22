import React from 'react';
import Card from 'react-bootstrap/Card';


function TableDark() {
    return (
           <div>
                <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                    <div className="col-12 mb-4">
                        <h3 className="text-muted text-center mb-3">Recent Payments and Orders</h3>
                    </div>
                    <table className="table table-dark table-hover table-center">
                        <thead>
                            <tr className="text-muted">
                                <th>#</th>
                                <th>Name</th>
                                <th>Pricey</th>
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
                            <tr>
                                <th>3</th>
                                <td>Star Platinum</td>
                                <td>$7,500</td>
                                <td>25/05/1970</td>
                                <td><span className="badge badge-warning w-75">Pending</span></td>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>Za Wardo</td>
                                <td>$125,750,000,000</td>
                                <td>????</td>
                                <td><span className="badge badge-success w-75">Approved</span></td>
                            </tr>
                            <tr>
                                <th>5</th>
                                <td>Hamon Scarf</td>
                                <td>$6,500</td>
                                <td>25/05/1900</td>
                                <td><span className="badge badge-danger w-75">Rejected</span></td>
                            </tr>
                            <tr>
                                <th>5</th>
                                <td>Speed Wagon Insurance </td>
                                <td>$365,000</td>
                                <td>25/05/2019</td>
                                <td><span className="badge badge-warning w-75">Pending</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
           </div>
      );
}

export default TableDark;