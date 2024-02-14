import React from 'react'
import "../Styles/Desktop-3.css"
import teamM1 from "../Media/images/Ellipse 1.png"
import teamM2 from "../Media/images/Ellipse 2.png"
import teamM3 from "../Media/images/Ellipse 3.png"

function DesktopThree() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row rows rowD3'>
                    <div className='col-md-4 teamMembersCol'>
                        <div className='card'>
                            <div className='card-img-outer'>
                                <img src={teamM1} alt='' className='cardImg' />
                            </div>
                            <div className='card-text'>
                                <h1 className='heading hD3'>Rolando Yundt Sr.</h1>
                                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis urna. </p>
                            </div>
                        </div>
                    </div>

                    {/* ======================================================================================================= */}

                    <div className='col-md-4 teamMembersCol'>
                        <div className='card'>
                            <div className='card-img-outer'>
                                <img src={teamM2} alt='' className='cardImg' />
                            </div>
                            <div className='card-text'>
                                <h1 className='heading hD3'> Clara Boehm</h1>
                                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis urna. </p>
                            </div>
                        </div>
                    </div>
                    {/* ======================================================================================================= */}

                    <div className='col-md-4 teamMembersCol '>
                        <div className='card'>
                            <div className='card-img-outer'>
                                <img src={teamM3} alt='' className='cardImg' />
                            </div>
                            <div className='card-text'>
                                <h1 className='heading hD3'>Anthony Erdman</h1>
                                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis urna. </p>
                            </div>
                        </div>
                    </div>

                    {/* ================================================= newLetter section ================================================= */}
                    <div className='col-md-12 text-center'>
                        <div className='newsletterMain'>
                            <div className='newstext'>
                                <h1 className='news-heading  '>Anthony Erdman</h1>
                                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis urna. </p>
                                <div className="searchbar">
                                    <form className="formSerchbar" role="search">
                                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                                        <div className='text-center m-3'>
                                        <button className="btn mx-2 news-heading-btn" style={{ background: "#FB8500" }} type="submit">ENVIAR</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DesktopThree
