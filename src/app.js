import React, { Component } from 'react';
import logo from './assets/images/logo.png'
import Main from './containers/Main'
import store from './configureStore'
import { Provider } from 'react-redux'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
            return (
                <Provider store={store}>
                    <div className="App">
                        <Main/>
                    </div>
                </Provider>
            );
    }
}

export default App;
