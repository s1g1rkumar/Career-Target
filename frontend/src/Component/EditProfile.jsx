import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";

function EditProfile() {
  const history = useHistory();
  const [eUser, setEuser] = useState({
    firstName: "",
    lastName: "",
    profession: "",
    bio: "",
    // img: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setEuser({ ...eUser, [name]: value });
  };

  // const handleImg = (e) => {
  //   setEuser({ ...eUser, img: e.target.files });
  // };
  // console.log(eUser);
  const location = useLocation();
  var email = location.state.email;
  var id = location.state.id;
  console.log(id);

  const PostData = async (e) => {
    e.preventDefault();
    const { firstName, lastName, profession, bio } = eUser;
    const result = await fetch("/editProfile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        profession: profession,
        bio: bio,
        //image: img,
        email: email,
        _id: id,
      }), //body close
    }); //fetch close
    console.log("ressult :", result);
    const res = await result.json();
    if (result.status === 200) {
      window.alert("profile updated sucessfully");
      history.push("/Profile");
    } else {
      console.log(result.status);
      window.alert("Failed to update profile");
      history.push("/");
    }
  };
  return (
    <>
      <div className="m-5 p-3" style={{ backgroundColor: "#E5E7E9" }}>
        <div class="container bootstrap snippets bootdey">
          <h1 class="text-primary">
            <span class="glyphicon glyphicon-user"></span>Edit Profile
          </h1>
          <hr />
          <div class="row">
            <div class="col-md-3">
              <div class="text-center">
                <img
                  src="//placehold.it/100"
                  class="avatar img-circle"
                  alt="avatar"
                />
                <h6>Upload a different photo...</h6>

                {/* <input
                  type="file"
                  class="form-control"
                  accept=".png, .jpg, .jpeg"
                  name="profile-pic"
                  onChange={handleImg}
                /> */}
              </div>
            </div>

            <div class="col-md-9 personal-info">
              <div className="d-inline">
                <h3>Personal info</h3>
              </div>
              <div className="d-flex justify-content-end ">
                <h6>{email}</h6>
              </div>

              <form
                method="post"
                name="edit-form"
                class="form-horizontal"
                // role="form"
              >
                <div class="form-group">
                  <label class="col-lg-3 control-label">First name:</label>
                  <div class="col-lg-8">
                    <input
                      class="form-control"
                      type="text"
                      id="firstName"
                      name="firstName"
                      autoComplete="off"
                      value={eUser.firstName}
                      onChange={handleInputs}
                      placeholder="Enter First Name"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-3 control-label">Last name:</label>
                  <div class="col-lg-8">
                    <input
                      class="form-control"
                      type="text"
                      id="lastName"
                      name="lastName"
                      autoComplete="off"
                      value={eUser.lastName}
                      onChange={handleInputs}
                      placeholder="Enter Last Name"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-3 control-label">Profession:</label>
                  <div class="col-lg-8">
                    <input
                      class="form-control"
                      type="text"
                      id="prodession"
                      name="profession"
                      autoComplete="off"
                      value={eUser.profession}
                      onChange={handleInputs}
                      placeholder="Enter Profession"
                    />
                  </div>
                </div>
                <div class="form-group mb-5">
                  <label class="col-lg-3 control-label">Bio:</label>
                  <div class="col-lg-8">
                    <textarea
                      className="form-control"
                      name="bio"
                      id="bio"
                      autoComplete="off"
                      value={eUser.bio}
                      onChange={handleInputs}
                      cols="75"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <div className="buttons pb-5">
                  <div className="mt-5 d-inline">
                    <button className="btn btn-primary" onClick={PostData}>
                      Submit
                    </button>
                  </div>
                  <div className="mt-5 d-inline offset-1">
                    <NavLink to="/">
                      <button className="btn btn-danger">Cancel</button>
                    </NavLink>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    </>
  );
}

export default EditProfile;
