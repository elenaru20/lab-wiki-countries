import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { Route, Switch } from "react-router-dom";


class App extends React.Component {



  render() {  
  
    return (
      <div className="App">
        <Navbar />

        <Switch>

        </Switch>

      </div>
    );
  }
}

export default App;
