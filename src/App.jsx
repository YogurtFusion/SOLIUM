import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero.jsx";
import Trending from "./components/Trending.jsx";
import Genre from "./components/Genre.jsx";
import Creators from "./components/Creators.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <Trending/>
      <Creators/>
      <Genre/>
    </>
  );
}

export default App;
