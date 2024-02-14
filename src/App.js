import React from 'react'
import DesktopOne from './Pages/DesktopOne'
import DesktopTwo from './Pages/DesktopTwo'
import DesktopThree from './Pages/DesktopThree'
import Footer from './Pages/Footer'

function App() {
  return (
    <>
    <div className='layout'>
      <DesktopOne/>
      <DesktopTwo />
      <DesktopThree />
      <Footer />
    </div>
    </>
  )
}

export default App
