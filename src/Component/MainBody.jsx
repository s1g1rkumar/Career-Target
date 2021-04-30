import {React,useState} from 'react';
import state from 'react-dom';
import {Link,BrowserRouter as Router} from 'react-router-dom';
import '../CSS/MainBody.css';
import careerProgress from '../Images/careerProgress.svg';
import Devtypes from '../Component/DevelopmentTypes';



function MainBody() {
    const User = () => {
        return <Devtypes/>
      }
      
    return (
       <>
       <div className="container-fluid body bg-light">
            <div className="container ">
                <div className="row pt-5 pb-5">
                    <div className="col-sm-12 col-md-5 ">
                        <h1 className='h-text'>What you focus on ,<br/>you Become</h1>
                        <br/><br/>
                        <p className='h-desc'>It refers to a set of programmes designed to match an individual's needs, abilities and goals with current or future opportunities in the organisation.  It is the process through which the action plans are implemented.</p>
                        <br/><br/>
                        {/* <button className='h-btn text-center'>Let's Start</button> */}
                        <div className=''>
                            <Router>
                            <Link to='/devtypes'>
                        <button type="button md-mr-5" className="btn btn-danger  h-btn" id='h-start' onClick=''>Let's Start</button>

                        </Link>
                        </Router>
                        </div>                      
                    </div>
                    <div className="col-sm-12 col-md-7 pt-5">
                        <img src={careerProgress} alt="careerProgress" className='cp-img'/>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}

export default MainBody