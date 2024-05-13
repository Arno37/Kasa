import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/index.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/header";
import Accueil from "./Pages/Accueil";
import APropos from "./Pages/APropos";
import Footer from "./components/Footer";
import RentalSheet from "./Pages/RentalSheet/index";


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
    <Header />
      <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="/RentalSheet/:id" element={<RentalSheet />} />
        
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)