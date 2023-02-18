import React, { useState } from 'react'
import "./SignIn.css"
import { useNavigate } from "react-router-dom";

function SignIn() {
 const [user, setUser] = useState({});
 const [loginError, setLoginError] = useState(false)
 const navigate = useNavigate();
  function handleSignIn(){
    console.log(user)
    setLoginError(false)
    fetch(process.env.REACT_APP_API_URL+"user/signin", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
       if(res.status===400){
        setLoginError(true);
        }else if(res.status===200){
          console.log("200");
          localStorage.setItem("loggedIn", "true")
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
      
  }

  return (
    <div className="container2">
      <div className="left">
        <img
          src="https://img.freepik.com/premium-vector/crm-icons-customer-relationship-management-vector-infographics-template_116137-3703.jpg"
          alt=""
        />
      </div>
      <div className="right">
        <h3 className="mb-3 ">Please login.</h3>
        <hr className="header"></hr>

            { loginError &&
              <div className="alert alert-danger" role="alert">
              Invalid Credentials
             </div>}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Enter Your Email
          </label>
          <input type="email" name="email" onInput={(e) => setUser({ ...user, email: e.target.value })} placeholder='Enter Your Email' className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Enter Your Password
          </label>
          <input type="password" placeholder='Enter Your Password' onInput={(e) => setUser({ ...user, password: e.target.value })} name="password" className="form-control" />
        </div>
        <input
          className="btn btn-primary float-end"
          type="button" onClick={handleSignIn}
          value="Sign In"></input>
      </div>
    </div>
  )
}

export default SignIn;