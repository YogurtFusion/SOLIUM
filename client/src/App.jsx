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
  import ApiTest from "./components/test/ApiTest";
  import SearchResults from "./components/features/search/Search";
  import SearchDetails from "./components/features/search/SearchDetails";
import Contact from "./pages/Contact";
import About from "./pages/About";

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
          <Route path="/test" element={<ApiTest/>} />
          <Route path="/search" element={<SearchResults/>} />
          <Route path="/search/:id" element={<SearchDetails/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
        </Routes>

        {!hideLayout && <Footer />}
      </>
    );
  }

  export default App;
