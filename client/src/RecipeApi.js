import React, { Component } from 'react';
import Form from "./pages/Form";
import Recipes from "./pages/Recipes";
const API_KEY = "00d0cd3d6af26d7e2647971839f1d9bd"; // good fucking god why
const API_ID = "d3e031d2"; // yooooooo

class RecipeApi extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`http://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${recipeName}`);
    
    const data = await api_call.json();
    this.setState({ recipes: data.hits });
    console.log(this.state.recipes);
  }
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }
  render() {
    return (
      <div className="App">
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}
export default RecipeApi;