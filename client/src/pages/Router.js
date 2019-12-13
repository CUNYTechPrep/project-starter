import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Recipe from "./Recipe";
import Recipe_API from "../RecipeApi";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/recipe" component={Recipe_API} exact />
            <Route path="/recipe/:id" component={Recipe} />
        </Switch>
    </BrowserRouter>
);

export default Router;