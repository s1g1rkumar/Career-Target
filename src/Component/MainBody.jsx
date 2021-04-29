import React from 'react';
import '../CSS/MainBody.css';
import careerProgress from '../Images/careerProgress.svg'


function MainBody() {
    return (
       <>
       <div className="container-fluid body">
            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="col-5">
                        <h1 className='h-text'>What you focus on ,<br/>you Become</h1>
                        <br/><br/>
                        <p className='h-desc'>It refers to a set of programmes designed to match an individual's needs, abilities and goals with current or future opportunities in the organisation.  It is the process through which the action plans are implemented.</p>
                        <br/><br/>
                        {/* <button className='h-btn text-center'>Let's Start</button> */}
                        <button type="button" className="btn btn-danger mx-auto" >Let's Start</button>
                    </div>
                    <div className="col-7">
                        <img src={careerProgress} alt="careerProgress" className='cp-img'/>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}

export default MainBody