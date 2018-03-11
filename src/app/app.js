import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class App extends Component{
    render(){
        return (
            <div>{this.props.message}</div>
    );
    }
}

ReactDOM.render(<App message="Hooray, I exist!"/>, document.querySelector( '.js-app' ))