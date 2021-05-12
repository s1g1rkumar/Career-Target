import React from 'react'
import '../CSS/DevelopmentTypes.css';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import webdev from '../Images/web-dev.svg';
import desktop from '../Images/desktop-dev.svg';
import mobile from '../Images/mobile-dev.svg';
import { NavLink } from 'react-router-dom';
function DevelopmentTypes() {
  return (
    <>
      <div className="container-fluid body">
            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="col-sm-12 col-md-5 ">
                        <h1 className='h-text1'>Web Development</h1>
                        <br/><br/>
                        <p className='h-desc1'>Web development is the building and maintenance of websites; it’s the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.</p>
                        <br/><br/>
                        {/* <button className='h-btn text-center'>Let's Start</button> */}
                        <div className=''>
                        <NavLink to='/webdev'>
                        <button type="button md-mr-5" className="btn btn-danger  h-btn1">Let's Start</button>
                        </NavLink>
                        </div>                      
                    </div>
                    <div className="col-sm-12 col-md-7 ">
                        <img src={webdev} alt="careerProgress" className='cp-img1'/>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-light">
            <div className="container">
                <div className="row pt-5 pb-5">
                <div className="col-sm-12 col-md-7 ">
                        <img src={desktop} alt="careerProgress" className='cp-img1'/>
                    </div>
                    <div className="col-sm-12 col-md-5 ">
                        <h1 className='h-text1 '>Desktop Development</h1>
                        <br/><br/>
                        <p className='h-desc1'>Desktop Applications are run stand alone on the user’s laptops and systems. The term used for these applications desktop differ these apps from mobile applications which is in the trend. The key features of desktop applications are the efficiency of the application is high and also these are highly customized as per user’s requirements and flexibility.</p>
                        <br/><br/>
                        {/* <button className='h-btn text-center'>Let's Start</button> */}
                        <div className=''>
                        <button type="button md-mr-5" className="btn btn-danger  h-btn1" >Let's Start</button>
                        </div>                      
                    </div>
                   
                </div>
            </div>
            </div>

            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="col-sm-12 col-md-5 ">
                        <h1 className='h-text1'>Mobile Development</h1>
                        <br/><br/>
                        <p className='h-desc1'>Mobile app development is the creation of software intended to run on mobile devices and optimized to take advantage of those products' unique features and hardware.Like desktop software, mobile apps are designed using a wide range of programming languages and frameworks.</p>
                        <br/><br/>
                        {/* <button className='h-btn text-center'>Let's Start</button> */}
                        <div className=''>
                        <button type="button md-mr-5" className="btn btn-danger  h-btn1" >Let's Start</button>
                        </div>                      
                    </div>
                    <div className="col-sm-12 col-md-7 ">
                        <img src={mobile} alt="careerProgress" className='cp-img1'/>
                    </div>
                </div>
            </div>

        </div>

    </>
  )
}

export default DevelopmentTypes
