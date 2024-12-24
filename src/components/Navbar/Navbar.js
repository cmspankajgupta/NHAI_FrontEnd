import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <h1>Header</h1>
    <ul>

      <li><Link to="/">Home</Link></li>
      <li><Link to="/service">Service</Link></li>


      <li><Link to="/profile/123">Profile</Link></li>
      <li><Link to="/protected">Protected</Link></li>


      <li><Link to="/login">Login</Link></li>
    </ul>
  </nav>
  )
}

export default Navbar
