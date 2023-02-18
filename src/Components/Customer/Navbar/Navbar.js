import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import "./Navbar.css"




function NavBar() {

  const [isLoggedIn, setLoggedIn]= useState(false);
  const navigate = useNavigate()
  
  useEffect(()=>{
    const value = localStorage.getItem("loggedIn");
  if(value && value=="true"){
    setLoggedIn(true)
  }
  else{
    setLoggedIn(false)
  }
  })

  function handleLoggedout(){
    localStorage.removeItem("loggedIn");
    navigate("/signin");
  }



  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">MyApp</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/users">User </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/tickets">Tickets </a>
      </li>
      </ul>
      
  </div>
  {
    !isLoggedIn && 
    <div>
    {/* <a href='/signup' className='btn btn-primary float-end'>Sign Up</a> */}
      <a href='/signin' className='btn btn-success float-end mx-4'>Sign In</a></div>
  }
  {
    isLoggedIn &&
    <button onClick={handleLoggedout} className='btn btn-success float-end mx-4'>Sign Out</button>
  }
      
      
</nav>
    </div>
  )
}

export default NavBar;