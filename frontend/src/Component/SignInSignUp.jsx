import React, { useState, useContext } from "react";
import { useHistory, NavLink } from "react-router-dom";
import logo from "../Images/career-target-logo-f.png";
import signin from "../Images/svg/signin.svg";
import signup from "../Images/svg/signup.svg";
import { UserContext } from "../App";
const SignIn = () => {
  const { state, dispatch } = useContext(UserContext);

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    }); //fetch close

    const data = await res.json();
    console.log(data);
    if (res.status === 500 || !data) {
      window.alert("unable to sign in");
    } else if (res.status === 200) {
      dispatch({ type: "USER", payload: true });
      window.alert("welcome : " + data.message.email);
      history.push("/");
    } else if (res.status === 400) {
      window.alert("invalid Credientials");
    }
  }; //
  return (
    <>
      <div
        className="container-fluid p-md-5"
        style={{
          backgroundColor: "#212D47",
        }}
      >
        <div className="container p-md-5">
          <div className="row">
            <div
              className="col-md-6 d-none d-md-block pr-md-5 pt-md-5 border-sm-0"
              style={{
                borderRadius: "10px 0px 0px 10px",
                // backgroundImage: `url(${signin})`,
                // backgroundSize: "cover",
                backgroundColor: "#CCCCFF",
              }}
            >
              <img src={signin} alt="" height="500" width="100%vw" />
            </div>
            <div
              className="col-md-6 col-sm-12 p-5 border-sm-0"
              style={{
                backgroundColor: "#6495ED",
                borderRadius: "0px 10px 10px 0px",
              }}
            >
              <div className="pb-5 text-center">
                <p
                  className=""
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    fontFamily: "pattaya",
                    color: "blue",
                  }}
                >
                  Welcome to
                </p>
                <img
                  src={logo}
                  alt="logo"
                  height="50px"
                  width="200px"
                  className=""
                />
              </div>
              <form class="sign-in" id="sign-in" method="post">
                <div className="row">
                  <div className="col-2 text-right">
                    <div className="mb-3">
                      <label
                        for="exampleInputEmail1"
                        className="form-label inline"
                      >
                        <i
                          class="fas fa-envelope"
                          style={{ fontSize: "30px", color: "#ECF0F1" }}
                        ></i>
                      </label>
                    </div>
                  </div>
                  <div className="col-10">
                    <input
                      type="email"
                      className="form-control border-0"
                      id="email"
                      name="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter Email"
                      value={email}
                      autoComplete="off"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2 text-md-right">
                    <div className="mb-1">
                      <label for="exampleInputPassword1" className="form-label">
                        <i
                          class="fas fa-unlock-alt"
                          style={{ fontSize: "30px", color: "#ECF0F1" }}
                        ></i>
                      </label>
                    </div>
                  </div>
                  <div className="col-10">
                    <input
                      type="password"
                      className="form-control border-0"
                      id="password"
                      placeholder="Enter Password"
                      name="password"
                      value={password}
                      autoComplete="off"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 col-sm-10 offset-md-4">
                    <div className="mb-3 text-right">
                      <label className="forget-pass-label" for="exampleCheck1">
                        <NavLink
                          to="/"
                          style={{ color: "#CCCCFF", textDecoration: "none" }}
                        >
                          forget password
                        </NavLink>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row text-center pb-5">
                  <div className="col-md-8 col-sm-12">
                    <button
                      type="button"
                      className="btn border form-control border-white offset-md-3 rounded-pill pl-5 pr-5"
                      onClick={loginUser}
                      style={{
                        // paddingLeft: "70px",
                        // paddingRight: "70px",
                        backgroundColor: "#EDBB99",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-center text-white">
                    --------------OR--------------
                  </div>
                  <div className="col-12 mt-3 text-center">
                    <div
                      className="logo d-inline border rounded-pill p-2"
                      style={{ color: "#ECF0F1" }}
                    >
                      <i
                        class="fab fa-google"
                        style={{ fontSize: "25px", color: "#fff" }}
                      ></i>{" "}
                      &nbsp;&nbsp;Sign In With Google
                    </div>
                  </div>
                  <div className="col-12 mt-5 text-center">
                    <p className="d-inline" style={{ color: "#CCCCFF" }}>
                      New to Career Target?
                    </p>
                    &nbsp;
                    <NavLink to="/signup" style={{ color: "#ECF0F1" }}>
                      Create Account
                    </NavLink>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SignUp = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    phone: "",
    password: "",
  });
  let name, value;
  const handleInputs = (e) => {
    // console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { email, phone, password } = user;
    const result = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        phone: phone,
        password: password,
      }), //body close
    }); //fetch close
    const res = await result.json();
    if (result.status === 422) {
      window.alert("user already exist");
    } else if (result.status === 200) {
      window.alert("Register sucessfull");
    } else {
      console.log(result.status);
      window.alert("Failed to Register");
      history.push("/");
    }
  }; //postdata close
  return (
    <>
      <div
        className="container-fluid p-md-5"
        style={{
          backgroundColor: "#212D47",
        }}
      >
        <div className="container p-md-5">
          <div className="row">
            <div
              className="col-md-6 d-none d-md-block pr-md-5 pt-md-5 border-sm-0"
              style={{
                borderRadius: "10px 0px 0px 10px",
                // backgroundImage: `url(${signin})`,
                // backgroundSize: "cover",
                backgroundColor: "#94ECCB",
              }}
            >
              <img src={signup} alt="" height="500" width="100%vw" />
            </div>
            <div
              className="col-md-6 col-sm-12 p-5 border-sm-0"
              style={{
                backgroundColor: "#40E0D0",
                borderRadius: "0px 10px 10px 0px",
              }}
            >
              <div className="pb-5 text-center">
                <p
                  className=""
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    fontFamily: "pattaya",
                  }}
                >
                  Welcome to
                </p>
                <img
                  src={logo}
                  alt="logo"
                  height="50px"
                  width="200px"
                  className=""
                />
              </div>
              <form method="post" name="user-reg" id="user-reg">
                <div className="row">
                  <div className="col-2 text-right">
                    <div className="mb-3">
                      <label
                        for="exampleInputEmail1"
                        className="form-label inline"
                      >
                        <i
                          class="fas fa-envelope"
                          style={{ fontSize: "30px", color: "#ECF0F1" }}
                        ></i>
                      </label>
                    </div>
                  </div>
                  <div className="col-10">
                    <input
                      type="email"
                      className="form-control border-0"
                      id="email"
                      name="email"
                      autoComplete="off"
                      aria-describedby="emailHelp"
                      placeholder="Enter Email"
                      value={user.email}
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div className="row mb-1">
                  <div className="col-2 text-md-right">
                    <div className="mb-1">
                      <label for="exampleInputMobile" className="form-label">
                        <i
                          class="fas fa-mobile"
                          style={{ fontSize: "30px", color: "#ECF0F1" }}
                        ></i>
                      </label>
                    </div>
                  </div>
                  <div className="col-10">
                    <input
                      type="number"
                      className="form-control border-0"
                      id="phone"
                      name="phone"
                      placeholder="Enter Phone"
                      value={user.phone}
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-2 text-md-right">
                    <div className="mb-1">
                      <label for="exampleInputPassword1" className="form-label">
                        <i
                          class="fas fa-unlock-alt"
                          style={{ fontSize: "30px", color: "#ECF0F1" }}
                        ></i>
                      </label>
                    </div>
                  </div>
                  <div className="col-10">
                    <input
                      type="password"
                      className="form-control border-0"
                      id="password"
                      name="password"
                      placeholder="Enter Password"
                      value={user.password}
                      onChange={handleInputs}
                    />
                  </div>
                </div>

                <div className="row text-center pb-5">
                  <div className="col-md-8 col-sm-12">
                    <button
                      type="button"
                      onClick={PostData}
                      className="btn border form-control border-white offset-md-5 rounded-pill pl-5 pr-5"
                      style={{
                        // paddingLeft: "70px",
                        // paddingRight: "70px",
                        backgroundColor: "#EDBB99",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mt-5 text-center">
                    <p className="d-inline" style={{ color: "#797D7F" }}>
                      Member of Career Target?
                    </p>
                    &nbsp;
                    <NavLink to="/login" style={{ color: "#ECF0F1" }}>
                      Log In
                    </NavLink>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { SignIn, SignUp };
