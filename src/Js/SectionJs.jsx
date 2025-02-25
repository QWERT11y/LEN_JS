import React from 'react'
import { Routes, Route } from "react-router-dom";
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
const SectionJs = () => {
  return (
    <div>
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
    </div>
  )
}

export default SectionJs
