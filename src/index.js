import React from "react"
//Importation de ReactDOM pour rendre l'application dans le DOM
import ReactDOM from "react-dom/client"
import "./styles/index.scss"
//Importation des composants nécessaires pour le routage
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/header";
import Footer from "./components/Footer";
import Welcome from "./Pages/Welcome";
import About from "./Pages/About/index";
import Location from "./Pages/Location/index";
import Error404 from "./Pages/Error404";


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
    <Header />
      <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/RentalSheet/:id" element={<Location />} />
      <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
//Le Header et le Footer sont affichés sur toutes les pages, et le routage est géré par react-router-dom pour naviguer entre les différentes vues de l'application