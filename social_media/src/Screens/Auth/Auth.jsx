import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>DH Media</h1>
          <h6>Amazed while surfing!</h6>
        </div>
      </div>
      {/* <Signup/> */}
        <LogIn/>
    </div>
  );
};

function LogIn() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span>
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    );
  }

function Signup() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign Up</h3>

        <div>
          <input type="text" placeholder="First Name" className="infoInput" name="firstName"/>
          <input type="text" placeholder="Last Name" className="infoInput" name="lastName"/>
        </div>
        <div>
          <input type="text" placeholder="User Name" className="infoInput" name="userName"/>
        </div>
        <div>
          <input type="text" placeholder="Password" className="infoInput" name="password"/>
          <input type="text" placeholder="Confirm password" className="infoInput" name="confirmPassword"/>
        </div>
        <div>
            <span style={{fontSize:'12px'}}>Already have an account. Login!</span>
        </div>
        <button className="button infoButton" type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Auth;
