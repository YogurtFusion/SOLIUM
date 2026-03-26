import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer.jsx'
ReactDOM.createRoot(root).render(
  <StrictMode>
    {/* <ReactLenis root> */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* </ReactLenis> */}
  </StrictMode>,
)
