import React, {Component} from 'react'
import {Provider} from 'react-redux'
import store from './configureStore'
import Main from './containers/Main'

export default class App extends Component{
    render(){
        return (
            <Provider className="appProvider" store={store}>
                <Main/>
            </Provider>
        );
    }
}
