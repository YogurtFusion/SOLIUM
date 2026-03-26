import React, { useState } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import Auth from "./pages/Auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/auth" element={<Auth/>} /> 
    </Routes>
  );
}

export default App;
