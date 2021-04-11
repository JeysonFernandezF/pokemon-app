
import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';

import HomePage from './pages/homepage/homepage.component';
import Pokedex from './pages/pokedex/pokedex.component';
import Header from './components/header/header.component';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      primerState: "Hola"
    }
  
  }

  render (){
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/pokedex' component={Pokedex}/>
        </Switch>
      </div>
    );
  }
}

export default App;
