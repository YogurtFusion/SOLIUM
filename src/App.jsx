import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero.jsx";
import Trending from "./components/Trending.jsx";
import Genre from "./components/Genre.jsx";
import Creators from "./components/Creators.jsx";
import CommonQuestion from "./components/CommonQuestion.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <Trending/>
      <Creators/>
      <Genre/>
      <CommonQuestion/>
    </>
  );
}

export default App;
