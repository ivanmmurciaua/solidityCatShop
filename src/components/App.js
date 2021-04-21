// Importamos React y todo lo necesario de React Router
import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

// Importamos los componentes
import Home from './Home';
import UserCats from './UserCats';

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