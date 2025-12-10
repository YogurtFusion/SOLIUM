import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      {/* <div className="w-full h-screen "></div> */}
    </>
  );
}

export default App;
