import React from 'react';
import { Router, Route, Navigate } from 'react-router-dom';
import Home from "../src/pages/Home";
import Appartment from "../src/pages/Appartment";
import Error404 from "../src/pages/Error404";
import About from "../src/pages/About";
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"

function AppRouter() {
  return (
    <Router> 
      <div>
        <Header />  
          <Route path="/" element={<Home />} />
          <Route path="/apartment" element={<Appartment />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404 />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
