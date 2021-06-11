import React, { useEffect, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import "../CSS/Profile.css";
import profile from "../Images/profile.png";

export const Profile = () => {
  // var id, str;
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const callProfile = async () => {
    try {
      var res = await fetch("/profile", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      }); //fetch
      const data = await res.json();
      console.log(data);
      setUserData(data);

      // console.log(userData);
      if (!res.status === 200 || res.status === 400) {
        const error = new Error(res.error);
        throw error;
        // console.log(res.status);
        // history.push("/services");
      }
      // else {
      //   console.log(res.status);
      // }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  }; //callprofile
  useEffect(() => {
    callProfile();
  }, []);

  // str = userData.email;
  // id = str.split("@");

  return (
    <>
      <div className="pt-5 pb-5" style={{ backgroundColor: "#CCCCFF" }}>
        <div class="container emp-profile">
          <form method="post">
            <div class="row">
              <div class="col-md-4">
                <div class="profile-img ">
                  <img
                    src={profile}
                    alt="profile pic"
                    style={{ borderRadius: "10px" }}
                  />
                  <div
                    class="file btn btn-lg btn-primary"
                    style={{ borderRadius: "0px 0px 10px 10px" }}
                  >
                    Change Photo
                    <input type="file" name="file" />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="profile-head">
                  <h5>{userData.firstName + " " + userData.lastName}</h5>
                  <h6>{userData.profession}</h6>
                  {/* <p class="proile-rating">
                    RANKINGS : <span>8/10</span>
                  </p> */}
                  <br />
                  <br />
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        About
                      </a>
                    </li>
                    {/* <li class="nav-item">
                      <a
                        class="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Timeline
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div class="col-md-2">
                <NavLink
                  to={{
                    pathname: "editProfile",
                    state: { email: userData.email, id: userData._id },
                  }}
                >
                  <button
                    type="submit"
                    class="profile-edit-btn"
                    name="btnAddMore"
                    value="Edit Profile"
                  >
                    Edit Profile
                  </button>
                </NavLink>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="profile-work">
                  <p>WORK LINK</p>
                  <a href="">
                    <i class="fab fa-github" style={{ fontSize: "30px" }}></i>
                    &nbsp;Github
                  </a>
                  <br /> <br />
                  <a href="">
                    <i class="fab fa-linkedin" style={{ fontSize: "30px" }}></i>{" "}
                    &nbsp;LinkedIn
                  </a>
                  <br /> <br />
                  <a href="">
                    <i class="fas fa-at" style={{ fontSize: "30px" }}></i>{" "}
                    &nbsp;Mail
                  </a>
                  <br /> <br />
                  <a href="">
                    <i class="fab fa-facebook" style={{ fontSize: "30px" }}></i>{" "}
                    &nbsp;Facebook
                  </a>
                  <p>SKILLS</p>
                  Web Designer
                  <br />
                  Web Developer
                  <br />
                  WordPress
                  <br />
                  WooCommerce
                  <br />
                  PHP
                  <br />
                </div>
              </div>
              <div class="col-md-8">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label>User Id</label>
                      </div>
                      <div class="col-md-6">
                        <p>{userData.id}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Name</label>
                      </div>
                      <div class="col-md-6">
                        <p>{userData.firstName + " " + userData.lastName}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Email</label>
                      </div>
                      <div class="col-md-6">
                        <p>{userData.email}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div class="col-md-6">
                        <p>{userData.phone}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Profession</label>
                      </div>
                      <div class="col-md-6">
                        <p>{userData.profession}</p>
                      </div>
                    </div>
                  </div>
                  {/* <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label>Experience</label>
                      </div>
                      <div class="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Hourly Rate</label>
                      </div>
                      <div class="col-md-6">
                        <p>10$/hr</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Total Projects</label>
                      </div>
                      <div class="col-md-6">
                        <p>230</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>English Level</label>
                      </div>
                      <div class="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Availability</label>
                      </div>
                      <div class="col-md-6">
                        <p>6 months</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <label>Your Bio</label>
                        <br />
                        <p>Your detail description</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
