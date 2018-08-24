import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todo from './todo';

export default class App extends Component {
    render() {
        return (
            <Todo/>
        );
    };
}

ReactDOM.render(<App />, document.querySelector(".container-fluid"));

