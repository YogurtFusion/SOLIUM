import React, { useState } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import Auth from "./pages/Auth";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

function App() {
const hideLayout = location.pathname === "/auth";
  return (
    <>
{!hideLayout && <Navbar/>}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/auth" element={<Auth/>} /> 
    </Routes>

    {!hideLayout && <Footer/>}
    </>
  );
}

export default App;
