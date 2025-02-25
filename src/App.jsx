import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeP from "./HomeP/HomeP";
import Js from "./Js/js";
import Html from "./Html/Html";
import LessonHtml1 from "./Html/LessonHtml1";
import LessonHtml2 from "./Html/LessonHtml2";
import LessonHtml3 from "./Html/LessonHtml3";
import LessonHtml4 from "./Html/LessonHtml4";
import LessonHtml5 from "./Html/LessonHtml5";
import LessonHtml6 from "./Html/LessonHtml6";
import LessonJs1 from "./Js/LessonJs1";
import LessonJs2 from "./Js/LessonJs2";
import LessonJs3 from "./Js/LessonJs3";
import LessonJs4 from "./Js/LessonJs4";
import LessonJs5 from "./Js/LessonJs5";
import LessonJs6 from "./Js/LessonJs6";
import LessonJS7 from "./Js/LessonJS7";
import LessonJs8 from "./Js/LessonJs8";
import LessonJs9 from "./Js/LessonJs9";
import LessonJs10 from "./Js/LessonJs10";

const App = () => {
  return (
    <Routes>
      
        <Route path="/lessonHtml1" element={<LessonHtml1 />} />
        <Route path="/lessonHtml2" element={<LessonHtml2 />} />
          <Route path="/lessonHtml3" element={<LessonHtml3 />} />
          <Route path="/lessonHtml4" element={<LessonHtml4 />} />
          <Route path="/lessonHtml5" element={<LessonHtml5 />} />
          <Route path="/lessonHtml6" element={<LessonHtml6 />} />
      <Route path="/" element={<HomeP />} />
      <Route path="/js" element={<Js />} />
      <Route path="/html" element={<Html />} />
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
  );
};

export default App;
