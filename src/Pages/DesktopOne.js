import React from 'react'
import Navbar from './Navbar'
import "../Styles/Desktop-1.css"


function DesktopOne() {
  return (
    <>
      <div className='container-fluid'>

        <div className=' bg-img'>
          <div className='gradientImg'>
            <div className='navb'>
              <Navbar />
            </div>

            <ul className='social-icons'>
              <li><i className='fa fa-brands fa-facebook-f  icons' /></li>
              <li><i className='fa fa-brands fa-instagram  icons' /></li>
              <li><i className='fa fa-brands fa-linkedin  icons' /></li>
            </ul>

            <div></div>
            <div></div>
            <div></div>

          </div>
        </div>

        {/* ====================================================================================================================================== */}

        <div className='row rows m-0'>

          <div className='col-md-3'>
            <h1 className='heading'>STABLE</h1>
            <p className='text'>+254 Lorem ipsum</p>
          </div>
          <div className='col-md-3'>
            <h1 className='heading'>DYNAMIC</h1>
            <p className='text'>Lorem ipsum dolor sit amet, Aconsectetur adipiscing elit</p>
          </div>
          <div className='col-md-3'>
            <h1 className='heading'>FORTE</h1>
            <p className='text'>58  adipiscing elit.</p>
          </div>
          <div className='col-md-3' style={{ border: "none" }}>
            <h1 className='heading'>ESPERTO</h1>
            <p className='text'>Lorem ipsum dolor sit amet, Aconsectetur adipiscing elit</p>
          </div>

        </div>
      </div>
  
    </>
  )
}

export default DesktopOne
