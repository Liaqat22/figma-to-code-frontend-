import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../Media/images/Vector.png"

function Footer() {
  return (
    <>
      <div className='container-fluid '>
        <div className='row rows rowD3' style={{background:"#023047",color:"white" ,marginBottom: "0rem"}}>
            <div className='col-md-5'>
            <NavLink className="navbar-brand" to="#" style={{border : "none"}}><b className='brandLogo'>
   <img src = {logo} className='navimg mx-3' alt='logo'/> logoipsum</b></NavLink>
            </div>
            <div className='col-md-3' style={{border:"none"}}>
            <p className='text'>Dolores eaque ut error earum quod. Autem molestias nisi et dolores aspernatur odio. Explicabo sed sequi et odit earum hic quasi totam. </p>
            </div>
            <div className='col-md-2 resCol'>
            <p className='text'>8895 Kasandra </p>
            <p className='text'>Western Sahara </p>
            <p className='text'>21880-5498</p>
            </div>
            <div className='col-md-2 resCol'>
            <p className='text'>357-813-5197 </p>
            <p className='text'>659-219-4515 </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
