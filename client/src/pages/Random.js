import React from 'react';
import '../style/main.css'

class Random extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomRestaurant: null,
            isFetchedRandom: false
        }
        this.buttonPressedHandler = this.buttonPressedHandler.bind(this);
    }
    buttonPressedHandler(event) {
        fetch('/api/places/random?lat=40.7666332999999952&lng=-73.99474479999999&keyword=restaurants')
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    randomRestaurant: res,
                    isFetchedRandom: true
                });
                console.log(this.state.randomRestaurant);
            })
    }
    render() {
        return (
            <div>
                <div>
                    <text>What's Your Next Adventure</text>
                </div>
                <button onClick={this.buttonPressedHandler}>Let's GO!! </button>
                {this.state.isFetchedRandom ?
                    <div>
                        <div>
                            {this.state.randomRestaurant.name}
                        </div>
                        <div>
                            {this.state.randomRestaurant.rating}
                        </div>
                        <div>
                            {this.state.randomRestaurant.vicinity}
                        </div>
                        <img className="RI" src={`https://maps.googleapis.com/maps/api/place/photo?key=&photoreference=${this.state.randomRestaurant.photos[0].photo_reference}&maxheight=${this.state.randomRestaurant.photos[0].height}`} />
                    </div>
                    : null}
            </div>
        );
    }
}
export default Random;