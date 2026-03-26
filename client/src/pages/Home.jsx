import React from "react";
import Hero from "../components/Hero";
import MasonryGrid from "../components/MasonryGrid.jsx";
import Voices from "../components/Voices.jsx";
import Form from "../components/Form.jsx";

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
