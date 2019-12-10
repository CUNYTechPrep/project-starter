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
                                        <h3 className="text-white text-center mb-3">Staff Salary</h3>
                                    </div>
                                    <table className="table table-striped bg-light text-center">
                                        <thead>
                                            <tr className="text-muted">
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Salary</th>
                                                <th>Date</th>
                                                <th>Contact</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th>1</th>
                                                <td>Johnathan</td>
                                                <td>$2,000</td>
                                                <td>25/05/1889</td>
                                                <td><button type="button" className="btn btn-info btn-sm">Message</button></td>
                                            </tr>
                                            <tr>
                                                <th>2</th>
                                                <td>Joseph</td>
                                                <td>$3,500</td>
                                                <td>25/05/1920</td>
                                                <td><button type="button" className="btn btn-info btn-sm">Message</button></td>
                                            </tr>
                                            <tr>
                                                <th>3</th>
                                                <td>Jotaro</td>
                                                <td>$7,500</td>
                                                <td>25/05/1970</td>
                                                <td><button type="button" className="btn btn-info btn-sm">Message</button></td>
                                            </tr>
                                            <tr>
                                                <th>4</th>
                                                <td>Dio</td>
                                                <td>$75,000,000</td>
                                                <td>ZA WARDO!!!!</td>
                                                <td><button type="button" className="btn btn-info btn-sm">Message</button></td>
                                            </tr>
                                            <tr>
                                                <th>5</th>
                                                <td>Lisa</td>
                                                <td>$6,500</td>
                                                <td>25/05/1900</td>
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