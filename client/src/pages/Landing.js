import React from 'react';
import example from '../img/example.jpg';
import SearchResult from '../components/SearchResult.js';


/**
 * Currently serves as example for SearchResult, feel free to replace
 */

class Landing extends React.Component {
    render() {
        return <div>
            <SearchResult img={example} brand="Unbranded" name="Apple" check={false}/>
            <SearchResult img={example} brand="Unbranded" name="Apple" check={true}/>
        </div>
    }
}

export default Landing;