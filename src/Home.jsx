import './Home.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import tensionSvg1 from './student svgs/1 SCENE.svg';
import tensionSvg2 from './student svgs/2 SCENE.svg';
import tensionSvg3 from './student svgs/3 SCENE.svg';
import tensionSvg4 from './student svgs/4 SCENE.svg';
import tensionSvg5 from './student svgs/5 SCENE.svg';
import tensionSvg6 from './student svgs/6 SCENE.svg';
import tensionSvg7 from './student svgs/7 SCENE.svg';
import tensionSvg8 from './student svgs/8 SCENE.svg';
import tensionSvg9 from './student svgs/9 SCENE.svg';
import tensionSvg10 from './student svgs/10 SCENE.svg';


// js variables .................


//  end js variables .................



//   code here this is main page






function Home() {
  return (
    <div className="mybody" >
      {/* fixed part of project like header scroll btn and social meadia parts not disign (bad me design krege) */}
      <section className="fixed-part">
        <div className="fixed-part-header">
          {/* LOGO of project */}
          <img src="#logo" alt="LOGO" />
          {/* nav part of project */}
          <nav>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#contact">CONTACT</a></li>
            <li><a href="#sign-up" id="sign-up-id">SIGN UP</a></li>
            <li><a href="#login" id='login-id'>LOGIN</a></li>
          </nav>
        </div>
        {/* scroll button part here */}
        <div className="fixed-part-scroll-btns">
          <div className="fixed-part-scroll btn1" src="#home">
            {/*  scroll btn circle 1 */}
          </div>
          
          
          <div className="fixed-part-scroll btn2">
            {/*  scroll btn circle 2 */}
          </div>
          <div className="fixed-part-scroll btn3">
            {/*  scroll btn circle 3 */}
          </div>
          <div className="fixed-part-scroll btn4">
            {/*  scroll btn circle 4 */}
          </div>
        </div>
      </section>
      {/* fixed part of project end .   ..........................................................*/}





      {/* home page(first page code here . ............................................................. */}


      <section className="home-page">
        <div className="home-page-part">
          <div className="home-page-part-circle-div">
            <div className="home-page-part-circle circles1">

            </div>
            <div className="home-page-part-circle circles2">


            </div>

            <div className="home-page-part-circle circles3">


            </div>
            <div className="home-page-part-circle circles4">


            </div>
            <div className="home-page-part-circle circles5">



            </div>
            <div className="home-page-part-circle circles6">

            </div>
          </div>

          <div className="home-page-part-missile">
            <div className="home-page-part-missile-div missile1">

            </div>
            <div className="home-page-part-missile-div missile2">

            </div>
            <div className="home-page-part-missile-div missile3">

            </div>
            <div className="home-page-part-missile-div missile4">

            </div>

            <div className="home-page-part-missile-div missile5">

            </div>
            <div className="home-page-part-missile-div missile6">

            </div>
          </div>
        </div>
        <div className="first-heading-btn">
          <h1>This is test heading</h1>

          {/* <a href="#start-page">START HERE</a> */}
          <button className="bubbly-button">START HERE</button>
          <button className="bubbly-button" id="login-btn-heading">LOGIN</button>
        </div>


      </section>

      {/* about section edit here */}

 <section className="about">
        <div className="about-page-circle">
          <div className="about-circle about-circle1">
             
          </div>
          <div className="about-circle about-circle2">
             
          </div>
          <div className="about-circle about-circle3">
             
          </div>
          <div className="about-circle about-circle4">
             
          </div>
          <div className="about-circle about-circle5">
             
          </div>
          <div className="about-circle about-circle6">
             
          </div>
          <div className="about-circle about-circle7">
             
          </div>
          <div className="about-circle about-circle8">
             
          </div>
          <div className="about-circle about-circle9">
             
          </div>
          <div className="about-circle about-circle10">
             
          </div>

        </div>
        <div className="about-page-contant">
          <h1>Used heading</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, unde expedita. Quae magni temporibus eligendi sed adipisci quia magnam aut!</p>
          <div className="image">
          <img src={tensionSvg3} alt=""/>
          </div>
        </div>
      </section> 

    </div>
  );
}




// end code of main page.........

export default Home;

