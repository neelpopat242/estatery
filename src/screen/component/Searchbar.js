import React from 'react'

export default function Searchbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg my-3 ">
  <div className="container-fluid">
    <h3>Search Properties to Rent</h3>
    
      <form className="d-flex" role="search">
        <input className="form-control me-3" type="search" placeholder="Search with Search bar" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    </nav>
    </div>
  )
}
