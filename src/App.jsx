import React from 'react';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
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
import Webdev from './Component/Webdev';
import Frontend from './Component/FrontendPanel';


function App() {
  return (
    
    <div className="app">
    <Header/>
      {/* <BrowserRouter> */}
      <div>
        <Switch>
        	<Route exact path="/" component={Home}>
            {/* <Home/> */}
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/contact" component={Contact}>
            {/* <Contact /> */}
          </Route>
          <Route exact path="/services">
            <Services/>
          </Route>
          <Route exact path="/devtypes">
            <Devtypes/>
          </Route>
          <Route exact path="/webdev">
            <Webdev/>
          </Route>
          <Route exact path="/frontend">
            <Frontend/>
          </Route>
	  <Redirect to='/'/>
        </Switch>
      </div>
    {/* </BrowserRouter> */}
      <Footer/>
    </div>
  );
}

export default App;
