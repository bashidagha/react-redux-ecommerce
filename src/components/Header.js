import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-2">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">React Redux Ecommerce</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

  )
}

export default Header
