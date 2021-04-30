import React from 'react';
import '../CSS/Footer.css';
import {Link,BrowserRouter as Router} from 'react-router-dom'; 
import '../CSS/Footer.css';

function Footer() {
    return (
        <>
            <div className="container-fluid pt-2 pb-2 ml-5 ">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Router>
                                <div className="row">
                                    <div className="col-2"><Link to='/'>Home</Link></div>
                                    <div className="col-2">
                                    <Link to='/services'>Services</Link>
                                    </div>
                                    <div className="col-2">
                                    <Link to='/about'>About Us</Link>
                                    </div>
                                    <div className="col-3"><Link to='/contact'>Contact Us</Link></div>
                                </div>
                            </Router>
                        </div>
                        
                        <div className="col-6">
                            <input type="text" placeholder='Enter Email' className='mail'/>
                            <button className='btn-danger ml-2 subs'>Subscribe</button>
                        </div>
                    </div>
                    
                </div>
               
            </div>
            <div className="container-fluid bg-light">
                <div className="row pt-2">
                        <p className='text-center'>&#169;Career Target 2021</p>
                    </div>
                </div>
        </>
    )
}

export default Footer