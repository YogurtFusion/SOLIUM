import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ReactLenis root> */}
    <BrowserRouter>
    <Navbar/>
    <App />
    <Footer/>
    </BrowserRouter>
    {/* </ReactLenis> */}
  </StrictMode>,
)
