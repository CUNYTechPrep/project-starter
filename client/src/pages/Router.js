import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Recipe from "./Recipe";
import App from "../App";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/recipe" component={App} exact />
            <Route path="/recipe/:id" component={Recipe} />
        </Switch>
    </BrowserRouter>
);

export default Router;