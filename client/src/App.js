// React && React-router-dom
import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Home from './components/Home';
import UserCats from './components/UserCats';

function App(){
    return(
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/usercats" component={UserCats}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;