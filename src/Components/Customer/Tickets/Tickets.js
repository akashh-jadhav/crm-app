import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import TicketDashboard from './TicketDashboard';
import "./Tickets.css"

function Tickets(){
    const [ticketsData, setTicketData] = useState([]);
    const [filteredCustomers, setFilteredCustomer] = useState([]);
    const [count, setCount]= useState({});
    const navigate = useNavigate();



    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+"ticket").then((res)=> res.json())
            .then(result=>{
            setTicketData(result);
            setFilteredCustomer(result);
            //Filter based on diff statuses and update count state
            let obj={};
                    obj.total = result.length;
                    obj.new = result.filter(t=> t.status==="New").length;
                    obj.progress = result.filter(t=> t.status==="In Progress").length;
                    obj.assigned = result.filter(t=> t.status==="Assigned").length;
                    obj.resolved = result.filter(t=> t.status==="Resolved").length;
                    setCount(obj);
        });
      
    },[]);

    function handleUpdate(desc){
        navigate("/newTicket/"+ desc)
    }

    
    function handleSearch(key){
      const result= ticketsData.filter(t=> t.desc.includes(key));
      setFilteredCustomer(result);
    }
    
  return (
    <div className='container'>
    <TicketDashboard count={count}/>
    <a href='/newTicket' className="btn btn-success">
        New Ticket
      </a>
      <form className="float-end form-inline">
      <input onInput={(e)=>{handleSearch(e.target.value)}} className=" mx-2 mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
        <table className="table">
        <thead>
          <tr>
            <th scope="col">Customer Name</th>
            <th scope="col">Issues</th>
            <th scope="col">Status</th>
            <th scope="col">Assign To</th>
            <th scope="col">Date of ticket</th>
          </tr>
        </thead>
        <tbody>
        {
          filteredCustomers.map(t=>
            <tr>
            <td>{t.customer}</td>
            <td>{t.desc}</td>
            <td>{t.assignedTo}</td>
            <td
            className = {
              t.status==="New"?"st_blue ":
              t.status === "Assigned"? "st_yellow":
              t.status === "In Progress"? "st_red":
              "st_green"}>{t.status}</td>
            <td>{t.raisedOn}</td>
            <td>
                <button 
                    onClick={()=>{handleUpdate(t.desc)}}
                className="btn btn-warning">Edit</button>
            </td>
        </tr>
            )
        }
            
        </tbody>
        </table>
    </div>
  )
}

export default Tickets