import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import {Home, AboutUs, Enquery} from './screen'

const Navigation = () => {

    return (
        <Router>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                
                <Route path="/enquery">
                    <Enquery />
                </Route>
                <Route path="/">
                    <AboutUs />
                </Route>
            </Switch>
        </Router>
    )
}

export default Navigation;


