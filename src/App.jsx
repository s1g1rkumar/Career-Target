import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Home from'./Component/Home';
import Devtypes from './Component/DevelopmentTypes';
import About from'./Component/About';
import Services from './Component/Services';
import Contact from './Component/Contact';


function App() {
  return (
    
    <div className="app">
      <div>
      <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/services">
            <Services/>
          </Route>
          <Route exact path="/devtypes">
            <Devtypes/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
      </div>
      <Home/>
    </div>
  );
}

export default App;
