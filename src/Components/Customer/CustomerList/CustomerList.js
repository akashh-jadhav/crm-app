import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CustomerList.css";
import { useNavigate} from 'react-router';
import Dashboard from '../Dashboard/Dashboard';


function CustomerList() {
  //set data 
  const [customers, setCustomer] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const [filteredCustomers, setFilteredCustomer] = useState([]);
  const [count, setCount]= useState({});
  const [ pages, setPages] = useState([]);
  const navigate = useNavigate();

 

  //calling the api
  useEffect(()=>{
    load(1)
  }, []);

  function load(pageNo){
    fetch(process.env.REACT_APP_API_URL + "customer/page/"+ pageNo).then(res=>{
    return res.json()
  }).then(res=> {
    setCustomer(res.records)
    setFilteredCustomer(res.records)
    let newCounts = res.records.filter(c=> c.status==="New").length
    let acceptedCounts = res.records.filter(c=> c.status==="Accepted").length
    let rejectedCounts = res.records.filter(c=> c.status==="Rejected").length
    let countobj = {
      "new": newCounts,
      "accepted": acceptedCounts,
      "rejected": rejectedCounts,
      "all": res.records.length
    };
    setCount(countobj);

    let totalpages = Math.ceil(res.totalCount/100);
    let arrayOfPages = new Array(totalpages).fill(0);
    console.log(arrayOfPages)
  setPages(arrayOfPages);
  setCurrentPage(pageNo);
  });
  }



  function handleUpdate (name){
    navigate("/form/" + name)
  }

  function handleSearch(key){
    if(!key || key.length === 0){
      setFilteredCustomer(customers);
    }
    else{
      const result = customers.filter(c=> c.name.includes(key));
      setFilteredCustomer(result)
    }
  }

  function handleDelete (name){
    fetch(process.env.REACT_APP_API_URL+"customer/"+name, {
      method: "DELETE"
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCustomer(res)
        setFilteredCustomer(res);
      });
  }

  return (
    <div className="container">
    <div>
    <Dashboard count={count}/>
    </div>
        <a href='/form' className="btn btn-success">
        New Customer
      </a>
      <form className="float-end form-inline">
      <input onInput={(e)=>{handleSearch(e.target.value)}} className=" mx-2 mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    
      {
        customers.length === 0 && (
          <div className="alert alert-primary container" role="alert">
             No customers Data listed.</div>
        )}
      
        <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Website</th>
            <th scope="col">Turnover</th>
            <th scope="col">Status</th>
            <th scope="col">NumberOfEmployees</th>
            <th scope="col">CEO</th>
            <th scope="col">Established Year</th>
          </tr>
        </thead>

       { filteredCustomers.length > 0 &&
        <tbody>
          {/* rendering data in table rows. */}
          {filteredCustomers.map((c, key) => (
            <tr key={key}>
              <td>{c.name}</td>
              <td>{c.website}</td>
              <td>{c.turnover}</td>
              <td className={
                  c.status==="New" ? 'st_blue':
                  c.status==="Accepted" ? 'st_green':
                  'st_red'
                  }>
                  {c.status}
                </td>
              <td>{c.employees}</td>
              <td>{c.ceo}</td>
              <td>{c.year}</td>
              <td>
                    <ul className="list-inline m-0">
                        <li className="list-inline-item">
                            <button className="btn btn-success btn-sm rounded-0" onClick={()=>handleUpdate(c.name)} type="button" data-toggle="tooltip" data-placement="top" title="Edit">Update</button>
                        </li>
                       <li className="list-inline-item">
                            <button className="btn btn-danger btn-sm rounded-0" onClick={()=>handleDelete(c.name)} type="button" data-toggle="tooltip" data-placement="top" title="Delete">Delete</button>
                       </li>
                    </ul>
              </td>
            </tr>
          ))}
        </tbody>
       }
      </table>

      <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
    <li className="page-item"><button onClick={()=>load(currentPage-1)} className="page-link">Previous</button></li>
    {
      pages.map((p,i)=>(
        <li className="page-item">
        <button className="page-link" 
        onClick={()=>{
          load(i+1);
        }}
        >{i+1}</button>
        </li>
        )
        )
    }
    <li><button onClick={()=>load(currentPage+1)} className="page-link">Next</button></li>
    
  </ul>
</nav>
      
    </div>);
}

export default CustomerList;