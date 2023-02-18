import React, { useEffect, useState } from 'react'


function SecureRoutes(props) {
    const [loggedIn, setLogin]= useState(false)
    const isUserLogged = localStorage.getItem("loggedIn");

    useEffect(()=>{
        if (!isUserLogged || isUserLogged!=="true"){
            window.location.href = "signin"
        }
        else{
            setLogin(true)
        }
    })
    
  return (
    <React.Fragment>
        {
            loggedIn ? props.children : null
        }
    </React.Fragment>
  )
}

export default SecureRoutes