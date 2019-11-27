import React from 'react';
import {Jumbotron, Button } from 'reactstrap';
import allergy from '../img/allergy.jpg';
import './About.css';

/**
 * Currently serves as check for scroll
 */

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-sm-6"></div>
              <div className="col-sm-6 layout">
                <div className="transbox">
                  <h1>FoodCheck</h1>
                  <h4><span>Here to serve the Food Allergy Community!</span></h4>
                </div>
                <br />
                <a href="/sign-up" className="btn btn-success">SignUp</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h3>OUR FOCUS IS ON INDIVIDUAL HEALTH</h3>
          <div className="info">
            <p> Food allergens are a growing public health concern. Over 9 million adults and nearly 6
                million children have food allergies. These individuals face challenges every day in
                figuring out whether certain food products are safe for them to consume. The ingredients in
                the food products have vague descriptions and do not list all types of allergens.
                The CDC reported that food allergies result in more than 300,000 ambulatory-care visits a
                year among children under the age of 18. Even small amounts of food allergens present can cause
                serious reactions.
            </p>
            <p> Our mission is to serve the food allergen community by providing them an easy way to check for products
                that may trigger their symptoms and help them keep a personal food diary to keep track of their daily diet.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
