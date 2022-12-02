import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn ,signUp} from "../../Api/AuthRequest";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [confirmPass, setConfirmPass] = useState(true);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      data.password === data.confirmPassword
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    }else{
      dispatch(logIn(data))
    }
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>DH Media</h1>
          <h6>Amazed while surfing!</h6>
        </div>
      </div>
      {/* Right side */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Log In"}</h3>

          {isSignUp && (
            <div>
              <input
                onChange={handleChange}
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstName"
                value={data.firstName}
              />
              <input
                onChange={handleChange}
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastName"
                value={data.lastName}
              />
            </div>
          )}
          <div>
            <input
              onChange={handleChange}
              type="text"
              placeholder="User Name"
              className="infoInput"
              name="userName"
              value={data.userName}
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type="password"
              placeholder="Password"
              className="infoInput"
              name="password"
              value={data.password}
            />
            {isSignUp && (
              <input
                onChange={handleChange}
                type="password"
                placeholder="Confirm password"
                className="infoInput"
                name="confirmPassword"
                value={data.confirmPassword}
              />
            )}
          </div>
          <div>
            <span
              style={{
                display: confirmPass ? "none" : "block",
                color: "red",
                fontSize: "12px",
                alignSelf: "flex-end",
              }}
            >
              * Confirm Password is not the same
            </span>
          </div>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account. Login!"
                : "Don't have an account? Sign Up"}
            </span>
          </div>
          <button className="button infoButton" type="submit">
            {isSignUp ? "Sign up" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
