import React from 'react'

function Dashboard(props) {
  return (
    <>
    <div className='card-group'>
    <div className="card text-white bg-secondary mb-3">
  <div className="card-body">
    <h1 className="card-title border-bottom">Total</h1>
    <h4 className='float-end'>{props.count.all}</h4>
  </div>
</div>
    <div className="card text-white mx-4 bg-primary mb-3">
  <div className="card-body">
    <h1 className="card-title border-bottom">New</h1>
    <h4 className='float-end'>{props.count.new}</h4>
  </div>
</div>
    <div className="card text-white bg-success mb-3">
  <div className="card-body">
    <h1 className="card-title border-bottom">Accepted</h1>
    <h4 className='float-end'>{props.count.accepted}</h4>
  </div>
</div>
        <div className="card text-white mx-4 bg-danger mb-3">
  <div className="card-body">
    <h1 className="card-title border-bottom">Rejected</h1>
    <h4 className='float-end'>{props.count.rejected}</h4>
  </div>
</div>
    </div>
    </>)
}

export default Dashboard