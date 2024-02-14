import React from 'react'
import "../Styles/Navbar.css"
import { NavLink } from 'react-router-dom'
import logo from "../Media/images/Vector.png"
import Navres from './Navres'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <NavLink className="navbar-brand" to="#" style={{border : "none"}}><b className='brandLogo'>
   <img src = {logo} className='navimg mx-3' alt='logo'/> logoipsum</b></NavLink>
            <div className='ms-auto navres'>
              <Navres/>
       </div>


    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to = "/">Home</NavLink>
        </li>
      <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to = "/">About</NavLink>
        </li>
      <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to = "/" style={{border:"none"}}>Contact</NavLink>
        </li>
       
       
      </ul>
    </div>
</nav>
    </>
  )
}

export default Navbar
