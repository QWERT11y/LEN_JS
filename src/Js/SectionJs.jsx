import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import LessonJs1 from './LessonJs1';
import LessonJs2 from './LessonJs2';
import LessonJs3 from './LessonJs3';
import LessonJs4 from './LessonJs4';
import LessonJs5 from './LessonJs5';
import LessonJs6 from './LessonJs6';
import LessonJS7 from './LessonJS7';
import LessonJs8 from './LessonJs8';
import LessonJs9 from './LessonJs9';
import LessonJs10 from './LessonJs10';
import JsLoyal from './JsLoyal/JsLoyal';
const SectionJs = () => {
  return (
    <div>

    <div>
        <JsLoyal>


     <Routes>
     <Route path="/lessonJs1" element={<LessonJs1/>} />
     <Route path="/lessonJs2" element={<LessonJs2/>} />
     <Route path="/lessonJs3" element={<LessonJs3/>} />
     <Route path="/lessonJs4" element={<LessonJs4/>} />
     <Route path="/lessonJs5" element={<LessonJs5/>} />
     <Route path="/lessonJs6" element={<LessonJs6/>} />
     <Route path="/lessonJs7" element={<LessonJS7/>} />
     <Route path="/lessonJs8" element={<LessonJs8/>} />
     <Route path="/lessonJs9" element={<LessonJs9/>} />
     <Route path="/lessonJs10" element={<LessonJs10/>} />
      

     </Routes>
        
        </JsLoyal>
    </div>
    <div className="">

<div className=" h-[760px] pl-[350px] pt-[100px] relative bg-[url('data:image/jpeg;base64,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')]">
        <Link to={"/LessonHTml1"}>
        <button className="absolute right-[550px] top-[340px] px-4 w-[150px] py-2 rounded-lg border-2  border-[#1e1e1f] ">START</button>
        </Link>
        
      </div>
</div>
    </div>
  )
}

export default SectionJs
