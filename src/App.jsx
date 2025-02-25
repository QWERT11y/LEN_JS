import React from "react";
import HomeP from "./HomeP/HomeP";
import {  Routes , Route } from 'react-router-dom'
import Js from "./Js/js";
import Html from "./Html/Html";

const App = () => {
  return (
   <>
   <Routes>
   <Route path="/" element={<HomeP/>}/>
   <Route path="/js" element={<Js/>}/>
   <Route path="/html" element={<Html/>}/>
   </Routes>
    
   
   </>
  );
};

export default App;