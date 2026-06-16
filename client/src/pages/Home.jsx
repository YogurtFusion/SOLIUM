import React from "react";
import Hero from "../components/sections/Hero.jsx";
import MasonryGrid from "../components/features/films/MasonryGrid.jsx";
import Voices from "../components/sections/Voices.jsx";
import Form from "../components/sections/Form.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <MasonryGrid/> 
      <Voices/>
      <Form/>
    </>
  );
};

export default Home;
