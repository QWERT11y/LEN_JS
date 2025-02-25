import React from 'react'
import { NavLink } from 'react-router-dom'

const HtmlHeader = () => {
  return (
    <div className='h-[50px] border-b-2'>
      <h1>Header</h1>
      <NavLink to={"/"}>Home</NavLink>
    </div>
  )
}

export default HtmlHeader
