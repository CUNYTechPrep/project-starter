import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Recipe from "../components/Recipe";
import App from "../App";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/recipe/:id" component={Recipe} />
        </Switch>
    </BrowserRouter>
);

export default Router;