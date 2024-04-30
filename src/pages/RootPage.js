import React from 'react'
import { Outlet } from "react-router-dom";



export default function Root() {
  return (
    <div><Header/>
    <main className='container'>
      <Outlet/>
    </main>
    <Footer/></div>
  )
}
