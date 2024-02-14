import React from 'react'
import { NavLink } from 'react-router-dom'

function Navres() {
  return (
    <>
    <div>
  <i className="fa-solid fa-bars-staggered fa-4x p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{color:"white"}}/>
  <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel" >
    <div className="offcanvas-header">
    </div>
      <div className="text-center p-3 mt-3">
          <i type="button" className="fa-solid fa-xmark fa-3x" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
    <div className="offcanvas-body">

    <div className='row navresrow'>
            <div className='col-md-2 navresrow'>
            <NavLink className="offcanvas-nav-link " aria-current="page" to = "/">Home</NavLink>
            </div>
            <div className='col-md-2 navresrow'>
            <NavLink className="offcanvas-nav-link " aria-current="page" to = "/">About</NavLink>
            </div>
            <div className='col-md-2 navresrow'>
            <NavLink className="offcanvas-nav-link " aria-current="page" to = "/">Contact</NavLink>
            </div>
           
           
           
          </div>
      ...
    </div>
  </div>
</div>

    </>
  )
}

export default Navres
