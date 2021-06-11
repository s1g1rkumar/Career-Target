import React, { createContext, useReducer } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Home from "./Component/Home";
import Devtypes from "./Component/DevelopmentTypes";
import About from "./Component/About";
import Services from "./Component/Services";
import Contact from "./Component/Contact";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Webdev from "./Component/Webdev";
import Frontend from "./Component/FrontendPanel";
import Dashboard from "./Component/Dashboard";
import { SignIn, SignUp } from "./Component/SignInSignUp";
import { Profile } from "./Component/Profile";
import EditProfile from "./Component/EditProfile";
import Logout from "./Component/Logout";
import Quiz from "./Component/Quiz";
import Compiler from "./Component/Compiler";
import { initialState, reducer } from "../src/Reducer/UseReducer";
export const UserContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="app">
      <UserContext.Provider value={{ state, dispatch }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}>
            {/* <Home/> */}
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact" component={Contact}>
            {/* <Contact /> */}
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/devtypes">
            <Devtypes />
          </Route>
          <Route exact path="/webdev">
            <Webdev />
          </Route>
          <Route exact path="/frontend">
            <Frontend />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/login">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/Profile">
            <Profile />
          </Route>
          <Route exact path="/editProfile">
            <EditProfile />
          </Route>
          <Route exact path="/quiz">
            <Quiz />
          </Route>
          <Route exact path="/compiler">
            <Compiler />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </div>
  );
};

export default App;
