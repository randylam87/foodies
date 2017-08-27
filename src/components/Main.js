import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import SearchMap from './children/SearchMap';
import Store from './Store';
import SellerAdmin from './SellerAdmin'
import CustomerAdmin from './Customer/CustomerAdmin';

export default class Main extends Component {
    render() {
        return (
            <Router>
                <div className='main'>
                    <Nav />
                    <div className='container-fluid'>
                        <Switch>
                            <Route exact path='/' component={ Home } />
                            <Route path='/search-map' component={SearchMap} />
                            <Route path='/store' component={Store} />
                            <Route path='/selleradmin' component={SellerAdmin} />
                            <Route path='/customeradmin' component={CustomerAdmin} />
                            <Route render={ () => {return <p> Page Not Found</p>}} /> {/* To be replaced with a 404 error page */}
                        </ Switch>
                    </div>
                </div>
            </Router>
        )
    }
}