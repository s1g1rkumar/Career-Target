import React from 'react';
import '../CSS/Header.css';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <a className="navbar-brand" href="#ct">CAREER TARGET</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-3  mt-3 ">
                            <li className="nav-item">
                            <button type="button" class="btn btn-outline-dark">Sign In</button>
                            </li>
                            <li className="nav-item mx-2">
                            <button type="button" class="btn btn-outline-dark">Sign Up</button>
                            </li>   
                        </ul>
    
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
