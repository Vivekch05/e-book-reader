import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import BookLibrary from './BookLibrary';
import BookCollections from './BookCollections';
import Setting from './Setting';
import Home from './Home';
import CreateBook from './CreateBook';
import AboutUs from './AboutUs';
export default class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/AboutUs" component={AboutUs} />
                <Route path="/BookLibrary" component={BookLibrary} />
                <Route path="/BookCollections" component={BookCollections} />
                <Route path="/CreateBook" component={CreateBook} />
                <Route path="/Setting" component={Setting} />
            </Switch>
        )
    }
}
