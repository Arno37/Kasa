import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/index.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/header";
import Footer from "./components/Footer";
import Accueil from "./Pages/Accueil";


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
    <Header />
      <Routes>
      <Route path="/" element={<Accueil />} />
        
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)