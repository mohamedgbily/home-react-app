import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return<>
  
  <nav className="navbar navbar-expand-lg layout-nav p-4">
  <div className="container">
    <Link className="navbar-brand text-white txt" to="#">Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link text-white txt" to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white txt" to="portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white txt" to="contact">Contact</Link>
        </li>
     
      </ul>
  
    </div>
  </div>
</nav>
  
  </>
   
}
