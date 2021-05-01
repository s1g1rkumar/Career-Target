import React from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Home from'./Component/Home';
import Devtypes from './Component/DevelopmentTypes';
import About from'./Component/About';
import Services from './Component/Services';
import Contact from './Component/Contact';
import Header from './Component/Header';
import Footer from './Component/Footer';


function App() {
  return (
    
    <div className="app">
    <Header/>
      <BrowserRouter>
      <div>
        <Switch>
	<Route exact path="/">
            <Home/>
          </Route>
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
	  <Redirect to='/'/>
        </Switch>
      </div>
    </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
