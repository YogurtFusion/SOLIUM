import { useState } from "react";
import Hero from "./components/Hero";
import MasonryGrid from "./components/MasonryGrid";
import Voices from "./components/Voices";

function App() {
  return (
    <>
      <Hero />
      <MasonryGrid/>
      <Voices/>
    </>
  );
}

export default App;
