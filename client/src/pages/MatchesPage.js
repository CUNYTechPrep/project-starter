import React from 'react';
import UserPic from '../images/blankProfilePic.png';

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
                        <img class="card-img-top" src={UserPic} alt="Matches" />
                        <div class="card-body">
                            <h5 class="card-title">Match #1</h5>
                            <button type="button" class="btn btn-primary">Message</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div class="card">
                        <img class="card-img-top" src={UserPic} alt="Matches" />
                        <div class="card-body">
                            <h5 class="card-title">Match #2</h5>
                            <button type="button" class="btn btn-primary">Message</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div class="card">
                        <img class="card-img-top" src={UserPic} alt="Matches" />
                        <div class="card-body">
                            <h5 class="card-title">Match #3</h5>
                            <button type="button" class="btn btn-primary">Message</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row">

                <div className="col-md-3">
                    <div class="card">
                        <img class="card-img-top" src={UserPic} alt="Matches" />
                        <div class="card-body">
                            <h5 class="card-title">Match #4</h5>
                            <button type="button" class="btn btn-primary">Message</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div class="card">
                        <img class="card-img-top" src={UserPic} alt="Matches" />
                        <div class="card-body">
                            <h5 class="card-title">Match #5</h5>
                            <button type="button" class="btn btn-primary">Message</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div class="card">
                        <img class="card-img-top" src={UserPic} alt="Matches" />
                        <div class="card-body">
                            <h5 class="card-title">Match #6</h5>
                            <button type="button" class="btn btn-primary">Message</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row">

                <div className="col-md-3">
                    <div class="card">
                        <img class="card-img-top" src={UserPic} alt="Matches" />
                        <div class="card-body">
                            <h5 class="card-title">Match #7</h5>
                            <button type="button" class="btn btn-primary">Message</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div class="card">
                        <img class="card-img-top" src={UserPic} alt="Matches" />
                        <div class="card-body">
                            <h5 class="card-title">Match #8</h5>
                            <button type="button" class="btn btn-primary">Message</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div class="card">
                        <img class="card-img-top" src={UserPic} alt="Matches" />
                        <div class="card-body">
                            <h5 class="card-title">Match #9</h5>
                            <button type="button" class="btn btn-primary">Message</button>
                        </div>
                    </div>
                </div>

            </div>


        </div>
        


    );
}

export default MatchesPage;