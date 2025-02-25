import React from 'react'
import { NavLink , Link } from 'react-router-dom'

const HtmlLeft = () => {
  return (
    <div className=' w-[300px] border-r-2 h-full fixed z-10 top-[50px]'>
      <h1>Left</h1>
      <Link to="/lessonHtml1">what and why?</Link>
     

    </div>
  )
}

export default HtmlLeft
