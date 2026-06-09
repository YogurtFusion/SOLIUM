import React, { useState } from "react";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Auth from "./pages/Auth";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer";
import FilmDetail from "./components/features/films/FilmDetail";
import MoodCollection from "./components/features/films/MoodCollection";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import Collection from "./components/features/films/Collection";

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === "/auth";
  return (
    <>

      {!hideLayout && <Navbar />}
    
    <ScrollToTop/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/mood/:moodid" element={<MoodCollection/>} />
        <Route path="/film/:id" element={<FilmDetail/>} />
        <Route path="/collection" element={<Collection/>} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
