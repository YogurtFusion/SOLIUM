import React from "react";
import Hero from "../components/sections/Hero.jsx";
import MasonryGrid from "../components/features/films/MasonryGrid.jsx";
import Voices from "../components/sections/Voices.jsx";
import Form from "../components/sections/Form.jsx";
import PageWrapper from "../components/layout/PageWrapper.jsx";

const Home = () => {
  return (
      <PageWrapper>
    <>
        <Hero />
        <MasonryGrid />
        <Voices />
        <Form />
    </>
      </PageWrapper>
  );
};

export default Home;
