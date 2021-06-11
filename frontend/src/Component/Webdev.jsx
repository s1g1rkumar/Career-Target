import React from "react";
import webdev from "../Images/web-dev.svg";
import desktop from "../Images/desktop-dev.svg";
import mobile from "../Images/mobile-dev.svg";
function Webdev() {
  return (
    <>
      <div className="container-fluid ">
        <div className="container-fluid border-bottom">
          {" "}
          <div className="container ">
            <div className="row pt-5 pb-5 ">
              <div className="col-sm-12 col-md-5 ">
                <h1 className="h-text1">Frontend Development</h1>
                <br />
                <br />
                <p className="h-desc1">
                  Front-end web development, also known as client-side
                  development is the practice of producing HTML, CSS and
                  JavaScript for a website or Web Application so that a user can
                  see and interact with them directly. The challenge associated
                  with front end development is that the tools and techniques
                  used to create the front end of a website change constantly
                  and so the developer needs to constantly be aware of how the
                  field is developing.
                </p>
                <br />
                <br />
                {/* <button className='h-btn text-center'>Let's Start</button> */}
                <div className="">
                  <button
                    type="button md-mr-5"
                    className="btn btn-danger  h-btn1"
                  >
                    Let's Start
                  </button>
                </div>
              </div>
              <div className="col-sm-12 col-md-7 ">
                <img
                  src="https://image.freepik.com/free-vector/frontend-development-web-banner-concept-website-interface-improvement-illustration_277904-4428.jpg"
                  alt="careerProgress"
                  className="cp-img1"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid border-bottom">
          <div className="container ">
            <div className="row pt-5 pb-5">
              <div className="col-sm-12 col-md-7 ">
                <img
                  src="https://image.freepik.com/free-vector/back-end-typographic-header-concept_277904-6387.jpg"
                  alt="careerProgress"
                  className="cp-img1"
                />
              </div>
              <div className="col-sm-12 col-md-5 ">
                <h1 className="h-text1 ">Backend Development</h1>
                <br />
                <br />
                <p className="h-desc1">
                  Back end Development refers to the server side of development
                  where you are primarily focused on how the site works. Making
                  updates and changes in addition to monitoring functionality of
                  the site will be your primary responsibility. This type of web
                  development usually consists of three parts: a server, an
                  application, and a database. Code written by back end
                  developers is what communicates the database information to
                  the browser. Anything you can’t see easily with the eye such
                  as databases and servers is the work of a back end developer.
                  Back end developer positions are often called programmers or
                  web developers.
                </p>
                <br />
                <br />
                <div className="">
                  <button
                    type="button md-mr-5"
                    className="btn btn-danger  h-btn1"
                  >
                    Let's Start
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="container">
            <div className="row pt-5 pb-5">
              <div className="col-sm-12 col-md-5 ">
                <h1 className="h-text1">Fullstack Development</h1>
                <br />
                <br />
                <p className="h-desc1">
                  It refers to the development of both front end(client side)
                  and back end(server side) portions of web application.
                </p>
                <br />
                <br />
                {/* <button className='h-btn text-center'>Let's Start</button> */}
                <div className="">
                  <button
                    type="button md-mr-5"
                    className="btn btn-danger  h-btn1"
                  >
                    Let's Start
                  </button>
                </div>
              </div>
              <div className="col-sm-12 col-md-7 ">
                <img
                  src="https://image.freepik.com/free-vector/programming-languages-learning-software-coding-courses-website-development-class-script-writing-it-programmers-cartoon-characters_335657-3454.jpg"
                  alt="careerProgress"
                  className="cp-img1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Webdev;
