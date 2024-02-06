import React from 'react'
import { Link } from 'react-router-dom'

const ReflixNavbar = () => {
  return (
    <nav className="navbar">

        <div className="navbar-link">
        <Link to="/">Home</Link>
        </div>

        <div className="navbar-link">
          <Link to="/catalog">Catalog</Link>
        </div>
        
    </nav>
  )
}

export default ReflixNavbar