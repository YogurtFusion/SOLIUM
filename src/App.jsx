import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero.jsx";
import Trending from "./components/Trending.jsx";
import Genre from "./components/Genre.jsx";
import Creators from "./components/Creators.jsx";
import CommonQuestion from "./components/CommonQuestion.jsx";
import Genre_Route from "./pages/Genre.jsx";
function App() {
  return (
    <Routes>
      <Route
      path="/"
      element = {
        <>
      <Hero />
      <Trending/>
      <Creators/>
      <Genre/>
      <CommonQuestion/>
    </>
      }
      />
      <Route path="/genre" element={<Genre_Route/>} />
    </Routes>
  );
}

export default App;
