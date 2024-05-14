import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/index.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/header";
import Footer from "./components/Footer";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Emplacement from "./pages/Emplacement/index";
import Error404 from "./pages/Error404";




const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
    <Header />
      <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/RentalSheet/:id" element={<Emplacement />} />
      <Route path="*" element={<Error404 />} />
      
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)