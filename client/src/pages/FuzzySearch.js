import React from 'react';
import { FaCheck } from "react-icons/fa";


class FuzzySearch extends React.Component {
    render() {
        return (
          <div>
          {/* Searchbar
            <div class="container row">
              <div class="col=md-4 col-lg-6 offset-md-4 mt-5 ml-4 border border-success pt-3">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Search ......" aria-label="Recipient's username"></input>
                  <div class="input-group-append">
                    <span class="input-group-text">Check <FaCheck/> </span>
                  </div>
                </div>
              </div>
            </div>*/}

            <div class="row justify-content-left ml-4">
              <div class="col-sm-6 col-md-6 col-lg-5 offset-md-4 ml-0 mt-5 border border-success pt-3 search">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Nutter Butter" aria-label="Recipient's username"></input>
                </div>
              </div>
            </div>
          {/* card to print */}

          </div>
        );
    }
}

export default FuzzySearch;
