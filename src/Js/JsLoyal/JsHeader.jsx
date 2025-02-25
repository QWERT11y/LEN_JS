import React from 'react'
import { NavLink } from 'react-router-dom'

const JsHeader = () => {
  return (
    <div className='w-full bg-white h-[50px] border-b-2 fixed z-20'>
    <h1>Header</h1>
    <NavLink to={"/"}>Home</NavLink>
  </div>
  )
}

export default JsHeader
