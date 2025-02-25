import React from 'react'
import { NavLink } from 'react-router-dom'

const JsHeader = () => {
  return (
    <div className='h-[50px] border-b-2'>
    <h1>Header</h1>
    <NavLink to={"/"}> home</NavLink>
  </div>
  )
}

export default JsHeader
