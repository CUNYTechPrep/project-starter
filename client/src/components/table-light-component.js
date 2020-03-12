import React from 'react';


function TableLight() {
    return (
            <div>
                {/* start of Tables */}
                <section>
                    <div className="container-fluid">       {/* Container Grid */}
                        <div className="row mb-5">          {/* Row */}
                            <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">       {/* Column */}
                                <div className="row">       {/* Inner Grid */}
                                    <div className="col-12 mb-4">
                                        <h3 className="text-white text-center mb-3">Groceries List</h3>
                                    </div>
                                    <table className="table table-striped bg-light text-center">
                                        <thead>
                                            <tr className="text-muted">
                                                <th>#</th> {/** 03/06/20: Unsure why this is here, same as dark table. */}
                                                <th>Ingredient</th> {/** 03/06/20: Could be renamed to item */}
                                                <th>Price</th> {/** 03/06/20: Unsure if the logic for having this here is sound. */}
                                                <th>Date</th> {/** 03/06/20: Unsure if this is DATE ADDED or DATE NEEDED BY */}
                                                <th>Re-Stock</th> {/** Unsure */}
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th>1</th>
                                                <td>Apple</td>
                                                <td>$4.59</td>
                                                <td>09/03/2019</td>
                                                <td><button type="button" className="btn btn-info btn-sm">Message</button></td>
                                            </tr>
                                            <tr>
                                                <th>2</th>
                                                <td>Garlic</td>
                                                <td>$14.99</td>
                                                <td>25/05/2019</td>
                                                <td><button type="button" className="btn btn-info btn-sm">Message</button></td>
                                            </tr>
                                            <tr>
                                                <th>3</th>
                                                <td>Onions</td>
                                                <td>$12.99</td>
                                                <td>25/05/2019</td>
                                                <td><button type="button" className="btn btn-info btn-sm">Message</button></td>
                                            </tr>
                                            <tr>
                                                <th>4</th>
                                                <td>Cocoa Beans</td>
                                                <td>$120</td>
                                                <td>05/05/2019</td>
                                                <td><button type="button" className="btn btn-info btn-sm">Message</button></td>
                                            </tr>
                                            <tr>
                                                <th>5</th>
                                                <td>Oatmeal</td>
                                                <td>8.99</td>
                                                <td>02/06/2019</td>
                                                <td><button type="button" className="btn btn-info btn-sm">Message</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            {/* start of Pagination: 
                            <nav>
                                <ul className="pagination justify-content-center">
                                    <li className="page-item">
                                    <a href="#" className="page-link py-2 px-3">
                                        <span>«</span>
                                    </a>
                                    </li>
                                    <li className="page-item active">
                                    <a href="#" className="page-link py-2 px-3">
                                        1
                                    </a>
                                    </li>
                                    <li className="page-item">
                                    <a href="#" className="page-link py-2 px-3">
                                        2
                                    </a>
                                    </li>
                                    <li className="page-item">
                                    <a href="#" className="page-link py-2 px-3">
                                        3
                                    </a>
                                    </li>
                                    <li className="page-item">
                                    <a href="#" className="page-link py-2 px-3">
                                        <span>»</span>
                                    </a>
                                    </li>
                                </ul>
                            </nav>
                             end of Pagination: */}
                        </div>
                    </div>
                </div>
            </section>
            {/* End of Tables */}
        </div>
      );
}

export default TableLight;