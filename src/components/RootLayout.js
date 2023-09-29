import React,{useRef} from 'react'
import { Outlet } from 'react-router-dom'
import NaVbar from './NaVbar'
import Footer from './Footer'
function RootLayout() {
  const footerref = useRef();
  return (
    <div>
      <NaVbar footerref={footerref}/>
      <Outlet/>
      <Footer footerref={footerref}/>
    </div>
  )
}

export default RootLayout