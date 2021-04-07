import './Home.css';
import About from './About'
import React, { Component } from 'react';
import SignUp from './SignUp';
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


      {/* ho ja rha h bhai lllllll ha hahahahhaahhahahaha aahahah */}
      {/* <h1>thisifoishghlghldghlh</h1> */}
      {/* fixed part of project like header scroll btn and social meadia parts not disign (bad me design krege) */}
      <section className="fixed-part">
        <div className="fixed-part-header">
          {/* LOGO of project */}
          <img src="#logo" alt="LOGO" />
          {/* nav part of project */}
          <nav>
            <li><a href="#home">HOME</a></li>
            <li><a href="#About">ABOUT</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#contact">CONTACT</a></li>
            <li><a href={SignUp} id="sign-up-id">SIGN UP</a></li>
            <li><a href="#login" id='login-id'>LOGIN</a></li>
          </nav>
        </div>
          <h1>this is heading1</h1>
        <div>

        {/* scroll button part here */}
        <div className="fixed-part-scroll-btns">
          <div className="fixed-part-scroll btn1" src={Home}>
            {/*  scroll btn circle 1 */}
          </div>


          <div className="fixed-part-scroll btn2" to={About}>
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
            <img src={tensionSvg3} alt="" />
          </div>
        </div>
      </section>

      {/* end about section  */}



      {/* start services page design  */}
      <section className="services">

        <div className="services-container">
          <h1>services </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui beatae corporis autem quis animi, libero atque ullam praesentium rerum dolorum incidunt adipisci impedit aliquid ipsum.</p>

          <button className="bubbly-button">START HERE</button>
        </div>
        <div className="image">
          <img src={tensionSvg6} alt="" />
        </div>
      </section>





      {/* end of services page */}

      {/* contact section start here.................... */}
      <section className="contact">
        <div className="contact-page">
          <div className="logo-box">
            <div className="logo-box-part">
              <img src="#logo" alt="logo not found" />

            </div>
            <div className="logo-box-para">
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, illo! Ex illum ducimus asperiores! Nisi expedita nam debitis nostrum distinctio.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, omnis.</p>
            </div>

          </div>
          <div className="from-box">
            <h1>CONTACT FOR SUPPORT</h1>
            <form action="#">
              <div className="name-box">
              <label htmlFor="name">name</label>
              <input type="text" name="name" id="name" />
           
              </div>
              <div className="email-box">
              <label htmlFor="email">email</label>
              <input type="email" name="email" id="email" />
            
              </div>
               <button name="submit" value="submit">submit</button>
            </form>
          </div>
          <div className="subscribe-box">
            <h1>FOR MORE UPDATE</h1>
            <form action="#">
              <div className="email-subscribe-part">
              <label htmlFor="subscribe">subscribe</label>
              <input type="email" name="subscribe-emial" />
              </div>
              <button>SUBSCRIBE</button>
            </form>
            <div className="direct-contact">
              <div className="email-contact">
                <a href="mailto:careertarget@careertarget.com">
                  <i class="fas fa-envelope-open-text"></i> careertarget@careertarget.com
     </a>
              </div>

              <div className="phone-contact">
                <a href="tel:+919110956664">
                  <i class="fas fa-mobile-alt"></i> +91 9110956664
  </a>
              </div>
            </div>
          </div>


        </div>
        <div className="copywrite">
          <div className="social-links">
            <a href="#facebook-link"><i class="fab fa-facebook"></i></a>
            <a href="#instagram-link"><i class="fab fa-instagram"></i></a>
            <a href="#twitter-link"><i class="fab fa-twitter"></i></a>
            <a href="#youtube"><i class="fab fa-youtube"></i></a>
            <a href="#whatsapp-link"><i class="fab fa-whatsapp-square"></i></a>

          </div>
          <p>&#169; COPYWRITE BY <a href="#home">CAREER TARGET</a> </p>

        </div>


      </section>






      {/* contact section end here.................... */}














    </div>
  );
}




// end code of main page.........

export default Home;

