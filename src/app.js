import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class App extends Component{
    render(){
        return (
            <div>Hello</div>
    );
    }
}

ReactDOM.render(<App message="Hooray, I exist!"/>, document.getElementById("main))