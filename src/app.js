import React, {Component} from 'react'
import {Provider} from 'react-redux'
import store from './configureStore'
import {Route, Switch} from 'react-router-dom'
import Main from './containers/Main'
import About from './containers/About'
import NotFound from './containers/NotFound'

export default class App extends Component{
    render(){
        return (
            <Provider className="appProvider" store={store}>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route exact path='/about' component={About}/>
                    <Route component={NotFound}/>
                </Switch>
            </Provider>
        );
    }
}
