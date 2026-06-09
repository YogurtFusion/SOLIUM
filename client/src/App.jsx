import React, { useState } from "react";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Auth from "./pages/Auth";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer";
import FilmDetail from "./components/features/films/FilmDetail";

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === "/auth";
  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/film/:id" element={<FilmDetail/>} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
