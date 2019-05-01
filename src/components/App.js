import NavBar from './NavBar';
import React, { Component } from 'react'
import { fetchMovies } from '../actions';

class App extends Component {
    render() {
        return (
            <div>
                < NavBar title="Nested Routes!"/>
                {this.props.children}
            </div>
        )
    }
}


export default App;
