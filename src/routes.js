import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingHeader from './components/LandingHeader';
import Shop from './components/Shop';

export default (
    <Switch>
        <Route exact path="/" component={LandingHeader}/>
        <Route path="/shop" component={Shop}/>
    </Switch>
)