import React from "react";
import "./App.css";

import PostView from "./components/postview";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/landingpage";
import Form from "./components/form";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path="/postview" element={<PostView />}/>
      <Route path="/form"  element={<Form/>} />
    </Routes>
    </BrowserRouter>

 
     
    </div>
  );
}

export default App;

