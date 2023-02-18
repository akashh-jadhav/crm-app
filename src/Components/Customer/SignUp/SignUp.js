import React, { useState } from 'react'
import "./SignUp.css"
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  function handleRegister(){
    console.log(user)
    fetch(process.env.REACT_APP_API_URL+"user/signup", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
       console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      navigate("/signin");
  }
    
  return (
    <div className='container1'>
    <div className="left">
      <img src="https://img.freepik.com/premium-vector/crm-icons-customer-relationship-management-vector-infographics-template_116137-3703.jpg" alt="" />
    </div>

    <div className="right">

    <div className="mb-3 header">
    <h3>Please Register to get started.</h3>
    <hr/></div>
    <div><label htmlFor="name"  
         className="form-lable">Enter Your Name</label>
      <input type="text" placeholder='Enter Your Name' onInput={(e) => setUser({ ...user, name: e.target.value })} className="form-control" />
    </div>
    <div className="mb-3">
    <label htmlFor="email"  className="form-lable">Enter Your Email</label>
      <input type="email" placeholder='Enter Your Email' onInput={(e) => setUser({ ...user, email: e.target.value })} className="form-control" />
    </div>
    <div className="mb-3">
    <label htmlFor="password"  className="form-lable">Enter Your Password</label>
      <input type="password" placeholder='Enter Your Password' onInput={(e) => setUser({ ...user, password: e.target.value })} className="form-control" />
    </div>
    <button className='btn btn-primary float-end' onClick={handleRegister}>Register Now</button>
   </div>
  </div>
  )
}

export default SignUp;