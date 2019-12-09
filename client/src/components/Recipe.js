import React from 'react';
import { Link } from 'react-router-dom'; 



const API_KEY = "00d0cd3d6af26d7e2647971839f1d9bd";         // SHOULD BE IN .env FILE!!!!!
const API_ID = "d3e031d2";

class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }
    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const req = await fetch(`http://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${title}`);
    
        const res = await req.json();
        this.setState({ activeRecipe: res.hits[0].recipe });
        console.log(this.state.activeRecipe);
    }
    render() {
        const recipe = this.state.activeRecipe;
        return (
            <div className="container">
                { this.state.activeRecipe.length !== 0 &&
                    <div className="active-recipe">
                        <img className="active-recipe__img" src={recipe.image} alt={recipe.label} />
                        <h3 className="active-recipe__title">{ recipe.label }</h3>
                        <h4 className="active-recipe__publisher">
                        Source: <span>{ recipe.source }</span>
                        </h4>
                        <p className="active-recipe__website">Website: 
                            <span><a href={recipe.url}>{recipe.url}</a></span>
                        </p>
                        <button className="active-recipe__button">
                            <Link to="/">Go Home</Link>
                        </button>
                    </div>

                }
            </div>
        );
    }
};

export default Recipe;