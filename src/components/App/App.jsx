import React from "react";
import Header from "../Header/Header";
import './App.css';

class App extends React.Component {
    
    state = {
        headerText: 'Name It!',
    };

    render () {
        return (
            <Header headTitle={this.state.headerText}/>
        )
    }
}

export default App;
