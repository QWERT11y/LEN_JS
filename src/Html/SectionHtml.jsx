import React from "react";
import LessonHtml1 from "./LessonHtml1";
import LessonHtml2 from "./LessonHtml2";
import LessonHtml3 from "./LessonHtml3";
import LessonHtml4 from "./LessonHtml4";
import LessonHtml5 from "./LessonHtml5";
import LessonHtml6 from "./LessonHtml6";
import { Routes, Route } from "react-router-dom";
import HtmlLoyal from "./HtmlLoyal/HtmlLoyal";
const SectionHtml = () => {
  return (
    <div>

        <div>
          <HtmlLoyal>
            <Routes>
              <Route path="/lessonHtml1" element={<LessonHtml1 />} />
              <Route path="/lessonHtml2" element={<LessonHtml2 />} />
              <Route path="/lessonHtml3" element={<LessonHtml3 />} />
              <Route path="/lessonHtml4" element={<LessonHtml4 />} />
              <Route path="/lessonHtml5" element={<LessonHtml5 />} />
              <Route path="/lessonHtml6" element={<LessonHtml6 />} />
            </Routes>
          </HtmlLoyal>
          
        </div>
        <div className="pl-[350px] pt-[100px]">

        <h1>salom hero bu</h1>
        </div>
    </div>
      );

};

export default SectionHtml;
