import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero.jsx";
import Trending from "./components/Trending.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <Trending/>
    </>
  );
}

export default App;
