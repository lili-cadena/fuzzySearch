import React from 'react';
import {Route, Switch} from 'react-router-dom';
import FuzzySearch from './components/FuzzySearch';

export const Routes = ()=>{
    return(
        <Switch>
            <Route exact path="/" component={FuzzySearch} />
        </Switch>
    )
};