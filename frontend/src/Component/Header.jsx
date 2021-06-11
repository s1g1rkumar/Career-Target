import React from "react";
import ReactDom from "react-dom";
import { NavLink } from "react-router-dom";
import "../CSS/Header.css";
import { SignIn, SignUp } from "./SignInSignUp";
import logo from "../Images/career-target-logo-f.png";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="logo" height={60} width={120} />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-3  mt-3 ">
              <li className="nav-item">
                <NavLink class="nav-link" to="/login">
                  <div
                    type="button"
                    class="btn btn-outline-dark rounded-pill"
                    id="sign-in"
                    value="signin"
                  >
                    Sign In
                  </div>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/Profile">
                  <div type="button" class="btn" id="profile" value="profile">
                    Profile
                  </div>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/quiz">
                  <div type="button" class="btn" id="quiz" value="quiz">
                    Quiz
                  </div>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/compiler">
                  <div type="button" class="btn" id="compiler" value="compiler">
                    Compiler
                  </div>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/logout">
                  <div
                    type="button"
                    class="btn btn-outline-dark rounded-pill"
                    id="Log-out"
                    value="logout"
                  >
                    Logout
                  </div>
                </NavLink>
              </li>
            </ul>

            {/* <div
              className="modal fade"
              id="signupModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header bg-light">
                    <div>
                      <img src={logo} alt="logo" height="100px" width="400px" />
                    </div>
          

                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                   
                    <SignUp />
                  </div>
                  <div className="modal-footer bg-light">
                   
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
