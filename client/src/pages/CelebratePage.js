import React, { 
    Component, 
} from 'react';

import { Redirect } from 'react-router-dom';
import SideBar from '../components/sidebar-component';
import TopBar from '../components/topbar-component';
import Loading from '../components/Loading';
import Button from 'react-bootstrap/Button';
import '../css/saved.css';


export default class celebratePage extends Component {
        
    state = {
        Loggedin: true,
        loading: false,  
        goBack: false, 
    }

    render() {
        
        if(this.state.loading) return <Loading />;
        if(this.state.Loggedin === false) return <Redirect to="/login" />  // Safety Pre-Caution against hackers! ;)
        if(this.state.goBack) return <Redirect to="/dashboard" />

        return (
            <div>
             
                <SideBar/>              {/* This is the side bar navbar component */}                     
                <TopBar />              {/* This is the top bar component */}
                
                <div className="col-xl-10 col-lg-9 col-md-8 ml-auto bg-success py-2 mt-5">
                    <h1>Christmas 2019</h1>
                    <h2 className="christmas">Tis the Season to be Jolly</h2>
                    <p>For this is holiday season you can watch specially curated instructional content hand picked by our editors, to create the best holiday feast ever!</p>
                </div>

                <div className="col-xl-10 col-lg-9 col-md-8 ml-auto py-2 mt-5">
                    <h3>The Secret lies in a good breakfeast</h3>
                </div>

                <div className="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark py-2 mt-5 shadow-lg">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/gBJjRYk0yC0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                <div className="col-xl-10 col-lg-9 col-md-8 ml-auto py-2 mt-5">
                    <h3>Preparation is key</h3>
                </div>

                <div className="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark py-2 mt-5 shadow-lg">
                    <div className="embed-responsive embed-responsive-16by9">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/QDCO_J1lOrA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                <div className="col-xl-10 col-lg-9 col-md-8 ml-auto py-2 mt-5">
                    <h3>It's D-Day</h3>
                </div>


                <div className="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark py-2 mt-5 shadow-lg">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe title="Christmas Turkey" min-width="400" width="560" height="315" src="https://www.youtube.com/embed/XO5DF8soxwM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                <div className="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark py-2 mt-5 shadow-lg">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe title="Pumkin Pie" width="560" height="315" src="https://www.youtube.com/embed/JZ5VJNJNfSQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                <div className="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark py-2 mt-5 shadow-lg">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe title="Mashed Potatoes" width="560" height="315" src="https://www.youtube.com/embed/x6O9SwocyKQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>


            </div>
        );
    }
}


