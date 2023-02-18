import React from 'react'

function TicketDashboard(props) {
  return (
    <>
    <div className='card-group'>
    <div className="card text-white bg-secondary mb-3">
  <div className="card-body">
    <h2 className="card-title border-bottom">Total</h2>
    <h4 className='float-end'>{props.count.total}</h4>
  </div>
</div>
    <div className="card text-white mx-4 bg-primary mb-3">
  <div className="card-body">
    <h2 className="card-title border-bottom">New</h2>
    <h4 className='float-end'>{props.count.new}</h4>
  </div>
</div>
    <div className="card text-white bg-warning mb-3">
  <div className="card-body">
    <h2 className="card-title border-bottom">Assigned</h2>
    <h4 className='float-end'>{props.count.assigned}</h4>
  </div>
</div>
        <div className="card text-white mx-4 bg-success mb-3">
  <div className="card-body">
    <h2 className="card-title border-bottom">Resolved</h2>
    <h4 className='float-end'>{props.count.resolved}</h4>
  </div>
</div>
        <div className="card text-white mx-4 bg-danger mb-3">
  <div className="card-body">
    <h2 className="card-title border-bottom">InProgress</h2>
    <h4 className='float-end'>{props.count.progress}</h4>
  </div>
</div>
    </div>
    </>)
}

export default TicketDashboard