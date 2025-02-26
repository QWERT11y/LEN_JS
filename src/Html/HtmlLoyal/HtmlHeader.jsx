import React from 'react'
import { NavLink , Link } from 'react-router-dom'

const HtmlHeader = () => {
  return (
    <div className='w-[4500px] h-[70px] flex items-center border-b-2  px-[20px] border-[#1e1e1f]  sm:px-[50px] md:px-[100px] lg:px-[216px]   fixed z-20  bg-[#030303]'>
      <Link to={"/"}>
       <a  class=" text-[25px] font-semibold text-white">LEN_js</a>
      </Link>
      
    </div>
  )
}

export default HtmlHeader
