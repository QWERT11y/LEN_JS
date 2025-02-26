import React from "react";
import { NavLink, Link } from "react-router-dom";

const HtmlLeft = () => {
  return (
    <div className=" bg-[#0f1316] w-[300px] flex justify-center gap-[35px] border-r-2 border-[#1e1e1f] h-full fixed py-[50px] z-10 top-[70px]">
      <ul className="flex gap-[15px] flex-col ">
        <div className="flex items-center justify-center w-[250px] h-[40px] rounded-lg bg-slate-300 text-black">
          <li>
            {" "}
            <Link to="/lessonHtml1">what and why?</Link>
          </li>
        </div>
        <div className="flex items-center justify-center w-[250px] h-[40px] rounded-lg bg-slate-300 text-black">
          <li>
            {" "}
            <Link to="/lessonHtml2">media</Link>
          </li>
        </div>
        <div className="flex items-center justify-center w-[250px] h-[40px] rounded-lg bg-slate-300 text-black">
          <li>
            {" "}
            <Link to="/lessonHtml3">Routing and Table</Link>
          </li>
        </div>
        <div className="flex items-center justify-center w-[250px] h-[40px] rounded-lg bg-slate-300 text-black">
          <li>
            {" "}
            <Link to="/lessonHtml4">FORM</Link>
          </li>
        </div>
        <div className="flex items-center justify-center w-[250px] h-[40px] rounded-lg bg-slate-300 text-black">
          <li>
            {" "}
            <Link to="/lessonHtml5">Antiqa taglar</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default HtmlLeft;
