import React from 'react'
// import Videocard from './Videocard'
import Sidebar from './Sidebar'
// import Videocontainer from './Videocontainer'
import Maincontainer from './Maincontainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
     
      <Outlet/>
    </div>
  )
}

export default Body
