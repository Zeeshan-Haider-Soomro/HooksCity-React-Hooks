import React from 'react'
import Header from './Components/Header'
import { Outlet,useLocation } from 'react-router'
import Footer from './Components/Footer'

const App = () => {
  const location = useLocation()
  return (
    <div>
      <Header/>
      <Outlet/>
      {/* {!location.pathname.startsWith("/hooks") && <Footer />} */}
      {location.pathname.startsWith("/hooks") ? null : <Footer />}
    </div>
  )
}

export default App