import { useState } from "react";
import Hero from "./components/Hero";
import MasonryGrid from "./components/MasonryGrid";
import Voices from "./components/Voices";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Hero />
      <MasonryGrid/>
      <Voices/>
      <Form/>
    </>
  );
}

export default App;
