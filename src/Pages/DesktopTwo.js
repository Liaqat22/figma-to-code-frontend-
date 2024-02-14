import React from 'react'
import "../Styles/Desktop-2.css"
import icon1 from "../Media/images/Icon.png"
import icon2 from "../Media/images/Icon (1).png"
import icon3 from "../Media/images/Icon (2).png"
import laptop from "../Media/images/Rectangle 45.png"

function DesktopTwo() {
  return (
    <>
    <div className='container-fluid container-fluid-Desktop2'>

      <div className='row m-0'>
        <div className='col-md-4 p-0 m-0'>
            <div className='row rowblue rows'></div>
            {/* <div className='row'></div> */}
        </div>
        <div className='col-md-8 p-0'>
        <div className='row'></div>
        <div className='row rowgray rows '>
           <div div className = "col-md-4 margin2TB"><img src={icon1} alt='' className='iconImg'/></div>
           <div div className = "col-md-4 margin2TB"><img src={icon2} alt='' className='iconImg'/></div>
           <div div className = "col-md-4 margin2TB"><img src={icon3} alt='' className='iconImg'/></div>
        </div>

        </div>
      </div>

      <div className='row rows rowbottomD2 '>
        <div className='col-md-6 margin2TB'>
            <p className='paraText'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Morbi tristique senectus et netus et malesuada fames ac turpis. Magna sit amet purus gravida quis blandit turpis cursus in. Nunc faucibus a pellentesque sit amet porttitor eget.
            </p>
        </div>
        <div className='col-md-6 margin2TB'>
        <img src={laptop} alt='' className='laptopImg' />
        </div>
      </div>
    </div>
    </>
  )
}

export default DesktopTwo
