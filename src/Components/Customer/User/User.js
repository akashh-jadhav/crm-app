import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

function User() {

    const [users, setUser]= useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+"user")
        .then(res=>res.json())
        .then((parseResult)=> setUser(parseResult))
    },[])

    function handleNewUser(){
        navigate("userform")
    }

    function handleDeactiveStatus(username){
        fetch(process.env.REACT_APP_API_URL+"user/deactivate/"+ username,{
            method : "PUT"
        }).then(res => res.json()).then(parsedResponse => setUser(parsedResponse));
    }

    function handleAactiveStatus(username){
        fetch(process.env.REACT_APP_API_URL+"user/activate/"+ username,{
            method : "PUT"
        }).then(res => res.json()).then(parsedResponse => setUser(parsedResponse));
    }

    

  return (
    <div className='container'>
    <button onClick={handleNewUser} className="btn btn-success">
        New User
      </button>
        <table className="table container">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Username</th>
      <th scope="col">Is Active</th>
    </tr>
  </thead>
  <tbody>
  {
    users.map((u, key) =>
        <tr key={key}>
      <td>{u.name}</td>
      <td>{u.email}</td>
      <td>{u.username}</td>
      <td>{u.isActive ?  <li className="list-inline-item">
                            <button className="btn btn-danger btn-sm" onClick={()=>handleDeactiveStatus(u.username)} type="button" data-toggle="tooltip" data-placement="top" title="Delete">Deactivate</button>
                        </li> :<li className="list-inline-item">
                            <button className="btn btn-success btn-sm" onClick={()=>handleAactiveStatus(u.username)} type="button" data-toggle="tooltip" data-placement="top" title="Edit">Activate</button>
                        </li>}</td>
    </tr>)
  }
    </tbody>
    </table>
    </div>
  )
}

export default User;