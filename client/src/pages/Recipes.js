import React from 'react';
import { Link } from "react-router-dom";
import Recipe from "../components/Recipe";
import Form from "../components/Form";
import Router from "../components/Router";


function Content (props) {
    if (this.props.data) {
        props.recipes.map((recipe) => {
            return (
                <div key={recipe.recipe.label} className="col-md-4" style={{ marginBottom:"2rem" }}>
                    <div className="recipes__box">
                        <img className="recipe__box-img" src={recipe.recipe.image} alt={recipe.recipe.label}/>
                        <div className="recipe__text">
                            <h5 className="recipes__title">
                            { recipe.recipe.label.length < 20 ? `${recipe.recipe.label}` : `${recipe.recipe.label.substring(0, 25)}...` }
                            </h5>
                            <p className="recipes__subtitle">Source: <span>
                                {recipe.recipe.source}
                            </span></p>
                        </div>
                        <button className="recipe_buttons">
                            <Link to={{ pathname: `/recipe/${recipe.recipe.label}`, state: { recipe: recipe.recipe.label } }}>View Recipe</Link>
                        </button>
                    </div>
                </div>
            ); 
        })
    }
}



const Recipes = props => (
    <div className="container">
        <div className="row">
            <Content/>
        </div>
    </div>
);

export default Recipes;
