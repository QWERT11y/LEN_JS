import React from 'react'
import { Link } from 'react-router-dom'

const JsJeft = () => {
  return (
    <div className=" bg-[#0f1316] w-[300px] flex justify-center gap-[35px] border-r-2 border-[#1e1e1f] h-full fixed py-[50px] z-10 top-[70px]">
    <ul className="flex gap-[15px] flex-col ">
      <div className="flex items-center justify-center w-[250px] h-[40px] rounded-lg bg-slate-300 text-black">
        <li>
          {" "}
          <Link to="/lessonJs1">STRING, NUMBER,VAR</Link>
        </li>
      </div>
      
      <div className="flex items-center justify-center w-[250px] h-[40px] rounded-lg bg-slate-300 text-black">
        <li>
          {" "}
          <Link to="/lessonJs2">BOOLEAn,Operatorlar</Link>
        </li>
      </div>
      <div className="flex items-center justify-center w-[250px] h-[40px] rounded-lg bg-slate-300 text-black">
        <li>
          {" "}
          <Link to="/lessonJs3">IF, ELSE,ELSE IF</Link>
        </li>
      </div>
      <div className="flex items-center justify-center w-[250px] h-[40px] rounded-lg bg-slate-300 text-black">
        <li>
          {" "}
          <Link to="/lessonJs4">O’zgaruvchilar var, let, const</Link>
        </li>
      </div>
      <div className="flex items-center justify-center w-[250px] h-[40px] rounded-lg bg-slate-300 text-black">
        <li>
          {" "}
          <Link to="/lessonJs5">STRING METODLARI</Link>
        </li>
      </div>
      <div className="flex items-center justify-center w-[250px] h-[40px] rounded-lg bg-slate-300 text-black">
        <li>
          {" "}
          <Link to="/lessonJs6">FUNCTION</Link>
        </li>
      </div>
      
      <div className="flex items-center justify-center w-[250px] h-[40px] rounded-lg bg-slate-300 text-black">
        <li>
          {" "}
          <Link to="/lessonJs7">FOR LOOP</Link>
        </li>
      </div>
      <div className="flex items-center justify-center w-[250px] h-[40px] rounded-lg bg-slate-300 text-black">
        <li>
          {" "}
          <Link to="/lessonJs8">object</Link>
        </li>
      </div>
      <div className="flex items-center justify-center w-[250px] h-[40px] rounded-lg bg-slate-300 text-black">
        <li>
          {" "}
          <Link to="/lessonJs9">Array</Link>
        </li>
      </div>
      
    </ul>
  </div>
  )
}

export default JsJeft
