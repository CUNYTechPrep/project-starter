import React from 'react';
import monica from '../images/monica.jpg';
import rachel from '../images/rachel.jpg';
import ross from '../images/ross.jpg';
import phoebe from '../images/phoebe.png';
import joey from '../images/joey.png';
import chandler from '../images/chandler.jpg';
import janice from '../images/janice.png';
import gunther from '../images/gunther.jpg';
import marcel from '../images/marcel.jpg';

function MatchesPage(props) {
    return (
        <div className="MatchesPage">

            <h1 className="Logo">Hobbies Hub</h1>
            <br />
            <h2 className="Headers">Matches</h2>
            <br />

            <div className="row">

                <div className="col-md-3">
                    <div class="card">
                        <img class="card-img-top" src={monica} alt="Matches" />
                        <div class="card-body">
                            <h5 class="card-title">Monica</h5>
                            <button type="button" class="btn btn-primary">Message</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div class="card">
                        <img class="card-img-top" src={rachel} alt="Matches" />
                        <div class="card-body">
                            <h5 class="card-title">Rachel</h5>
                            <button type="button" class="btn btn-primary">Message</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div class="card">
                        <img class="card-img-top" src={ross} alt="Matches" />
                        <div class="card-body">
                            <h5 class="card-title">Ross</h5>
                            <button type="button" class="btn btn-primary">Message</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row">

                <div className="col-md-3">
                    <div class="card">
                        <img class="card-img-top" src={joey} alt="Matches" />
                        <div class="card-body">
                            <h5 class="card-title">Joey</h5>
                            <button type="button" class="btn btn-primary">Message</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div class="card">
                        <img class="card-img-top" src={phoebe} alt="Matches" />
                        <div class="card-body">
                            <h5 class="card-title">Phoebe</h5>
                            <button type="button" class="btn btn-primary">Message</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div class="card">
                        <img class="card-img-top" src={chandler} alt="Matches" />
                        <div class="card-body">
                            <h5 class="card-title">Chandler</h5>
                            <button type="button" class="btn btn-primary">Message</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row">

                <div className="col-md-3">
                    <div class="card">
                        <img class="card-img-top" src={janice} alt="Matches" />
                        <div class="card-body">
                            <h5 class="card-title">Janice</h5>
                            <button type="button" class="btn btn-primary">Message</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div class="card">
                        <img class="card-img-top" src={gunther} alt="Matches" />
                        <div class="card-body">
                            <h5 class="card-title">Gunther</h5>
                            <button type="button" class="btn btn-primary">Message</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div class="card">
                        <img class="card-img-top" src={marcel} alt="Matches" />
                        <div class="card-body">
                            <h5 class="card-title">Marcel</h5>
                            <button type="button" class="btn btn-primary">Message</button>
                        </div>
                    </div>
                </div>

            </div>


        </div>
        


    );
}

export default MatchesPage;