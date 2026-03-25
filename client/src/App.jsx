import React, { useState } from "react";
import Hero from "./components/Hero";
import MasonryGridOld from "./components/MasonryGrid-old"
import MasonryGrid from "./components/MasonryGrid";;
import Voices from "./components/Voices";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Hero />
      <MasonryGrid/>
      {/* <MasonryGridOld/> */}
      <Voices/>
      <Form/>
    </>
  );
}

export default App;
