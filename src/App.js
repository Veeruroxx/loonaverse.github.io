import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Home from './components/Home/Home';

library.add(fab);

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </div>
    );
}

export default App;
