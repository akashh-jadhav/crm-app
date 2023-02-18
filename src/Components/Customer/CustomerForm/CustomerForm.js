import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CustomerForm() {
  const [customerToUpdate, setUpdateCustomer] = useState({});
  const navigate = useNavigate();
  // useParams allows access to route parameters.
  const { customerName } = useParams();
  console.log(customerName);

  useEffect(() => {
    if (customerName) {
      fetch(process.env.REACT_APP_API_URL+"customer/"+customerName)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          
            setUpdateCustomer(res);
        });
    }
  }, [customerName]);


  function handleFormSubmit() {
    
    fetch(process.env.REACT_APP_API_URL+"customer", {
      method: customerName ? "PUT":"POST",
      body: JSON.stringify(customerToUpdate),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      });
  }

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
         
          value={customerToUpdate.name}
          onInput={(e) => {
            let obj = { ...customerToUpdate };
            obj.name = e.target.value;
            setUpdateCustomer(obj);
          }}
          type="text"
          className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Website
        </label>
        <input
          value={customerToUpdate.website}
          onInput={(e) => {
            setUpdateCustomer({ ...customerToUpdate, website: e.target.value });
          }}
          type="text"
          className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Turnover
        </label>
        <input
          value={customerToUpdate.turnover}
          onInput={(e) => {
            let obj = { ...customerToUpdate };
            obj.turnover = e.target.value;
            setUpdateCustomer(obj);
          }}
          type="number"
          className="form-control"></input>
      </div>
      <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Status
          </label>
          <select 
            onChange={
              (e)=>{
                let obj = { ...customerToUpdate };
                obj.status = e.target.value;
                setUpdateCustomer(obj);
              }
            }
          className="form-select">
            <option value="New">New</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          No Of Employees
        </label>
        <input
          value={customerToUpdate.employees}
          onInput={(e) => {
            let obj = { ...customerToUpdate };
            obj.employees = e.target.value;
            setUpdateCustomer(obj);
          }}
          type="number"
          className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          CEO
        </label>
        <input
          value={customerToUpdate.ceo}
          onInput={(e) => {
            let obj = { ...customerToUpdate };
            obj.ceo = e.target.value;
            setUpdateCustomer(obj);
          }}
          type="text"
          className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Established In
        </label>
        <input
          value={customerToUpdate.year}
          onInput={(e) => {
            let obj = { ...customerToUpdate };
            obj.year = e.target.value;
            setUpdateCustomer(obj);
          }}
          type="number"
          className="form-control"></input>
      </div>
      <button
        onClick={handleFormSubmit}
        className="btn btn-primary float-end"
        type="button">
        Create New Customer
      </button>
    </div>
  );
}

export default CustomerForm;